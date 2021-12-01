import { Navigation } from '../components/navigation';
import { episodes } from './data';

export const FirstImageNavigation = () => {
  return <Navigation listOfEpisodes={episodes} currentEpisode={1} />;
};

export const MiddleImageNavigation = () => {
  return <Navigation listOfEpisodes={episodes} currentEpisode={2} />;
};

export const LastImageNavigation = () => {
  return <Navigation listOfEpisodes={episodes} currentEpisode={3} />;
};

const config = {
  title: 'Navigtion',
  component: Navigation,
};

export default config;
