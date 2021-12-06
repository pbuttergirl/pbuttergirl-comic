import type { GetServerSideProps } from 'next';
import { getEpisodes } from '../utils/episodes-handlers';

const EpisodePage = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `/episodes/${getEpisodes().length}`,
      permanent: false,
      fallback: true,
    },
  };
};

export default EpisodePage;
