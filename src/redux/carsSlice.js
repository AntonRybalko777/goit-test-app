import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';

const DataSlice = createSlice({
  name: 'cars',
  initialState: { info: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.info = [...state.info, ...action.payload];
      });
  },
});

export const carsReducer = DataSlice.reducer;
