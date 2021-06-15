/** @jsxImportSource theme-ui */

import React from 'react';
import { ThemeProvider } from '@theme-ui/theme-provider';
import { Provider, useDispatch } from 'react-redux';
import theme from '../theme';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from '../redux/store';
import { motion } from 'framer-motion';
const { store, persistor } = reduxStore();

export default function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial='pageInitial'
      animate='pageAnimate'
      variants={{
        pageInitial: {
          opacity: 0.9,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
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
    </motion.div>
  );
}
