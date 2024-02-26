import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.info;
export const selectEndofList = state => state.cars.endOfList;
export const selectError = state => state.cars.error;
export const selectIsLoading = state => state.cars.isLoading;
export const selectFavorite = state => state.favorite.favCars;
export const selectFilter = state => state.filter.filter;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    if (filter === 'All') {
      return cars;
    }
    return cars.filter(car => car.make === filter);
  }
);
