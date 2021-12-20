import type { GetStaticProps } from 'next';
import { getEpisodes } from '../utils/episodes-handlers';
import EpisodePage, { EpisodePageProps, Params } from './episodes/[slug]';

export const getStaticProps: GetStaticProps<EpisodePageProps, Params> = () => {
  const episodes = getEpisodes();
  const currentEpisodeNumber = episodes.length;
  const episode = episodes[currentEpisodeNumber - 1];

  return {
    props: { episode, currentEpisodeNumber, episodes },
  };
};

export default EpisodePage;
