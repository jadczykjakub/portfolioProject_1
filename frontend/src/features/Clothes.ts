import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IClothes, IClothesState } from '../types/clothes';

const clothesState: IClothesState = {
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
  async (data: IClothes) => {
    const response = await axios.post('http://localhost:8000/api/clothes', {
      name: data.name,
      season: data.season,
    });
    return response.data.response;
  },
);

export const removeClothes = createAsyncThunk(
  'clothes/removeClothes',
  async (data: number) => {
    const response = await axios.delete(
      `http://localhost:8000/api/clothes/${data}`,
    );
    return response.data.response;
  },
);

export const modifiedClothes = createAsyncThunk(
  'clothes/modifiedClothes',
  async (data: IClothes) => {
    const response = await axios.put(
      `http://localhost:8000/api/clothes/${data._id}`,
      {
        name: data.name,
        season: data.season,
      },
    );
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

    builder.addCase(removeClothes.fulfilled, (state, action) => {
      state.clothesList = state.clothesList.filter(
        (item) => item._id != action.payload,
      );
      state.response = 'delete';
    });

    builder.addCase(modifiedClothes.fulfilled, (state, action) => {
      const updateItem = action.payload;
      console.log(updateItem);
      const index = state.clothesList.findIndex(
        (item) => item._id === updateItem._id,
      );
      if (index !== -1) {
        state.clothesList[index] = updateItem;
      }
      state.response = 'update';
    });
  },
});

export const { changeStateTrue, changeStateFalse, clearResponse } =
  clothesSlice.actions;
export default clothesSlice.reducer;
