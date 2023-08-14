import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  firms: [],
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getfirmsSucces: (state, { payload }) => {
      state.loading = false;
      state.firms = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = stockSlice.actions;

export default stockSlice.reducer;
