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
  const navigationLabelLeft = 'Navigation to the previous episode.';
  const navigationLabelRight = 'Navigation to the next episode.';

  if (disabled) {
    return (
      // relate issue: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/805
      // eslint-disable-next-line jsx-a11y/role-supports-aria-props
      <div data-testid={testId} role={'navigation'} aria-disabled={true}>
        <Icon className={`text-black-500 h-7 w-7 opacity-25 sm:h-8 sm:w-8`} />
      </div>
    );
  } else {
    return (
      <Link href={path(currentEpisode)} passHref>
        <a
          href={path(currentEpisode)}
          data-testid={testId}
          aria-label={
            direction === 'left' ? navigationLabelLeft : navigationLabelRight
          }
        >
          <Icon className={`text-black-500 h-7 w-7 sm:h-8 sm:w-8`} />
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
