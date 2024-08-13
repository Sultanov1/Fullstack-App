import {configureStore} from '@reduxjs/toolkit';
import {productReducer} from '../containers/cipherSlice';

export const store = configureStore({
  reducer: {
    'cipher': productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;