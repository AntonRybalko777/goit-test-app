import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';

const CarsSlice = createSlice({
  name: 'cars',
  initialState: { info: [], isLoading: false, error: null, endOfList: false },
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
        if (action.payload.length < 12) {
          state.endOfList = true;
        }
      });
  },
});

export const carsReducer = CarsSlice.reducer;
