import { configureStore } from '@reduxjs/toolkit';
import clothesSlice from '../features/Clothes';

export default configureStore({
  reducer: {
    clothes: clothesSlice,
  },
});
