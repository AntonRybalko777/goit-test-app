import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: { brand: 'All', price: 'All', mileageFrom: '', mileageTo: '' },
  reducers: {
    changeFilterBrand: (state, action) => {
      state.brand = action.payload;
    },
    changeFilterPrice: (state, action) => {
      state.price = action.payload;
    },
    changeFilterMileageFrom: (state, action) => {
      state.mileageFrom = action.payload;
    },
    changeFilterMileageTo: (state, action) => {
      state.mileageTo = action.payload;
    },
  },
});

export const filterReducer = FilterSlice.reducer;
export const {
  changeFilterBrand,
  changeFilterPrice,
  changeFilterMileageFrom,
  changeFilterMileageTo,
} = FilterSlice.actions;
