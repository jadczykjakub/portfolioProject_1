import { configureStore } from '@reduxjs/toolkit';
import clothesSlice from '../features/Clothes';
// import userSlice from '../features/Users'

const store = configureStore({
  reducer: {
    clothes: clothesSlice,
    // user: userSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
