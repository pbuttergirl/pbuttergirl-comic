import { EpisodePageProps } from '../pages/episodes/[slug]';
import { EpisodeType } from '../utils/episodes-handlers';
import { ComicImage } from './image';
import { Navigation } from './navigation';
import { TextComponentProps } from './text';
import { Text } from './text';

export type EpisodeProps = {
  title: TextComponentProps['title'];
  images: EpisodeType['images'];
  currentEpisodeNumber: EpisodePageProps['currentEpisodeNumber'];
  episodes: EpisodePageProps['episodes'];
};

export const Episode = (props: EpisodeProps) => {
  const { title, images, currentEpisodeNumber, episodes } = props;
  return (
    <div className={'m-5 flex flex-col place-items-center gap-5'}>
      <Text title={title} />
      {images.map(image => {
        return <ComicImage key={JSON.stringify(image)} imagePath={image} />;
      })}
      <Navigation episodes={episodes} currentEpisode={currentEpisodeNumber} />
    </div>
  );
};
