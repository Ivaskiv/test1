// advertOperation.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://665f72641e9017dc16f43399.mockapi.io/';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (filters, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/adverts`, { params: filters });
      return response.data;
    } catch (error) {
      throw rejectWithValue(error.response.data.error || 'Error fetching adverts');
    }
  }
);
