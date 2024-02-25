import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://654e5715cbc325355742c5b2.mockapi.io/';

export const fetchData = createAsyncThunk(
  'cars/fetchData',
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(
        `/adverts?p=${page}${page === 1 ? '&l=12' : ''}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
