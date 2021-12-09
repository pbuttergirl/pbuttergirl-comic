import { render } from '@testing-library/react';
import { GetServerSidePropsContext } from 'next';
import { Params } from '../pages/episodes/[slug]';
import EpisodePage, { getServerSideProps } from '../pages/index';
import { getEpisodes } from '../utils/episodes-handlers';

describe('EpisodePage', () => {
  it('returns null', () => {
    const { container } = render(<EpisodePage />);
    expect(container.firstChild).toBeNull();
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
