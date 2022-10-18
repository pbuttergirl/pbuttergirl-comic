import { render, screen } from '@testing-library/react';
import { ComicImage } from '../components/image';

fdescribe(ComicImage, () => {
  it('renders first episode with its alt attribute', () => {
    const altText =
      'First episode portrays a short-haired girl who is looking at the jar full of peanut butter.';
    render(
      <ComicImage
        imagePath={'/episodes/episode-1/Episode1.png'}
        altText={altText}
      />
    );
    const comicImage = screen.getByRole('img');
    expect(comicImage).toHaveAttribute('alt', altText);
  });

  it('renders second episode with its alt attribute', () => {
    const altText =
      "Second episode shows two girls standing close to each other. They are the best friends. They have a make up, nice hair and they are ready to go for a party. They are taking a selfie number 435 but they do not like any of them. They try one more time. The girl with blond hair says: 'This time will be perfect.' ";
    render(
      <ComicImage
        imagePath={'/episodes/episode-2/Episode2.png'}
        altText={altText}
      />
    );
    const comicImage = screen.getByRole('img');
    expect(comicImage).toHaveAttribute('alt', altText);
  });
});
