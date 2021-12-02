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

type ArrowProps = {
  currentEpisode: NavigationProps['currentEpisode'];
  direction: 'left' | 'right';
  disabled?: boolean;
};

const episodePath = (number: number) => {
  return `/episodes/${number}`;
};

const previousEpisodePath = (number: number) => {
  return episodePath(number - 1);
};

const nextEpisodePath = (number: number) => {
  return episodePath(number + 1);
};

export const Arrow = (props: ArrowProps) => {
  const { currentEpisode, direction, disabled = false } = props;
  const Icon =
    direction === 'left' ? ArrowCircleLeftIcon : ArrowCircleRightIcon;

  const path = direction === 'left' ? previousEpisodePath : nextEpisodePath;
  const testId = `${direction}-arrow`;

  if (disabled) {
    return (
      <a className="pointer-events-none" data-testid={testId}>
        <Icon className={`h-5 w-5 sm:h-8 sm:w-8 text-black-500 opacity-25`} />
      </a>
    );
  } else {
    return (
      <Link href={path(currentEpisode)} passHref>
        <a data-testid={testId}>
          <Icon className={`h-5 w-5 sm:h-8 sm:w-8 text-black-500`} />
        </a>
      </Link>
    );
  }
};

export const Navigation = (props: NavigationProps) => {
  const { episodes, currentEpisode } = props;
  const isFirstEpisode = currentEpisode === 1;
  const isLastEpisode = currentEpisode === episodes.length;

  return (
    <div className={'flex flex-row space-x-16'}>
      <div>
        {!isFirstEpisode ? (
          <Arrow currentEpisode={currentEpisode} direction="left" />
        ) : (
          <Arrow disabled currentEpisode={currentEpisode} direction="left" />
        )}
      </div>
      <div>
        {!isLastEpisode ? (
          <Arrow currentEpisode={currentEpisode} direction="right" />
        ) : (
          <Arrow disabled currentEpisode={currentEpisode} direction="right" />
        )}
      </div>
    </div>
  );
};
