import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertOperation';
const initialState = {
  list: [],
  favoriteIds: [],
  status: 'idle',
  error: null,
  isLoading: false,
  filter: {
    location: '',
    details: [],
    transmission: [],
    form: '',
  },
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    },
    addFavoriteId(state, action) {
      if (!state.favoriteIds.some(id => id === action.payload)) {
        state.favoriteIds.push(action.payload);
      }
    },
    removeFavoriteId(state, action) {
      state.favoriteIds = state.favoriteIds.filter(id => id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters, addFavoriteId, removeFavoriteId } = advertsSlice.actions;

export default advertsSlice.reducer;
