import EpisodePage from '../pages/episodes/[slug]';
import { episodes } from './data';

export const EpisodeOneImage = () => {
  return (
    <EpisodePage
      currentEpisodeNumber={1}
      episodes={episodes}
      episode={episodes[0]}
    />
  );
};

export const EpisodeTwoImages = () => {
  return (
    <EpisodePage
      currentEpisodeNumber={2}
      episodes={episodes}
      episode={episodes[1]}
    />
  );
};

const config = {
  title: 'EpisodePage',
  component: EpisodePage,
};

export default config;
