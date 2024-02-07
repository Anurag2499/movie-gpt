import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    lang: 'en',
    showInfo: {
      show: false,
      movieId: null,
      movieDetails: {},
      movieKeywords: [],
      movieCredits: [],
    },
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    changeShowInfo: (state, action) => {
      state.showInfo = action.payload;
    },
  },
});

export const { changeLanguage, changeShowInfo } = configSlice.actions;
export default configSlice.reducer;
