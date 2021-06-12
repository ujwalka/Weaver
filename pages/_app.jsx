/** @jsxImportSource theme-ui */

import React, { useEffect } from 'react';
import { ThemeProvider } from '@theme-ui/theme-provider';
import { Provider, useDispatch } from 'react-redux';
import theme from '../theme';
import store from '../redux/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      // @ts-ignore
      theme={theme}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
