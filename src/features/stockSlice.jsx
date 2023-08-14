import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  sales: [],
  purchases: [],
  firms: [],
  categories: [],
  brands: [],
  products: [],
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getFirmsSucces: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getFirmsSucces } = stockSlice.actions;

export default stockSlice.reducer;
