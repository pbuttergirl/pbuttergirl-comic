/**
 * @jest-environment jsdom
 */

import { getEpisodes } from '../utils/episodes-handlers';

describe('getEpisodes', () => {
  it('returns list of episodes', () => {
    const episodes = getEpisodes();
    expect(episodes[0]).toEqual({
      name: 'Episode 1',
      images: ['/episodes/episode-1/Episode1.png'],
    });
  });
});
