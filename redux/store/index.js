// import { createStore } from 'redux';
// import reducer from '../reducers';

// const store = createStore(reducer);

// export default store;

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function reduxStore() {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
}
