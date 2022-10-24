import glob from 'glob';
import { groupBy } from 'lodash';
import { altTexts } from './episode-descriptions';

export type EpisodeType = ReturnType<typeof getEpisodes>[0];

export function getEpisodes() {
  const episodes = glob.sync('./public/episodes/episode-*/*.png');
  const groupedList = groupBy(episodes, groupFunction);

  return Object.entries(groupedList).map(([key, value], episodeNumber) => {
    const images = value
      .map(item => item.replace('./public/', '/'))
      .sort()
      .map((image, imageIndex) => {
        return {
          path: image,
          altText: altTexts[episodeNumber][imageIndex],
        };
      });

    const slug = (episodeNumber + 1).toString();
    return {
      slug,
      name: (key.charAt(0).toUpperCase() + key.slice(1)).replace('-', ' '),
      images,
    };
  });
}

export const groupFunction = (episodePath: string) => {
  return episodePath.split('/')[3];
};
