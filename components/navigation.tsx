import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import { EpisodePageProps } from '../pages/episodes/[slug]';
import { EpisodeType } from '../utils/episodes-handlers';

type NavigationProps = {
  episodes: Array<EpisodeType>;
  currentEpisode: EpisodePageProps['currentEpisodeNumber'];
};

const PreviousEpisodePath = (number: number) => {
  return `/episodes/${number - 1}`;
};

const nextEpisodePath = (number: number) => {
  return `/episodes/${number + 1}`;
};

export const Navigation = (props: NavigationProps) => {
  const { episodes, currentEpisode } = props;
  const isFirstEpisode = currentEpisode === 1;
  const isLastEpisode = currentEpisode === episodes.length;

  return (
    <div className={'flex flex-row space-x-16'}>
      <div>
        {!isFirstEpisode && (
          <Link href={PreviousEpisodePath(currentEpisode)} passHref>
            <a data-testid="left-arrow">
              <ArrowCircleLeftIcon className="h-10 w-10 text-black-500" />
            </a>
          </Link>
        )}
      </div>
      <div>Episode {currentEpisode}</div>
      <div>
        {!isLastEpisode && (
          <Link href={nextEpisodePath(currentEpisode)} passHref>
            <a data-testid="right-arrow">
              <ArrowCircleRightIcon className="h-10 w-10 text-black-500" />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
