import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const produtosSlice = createSlice({
  name: "produtos",
  initialState: {
    data,
    filters: {
      colors: [],
      prices: {
        min: 0,
        max: 0,
      },
    },
  },
  reducers: {
    changeFilters(state, action) {
      state.filters[action.payload.name] = action.payload.value;
    },
  },
});

export const { changeFilters } = produtosSlice.actions;

export default produtosSlice.reducer;
