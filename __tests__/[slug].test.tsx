/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodePage, {
  getServerSideProps,
  Params,
} from '../pages/episodes/[slug]';
import { getEpisodes } from '../utils/episodes-handlers';
import { Helmet } from 'react-helmet';
import { GetServerSidePropsContext } from 'next';

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
    const helmet = Helmet.peek();

    expect(helmet.title).toEqual(['Episode 1', ' - Peanutbutter girl comic']);
  });

  it('renders meta tags', () => {
    const helmet = Helmet.peek();
    const metaTags = helmet.metaTags;

    expect(metaTags).toEqual([{ name: 'description', content: 'Episode 1' }]);
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
