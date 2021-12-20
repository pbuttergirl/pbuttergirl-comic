/**
 * @jest-environment jsdom
 */

import { getEpisodes } from '../utils/episodes-handlers';

describe('getEpisodes', () => {
  it('returns list of episodes', () => {
    const episodes = getEpisodes();
    expect(episodes[0]).toEqual({
      episodeSlug: '1',
      name: 'Episode 1',
      images: ['/episodes/episode-1/Episode1.png'],
    });
  });

  it('returns images of episode-4 sorted alphabetically', () => {
    const episodes = getEpisodes();
    expect(episodes[3]).toEqual({
      episodeSlug: '4',
      name: 'Episode 4',
      images: [
        '/episodes/episode-4/1-KissMaker+2000.png',
        '/episodes/episode-4/2-Work.png',
        '/episodes/episode-4/3-Room.png',
      ],
    });
  });
});
