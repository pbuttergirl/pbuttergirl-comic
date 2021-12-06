/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodePage from '../pages/episodes/[slug]';
import { getEpisodes } from '../utils/episodes-handlers';
import { Helmet } from 'react-helmet';

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
});
