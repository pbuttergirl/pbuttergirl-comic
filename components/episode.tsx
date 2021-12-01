import React from 'react';
import { HomeProps } from '../pages/episodes/[slug]';
import { EpisodeType, getEpisodes } from '../utils/episodes-handlers';
import { ComicImage } from './image';
import { Navigation } from './navigation';
import { TextComponentProps } from './text';
import { Text } from './text';

export type EpisodeProps = {
  title: TextComponentProps['title'];
  images: EpisodeType['images'];
  currentEpisodeNumber: HomeProps['currentEpisodeNumber'];
  episodes: HomeProps['episodes'];
};

export const Episode = (props: EpisodeProps) => {
  const { title, images, currentEpisodeNumber, episodes } = props;
  return (
    <div className={'flex flex-col place-items-center m-5 gap-5'}>
      <Text title={title} />
      {images.map(image => {
        return <ComicImage key={JSON.stringify(image)} imagePath={image} />;
      })}
      <Navigation
        listOfEpisodes={episodes}
        currentEpisode={currentEpisodeNumber}
      />
    </div>
  );
};
