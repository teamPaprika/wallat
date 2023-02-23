import './global.scss';
import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import theme from '../src/gatsby-theme-material-ui-top-layout/theme';

type IProps = AppProps;

const Favicon = (): JSX.Element => (
  <>
    <link rel="icon" type="image/png" sizes="192x192" href="/static/apple-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
    <link rel="manifest" href="/static/site.webmanifest" />
    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#2670ff" />
    <meta name="msapplication-TileColor" content="#2670ff" />
  </>
);

function App({ Component, pageProps: { session, ...pageProps }, ...props }: IProps) {
  // @ts-ignore
  return (
    <RecoilRoot {...props}>
      <ThemeProvider theme={theme}>
        <Head>
          {/* To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head> element. */}
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <Favicon />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
