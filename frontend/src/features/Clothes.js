import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const clothesState = {
  updateState: false,
  loading: false,
  clothesList: [],
  error: '',
  response: '',
};

export const fetchClothes = createAsyncThunk(
  'clothes/fetchClothes',
  async () => {
    const response = await axios.get('http://localhost:8000/api/clothes');
    return response.data.response;
  },
);

export const addClothes = createAsyncThunk(
  'clothes/addClothes',
  async (data) => {
    const response = await axios.post('http://localhost:8000/api/clothes', {
      name: data.name,
      season: data.season,
    });
    return response.data.response;
  },
);

export const clothesSlice = createSlice({
  name: 'clothes',
  initialState: clothesState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addClothes.pending, (state) => {
        state.loading = true;
      })
      .addCase(addClothes.fulfilled, (state, action) => {
        state.loading = false;
        state.clothesList.push(action.payload);
        state.response = 'add';
      })
      .addCase(addClothes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchClothes.fulfilled, (state, action) => {
        state.loading = false;
        state.clothesList = action.payload;
      })
      .addCase(fetchClothes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { changeStateTrue, changeStateFalse, clearResponse } =
  clothesSlice.actions;
export default clothesSlice.reducer;
