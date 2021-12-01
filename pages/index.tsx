import type { GetStaticProps } from 'next';
import { getEpisodes } from '../utils/episodes-handlers';

const EpisodePage = () => {
  return null;
};

export const getStaticProps: GetStaticProps = context => {
  return {
    redirect: {
      destination: `/episodes/${getEpisodes().length}`,
      permanent: false,
    },
  };
};

export default EpisodePage;
