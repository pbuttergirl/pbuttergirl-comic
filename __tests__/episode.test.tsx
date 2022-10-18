import { render, screen } from '@testing-library/react';
import { Episode } from '../components/episode';
import { getEpisodes } from '../utils/episodes-handlers';

describe(Episode, () => {
  const episodes = getEpisodes();
  it('renders first episode with alt text', () => {
    const images = episodes.map(image => {
      return image.images;
    })[0];

    const title = 'Episode 1';

    const { getByText } = render(
      <Episode
        title={title}
        images={images}
        currentEpisodeNumber={1}
        episodes={episodes}
      />
    );
    expect(getByText('Episode 1')).toBeVisible();
  });

  it('renders second episode with its alt attribute', () => {
    const images = episodes.map(image => {
      return image.images;
    })[1];

    const title = 'Episode 2';
    const altText = 'Second episode';
    render(
      <Episode
        title={title}
        images={images}
        currentEpisodeNumber={2}
        episodes={episodes}
      />
    );
    const comicImage = screen.getByRole('img');
    expect(comicImage).toHaveAttribute('alt', altText);
  });

  it('renders third episode with its alt attribute', () => {
    const images = episodes.map(image => {
      return image.images;
    })[2];
    const title = 'Episode 3';
    const altText = 'Third episode';
    render(
      <Episode
        title={title}
        images={images}
        currentEpisodeNumber={3}
        episodes={episodes}
      />
    );
    const comicImage = screen.getByRole('img');
    expect(comicImage).toHaveAttribute('alt', altText);
  });
});
