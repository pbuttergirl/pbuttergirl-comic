import initHeadManager from 'next/dist/client/head-manager';
import { HeadManagerContext } from 'next/dist/shared/lib/head-manager-context';

export const HeadWrapper: React.FC = props => {
  const { children } = props;
  const manager = initHeadManager();

  return (
    <HeadManagerContext.Provider value={manager}>
      {children}
    </HeadManagerContext.Provider>
  );
};
