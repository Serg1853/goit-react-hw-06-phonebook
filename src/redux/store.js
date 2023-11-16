import { configureStore } from '@reduxjs/toolkit';
import { contactPersistReduser } from './phoneBookSlice';
import { filterSlice } from './filterSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reduser: {
    phoneBook: contactPersistReduser,
    filter: filterSlice.reduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
