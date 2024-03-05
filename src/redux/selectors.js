import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.info;
export const selectEndofList = state => state.cars.endOfList;
export const selectError = state => state.cars.error;
export const selectIsLoading = state => state.cars.isLoading;
export const selectFavorite = state => state.favorite.favCars;
export const selectFilterBrand = state => state.filter.brand;
export const selectFilterPrice = state => state.filter.price;
export const selectFilterMileageFrom = state => state.filter.mileageFrom;
export const selectFilterMileageTo = state => state.filter.mileageTo;

export const selectFilteredCars = createSelector(
  [
    selectCars,
    selectFilterBrand,
    selectFilterPrice,
    selectFilterMileageFrom,
    selectFilterMileageTo,
  ],
  (cars, brand, price, mileageFrom, mileageTo) => {
    return cars.filter(
      car =>
        (brand === 'All' ? car.make.includes('') : car.make === brand) &&
        (price === 'All'
          ? car.rentalPrice.includes('')
          : parseInt(price) >= parseInt(car.rentalPrice.replace('$', ''))) &&
        (mileageFrom ? car.mileage > mileageFrom : car.mileage > 0) &&
        (mileageTo ? car.mileage < mileageTo : car.mileage > 0)
    );
  }
);
