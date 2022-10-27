/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodePage, {
  getMetaDescription,
  getStaticPaths,
  getStaticProps,
  getTitle,
  Params,
} from '../pages/episodes/[slug]';
import { getEpisodes } from '../utils/episodes-handlers';
import { GetStaticPropsContext } from 'next';
import { altTexts } from '../utils/episode-descriptions';

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

  it('renders a title of first episode', () => {
    const episode = getEpisodes()[0];
    const result = getTitle(episode.name);
    expect(result).toEqual('Episode 1 - Peanutbutter girl comic');
  });

  it('renders a meta description of first episode', async () => {
    const episode = getEpisodes()[0];
    const result = getMetaDescription(episode.name);
    expect(result).toEqual('Episode 1');
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
            slug: '5',
            name: 'Episode 5',
            images: [
              {
                path: '/episodes/episode-5/Episode-5.png',
                altText: altTexts[4][0],
              },
            ],
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
