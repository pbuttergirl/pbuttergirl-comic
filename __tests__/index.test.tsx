import { GetServerSidePropsContext } from 'next';
import { Params } from '../pages/episodes/[slug]';
import EpisodePage, { getServerSideProps } from '../pages/index';
import { getEpisodes } from '../utils/episodes-handlers';

describe('EpisodePage', () => {
  it('returns null', () => {
    const result = EpisodePage();
    expect(result).toBe(null);
  });
});

describe('getServerSideProps', () => {
  it('redirects to the last episode', async () => {
    const context = {
      params: {
        slug: 'non-existing',
      },
    };

    const result = await getServerSideProps(
      context as GetServerSidePropsContext<Params>
    );

    const lastEpisode = getEpisodes().length;

    expect(result).toEqual({
      redirect: {
        destination: `/episodes/${lastEpisode}`,
        permanent: false,
        fallback: true,
      },
    });
  });
});
