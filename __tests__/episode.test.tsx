import { render, screen } from '@testing-library/react';
import { Episode } from '../components/episode';
import { altTexts } from '../utils/episode-descriptions';
import { getEpisodes } from '../utils/episodes-handlers';

describe(Episode, () => {
  const episodes = getEpisodes();
  const getEpisodeFor = (imageIndex: number) => {
    return episodes.map(image => {
      return image.images;
    })[imageIndex];
  };

  it('renders first episode with alt text', () => {
    const { getByText } = render(
      <Episode
        title={'Episode 1'}
        images={getEpisodeFor(0)}
        currentEpisodeNumber={1}
        episodes={episodes}
      />
    );
    expect(getByText('Episode 1')).toBeVisible();
  });

  it('renders second episode with its alt attribute', () => {
    const altText = altTexts[1][0];
    render(
      <Episode
        title={'Episode 2'}
        images={getEpisodeFor(1)}
        currentEpisodeNumber={2}
        episodes={episodes}
      />
    );
    const comicImage = screen.getByRole('img');
    expect(comicImage).toHaveAttribute('alt', altText);
  });

  it('renders third episode with its alt attribute', () => {
    const altText = altTexts[2][0];
    render(
      <Episode
        title={'Episode 3'}
        images={getEpisodeFor(2)}
        currentEpisodeNumber={3}
        episodes={episodes}
      />
    );
    const comicImage = screen.getByRole('img');
    expect(comicImage).toHaveAttribute('alt', altText);
  });
});
