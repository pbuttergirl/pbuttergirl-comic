/**
 * @jest-environment jsdom
 */

import { altTexts } from '../utils/episode-descriptions';
import { getEpisodes } from '../utils/episodes-handlers';

describe('getEpisodes', () => {
  it('returns list of episodes', () => {
    const episodes = getEpisodes();
    expect(episodes[0]).toEqual({
      slug: '1',
      name: 'Episode 1',
      images: [
        { path: '/episodes/episode-1/Episode1.png', altText: altTexts[0][0] },
      ],
    });
  });

  it('returns images of episode-4 sorted alphabetically', () => {
    const episodes = getEpisodes();
    expect(episodes[3]).toEqual({
      slug: '4',
      name: 'Episode 4',
      images: [
        {
          path: '/episodes/episode-4/1-KissMaker+2000.png',
          altText: 'Forth episode',
        },
        { path: '/episodes/episode-4/2-Work.png', altText: 'Forth episode 2' },
        { path: '/episodes/episode-4/3-Room.png', altText: 'Forth episode 3' },
      ],
    });
  });
});
