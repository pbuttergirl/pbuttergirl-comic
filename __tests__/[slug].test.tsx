/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import EpisodePage from '../pages/episodes/[slug]';
import { getEpisodes } from '../utils/episodes-handlers';
import { Container } from 'react-bootstrap';

describe('EpisodePage', () => {
  it('renders a heading', () => {
    const episode = getEpisodes()[0];
    const episodes = getEpisodes();
    render(
      <EpisodePage
        episode={episode}
        currentEpisodeNumber={1}
        episodes={episodes}
      />
    );

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
    const { container } = render(
      <EpisodePage
        episode={episode}
        currentEpisodeNumber={1}
        episodes={episodes}
      />
    );

    await waitFor(() => {
      expect(container.querySelector('head')).toMatchSnapshot();
    });
  });
});
