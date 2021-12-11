import initHeadManager from 'next/dist/client/head-manager';
import { HeadManagerContext } from 'next/dist/shared/lib/head-manager-context';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

export const HeadWrapper: React.FC = props => {
  const { children } = props;
  const manager = initHeadManager();

  useEffect(() => {
    global.document.head.insertAdjacentHTML(
      'afterbegin',
      ReactDOMServer.renderToString(<meta name="next-head-count" content="0" />)
    );
  });

  return (
    <HeadManagerContext.Provider value={manager}>
      {children}
    </HeadManagerContext.Provider>
  );
};
