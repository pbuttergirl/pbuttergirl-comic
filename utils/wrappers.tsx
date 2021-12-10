import initHeadManager from 'next/dist/client/head-manager';
import { HeadManagerContext } from 'next/dist/shared/lib/head-manager-context';
import { useEffect } from 'react';

export const HeadWrapper: React.FC = props => {
  const { children } = props;
  const manager = initHeadManager();

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.content = '0';
    meta.name = 'next-head-count';
    document.getElementsByTagName('head')[0].appendChild(meta);
  });

  return (
    <HeadManagerContext.Provider value={manager}>
      {children}
    </HeadManagerContext.Provider>
  );
};
