import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Episode } from '../../components/episode';
import { EpisodeType, getEpisodes } from '../../utils/episodes-handlers';

export type EpisodePageProps = {
  episode: EpisodeType;
  currentEpisodeNumber: number;
  episodes: Array<EpisodeType>;
};

export type Params = {
  slug: string;
};
export const getTitle = (name: string) => {
  return `${name} - Peanutbutter girl comic`;
};

export const getMetaDescription = (name: string) => {
  return name;
};

const EpisodePage: NextPage<EpisodePageProps> = props => {
  const {
    episode: { name, images },
    currentEpisodeNumber,
    episodes,
  } = props;
  return (
    <div className={'max-w-screen'}>
      <Head>
        <title>{getTitle(name)}</title>
        <meta name="description" content={getMetaDescription(name)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Episode
        title={name}
        images={images}
        currentEpisodeNumber={currentEpisodeNumber}
        episodes={episodes}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getEpisodes().map(episode => {
    return episode.slug;
  });

  const paths = slugs.map(slug => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<EpisodePageProps, Params> =
  async context => {
    const { params } = context;
    const currentEpisodeNumber = parseInt(params!.slug);
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
