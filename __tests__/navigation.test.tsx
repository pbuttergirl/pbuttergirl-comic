import { Navigation } from '../components/navigation';
import { render, screen } from '@testing-library/react';
import { getEpisodes } from '../utils/episodes-handlers';

describe('Navigation', () => {
  it('renders both arrows', () => {
    const listOfEpisodes = getEpisodes();
    render(<Navigation listOfEpisodes={listOfEpisodes} currentEpisode={3} />);

    const leftArrow = screen.getByTestId('left-arrow');
    const rightArrow = screen.getByTestId('right-arrow');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });

  describe('Right arrow', () => {
    it('redirects to the next episode', () => {
      const listOfEpisodes = getEpisodes();
      render(<Navigation listOfEpisodes={listOfEpisodes} currentEpisode={3} />);

      const rightArrow = screen.getByTestId('right-arrow') as HTMLAnchorElement;
      expect(rightArrow.href).toContain('/episodes/4');
    });
  });

  describe('Left arrow', () => {
    it('redirects to the previous episode', () => {
      const listOfEpisodes = getEpisodes();
      render(<Navigation listOfEpisodes={listOfEpisodes} currentEpisode={3} />);

      const leftArrow = screen.getByTestId('left-arrow') as HTMLAnchorElement;
      expect(leftArrow.href).toContain('/episodes/2');
    });
  });

  it('does not render left arrow', () => {
    const listOfEpisodes = getEpisodes();
    render(<Navigation listOfEpisodes={listOfEpisodes} currentEpisode={1} />);

    const leftArrow = screen.queryByTestId('left-arrow');
    const rightArrow = screen.getByTestId('right-arrow');

    expect(leftArrow).not.toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });

  it('does not render right arrow', () => {
    const listOfEpisodes = getEpisodes();
    render(<Navigation listOfEpisodes={listOfEpisodes} currentEpisode={5} />);

    const leftArrow = screen.getByTestId('left-arrow');
    const rightArrow = screen.queryByTestId('right-arrow');

    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).not.toBeInTheDocument();
  });
});
