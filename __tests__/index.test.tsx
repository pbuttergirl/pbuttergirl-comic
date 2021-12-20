import { GetStaticPropsContext } from 'next';
import { Params } from '../pages/episodes/[slug]';
import { getStaticProps } from '../pages/index';
import { getEpisodes } from '../utils/episodes-handlers';

describe('getStaticProps', () => {
  it('redirects to the last episode', async () => {
    const context = {
      params: {
        slug: 'non-existing',
      },
    };

    const result = await getStaticProps(
      context as GetStaticPropsContext<Params>
    );

    expect(result).toEqual({
      props: {
        episode: {
          slug: '5',
          name: 'Episode 5',
          images: ['/episodes/episode-5/Episode-5.png'],
        },
        currentEpisodeNumber: 5,
        episodes: getEpisodes(),
      },
    });
  });
});
