import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'favorite',
  storage,
};

const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState: { favCars: [] },
  reducers: {
    addToFavorite: (state, action) => {
      state.favCars = [...state.favCars, action.payload];
    },
    removeFromFavorite: (state, action) => {
      state.favCars = state.favCars.filter(car => car.id !== action.payload);
    },
  },
});

export const favoriteReducer = persistReducer(
  persistConfig,
  FavoriteSlice.reducer
);

export const { addToFavorite, removeFromFavorite } = FavoriteSlice.actions;
