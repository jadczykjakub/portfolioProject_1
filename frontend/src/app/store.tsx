import { configureStore } from '@reduxjs/toolkit';
import clothesSlice from '../features/Clothes';

const store = configureStore({
  reducer: {
    clothes: clothesSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
