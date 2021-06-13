/** @jsxImportSource theme-ui */

import React, { useEffect } from 'react';
import { ThemeProvider } from '@theme-ui/theme-provider';
import { Provider, useDispatch } from 'react-redux';
import theme from '../theme';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from '../redux/store';

const { store, persistor } = reduxStore();

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      // @ts-ignore
      theme={theme}
    >
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </PersistGate>
    </ThemeProvider>
  );
}
