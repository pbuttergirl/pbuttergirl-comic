import type { GetServerSideProps, NextPage } from 'next';
import { Helmet } from 'react-helmet';
import React from 'react';
import { Episode } from '../../components/episode';
import { EpisodeType, getEpisodes } from '../../utils/episodes-handlers';

export type EpisodePageProps = {
  episode: EpisodeType;
  currentEpisodeNumber: number;
  episodes: Array<EpisodeType>;
};

const EpisodePage: NextPage<EpisodePageProps> = props => {
  const {
    episode: { name, images },
    currentEpisodeNumber,
    episodes,
  } = props;
  return (
    <div className={'max-w-screen'}>
      <Helmet>
        <title>{name} - Peanutbutter girl comic</title>
        <meta name="description" content={name} />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Episode
        title={name}
        images={images}
        currentEpisodeNumber={currentEpisodeNumber}
        episodes={episodes}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const currentEpisodeNumber = parseInt(context.params!.slug as string);
  const episodes = getEpisodes();
  const episode = episodes[currentEpisodeNumber - 1];
  if (episode) {
    return {
      props: { episode, currentEpisodeNumber, episodes },
    };
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default EpisodePage;
