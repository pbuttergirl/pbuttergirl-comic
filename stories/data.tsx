import { EpisodeType } from '../utils/episodes-handlers';

const altText = 'Cute kitten';

export const episodes: Array<EpisodeType> = [
  {
    slug: '1',
    name: 'Episode 1',
    images: [{ path: 'http://placekitten.com/g/800/570', altText }],
  },
  {
    slug: '2',
    name: 'Episode 2',
    images: [
      { path: 'http://placekitten.com/g/800/570', altText },
      { path: 'http://placekitten.com/g/800/570', altText },
    ],
  },
  {
    slug: '3',
    name: 'Episode 3',
    images: [{ path: 'http://placekitten.com/g/800/570', altText }],
  },
];
