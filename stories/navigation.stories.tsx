import { Navigation } from '../components/navigation';
import { episodes } from './data';

export const FirstImageNavigation = () => {
  return <Navigation episodes={episodes} currentEpisode={1} />;
};

export const MiddleImageNavigation = () => {
  return <Navigation episodes={episodes} currentEpisode={2} />;
};

export const LastImageNavigation = () => {
  return <Navigation episodes={episodes} currentEpisode={3} />;
};

const config = {
  title: 'Navigation',
  component: Navigation,
};

export default config;
