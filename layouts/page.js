import Head from 'next/head';

import { version } from '../package.json';

if (global.document) {
  const info = [
    `Version: ${version}`,
    `You can find the code here: https://github.com/panalbish/homepage`,
    `Adios :🙏`
  ];

  info.forEach(message => console.info(message));
}

const viewSource = event => {
  const allowed = ['P', 'SPAN', 'H1', 'H2', 'H3', 'PRE', 'CODE'];
  if (allowed.includes(event.target.tagName)) {
    return;
  }
  document.location = 'https://github.com/panalbish/homepage';
  event.preventDefault();
};

export default ({ children }) => (
  <main onDoubleClick={viewSource}>
    <Head>
      <link
        rel="mask-icon"
        href="http://bishalpantha.xyz/static/lightning.svg"
        color="#000000"
      />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="icon" href="/static/touch-icon.png" type="image/png" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta
        name="description"
        content="A teenagers view on web development and intuitive UI design."
      />
      <meta name="twitter:site" content="@panalbish" />
      <meta name="twitter:creator" content="@panalbish" />
    </Head>
    {children}
    <style jsx global>
      {`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          margin: 0;
          -webkit-font-smoothing: antialiased;
        }
        html,
        body {
          height: 100%;
        }
        body > div:first-child,
        body > div:first-child > div:first-child,
        body > div:first-child > div:first-child > div {
          height: inherit;
        }
        main {
          padding: 30px;
          box-sizing: border-box;
          position: relative;
          min-height: 100%;
        }
        @media (min-width: 768px) {
          main {
            padding: 45px;
          }
        }
      `}
    </style>
  </main>
);
