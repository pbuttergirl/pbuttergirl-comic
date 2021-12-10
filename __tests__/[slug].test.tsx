/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import EpisodePage, {
  getServerSideProps,
  Params,
} from '../pages/episodes/[slug]';
import { getEpisodes } from '../utils/episodes-handlers';
import { GetServerSidePropsContext } from 'next';
import { HeadWrapper } from '../utils/wrappers';

describe('EpisodePage', () => {
  beforeEach(() => {
    const episode = getEpisodes()[0];
    const episodes = getEpisodes();
    render(
      <EpisodePage
        episode={episode}
        currentEpisodeNumber={1}
        episodes={episodes}
      />
    );
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /Episode 1/i,
    });

    const image = screen.getByTestId('comic-image');

    expect(heading).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('renders a title', async () => {
    const episode = getEpisodes()[0];
    const episodes = getEpisodes();

    render(
      <EpisodePage
        episode={episode}
        currentEpisodeNumber={1}
        episodes={episodes}
      />,
      { wrapper: HeadWrapper }
    );

    await waitFor(() => {
      expect(document.title).toEqual('Episode 1 - Peanutbutter girl comic');
    });
  });

  describe('getServerSideProps method', () => {
    it('returns props if episode exists', async () => {
      const context = {
        params: {
          slug: '5',
        },
      };

      const result = await getServerSideProps(
        context as GetServerSidePropsContext<Params>
      );

      expect(result).toEqual({
        props: {
          episode: {
            name: 'Episode 5',
            images: ['/episodes/episode-5/Episode-5.png'],
          },
          currentEpisodeNumber: 5,
          episodes: getEpisodes(),
        },
      });
    });

    it('returns episode if episode does not exist', async () => {
      const context = {
        params: {
          slug: 'non-existing',
        },
      };

      const result = await getServerSideProps(
        context as GetServerSidePropsContext<Params>
      );

      expect(result).toEqual({
        redirect: {
          destination: '/',
          permanent: false,
        },
      });
    });
  });
});
