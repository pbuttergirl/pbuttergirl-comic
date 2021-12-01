import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import { HomeProps } from '../pages/episodes/[slug]';
import { EpisodeType } from '../utils/episodes-handlers';

type NavigationProps = {
  listOfEpisodes: Array<EpisodeType>;
  currentEpisode: HomeProps['currentEpisodeNumber'];
};

export const Navigation = (props: NavigationProps) => {
  const { listOfEpisodes, currentEpisode } = props;
  const isFirstEpisode = currentEpisode === 1;
  const isLastEpisode = currentEpisode === listOfEpisodes.length;

  return (
    <div className={'flex flex-row space-x-16'}>
      <div>
        {!isFirstEpisode && (
          <Link href={`/episodes/${currentEpisode - 1}`} passHref>
            <a data-testid="left-arrow">
              <ArrowCircleLeftIcon className="h-10 w-10 text-black-500" />
            </a>
          </Link>
        )}
      </div>
      <div>Episode {currentEpisode}</div>
      <div>
        {!isLastEpisode && (
          <Link href={`/episodes/${currentEpisode + 1}`} passHref>
            <a data-testid="right-arrow">
              <ArrowCircleRightIcon className="h-10 w-10 text-black-500" />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
