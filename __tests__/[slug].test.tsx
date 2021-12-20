/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import EpisodePage, {
  getStaticPaths,
  getStaticProps,
  Params,
} from '../pages/episodes/[slug]';
import { getEpisodes } from '../utils/episodes-handlers';
import { GetStaticPropsContext } from 'next';
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

  it('renders a meta description', async () => {
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
      expect(
        document
          .querySelector('meta[name=description]')
          ?.getAttribute('content')
      ).toEqual('Episode 1');
    });
  });

  describe('getStaticProps method', () => {
    it('returns props if episode exists', async () => {
      const context = {
        params: {
          slug: '5',
        },
      };

      const result = await getStaticProps(
        context as GetStaticPropsContext<Params>
      );

      expect(result).toEqual({
        props: {
          episode: {
            episodeSlug: '5',
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

      const result = await getStaticProps(
        context as GetStaticPropsContext<Params>
      );

      expect(result).toEqual({
        redirect: {
          destination: '/',
          permanent: false,
        },
      });
    });
  });

  describe('getStaticPaths', () => {
    it('returns pre-defined route for first episode', async () => {
      const resultPath = (await getStaticPaths({})).paths[0];

      expect(resultPath).toEqual({ params: { slug: '1' } });
    });
  });
});
