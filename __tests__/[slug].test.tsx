/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/episodes/[slug]';
import { getEpisodes } from '../utils/episodes-handlers';

describe('Home', () => {
  it('renders a heading', () => {
    const episode = getEpisodes()[0];
    const episodes = getEpisodes();
    render(
      <Home episode={episode} currentEpisodeNumber={1} episodes={episodes} />
    );

    const heading = screen.getByRole('heading', {
      name: /Episode 1/i,
    });

    const image = screen.getByTestId('comic-image');

    expect(heading).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
