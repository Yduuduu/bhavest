import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinName: "",
};

export const coinNameSlice = createSlice({
  name: "coinName",
  initialState,
  reducers: {
    setCoinName: (state, action) => {
      state.coinName = action.payload.coinName;
    },
    initCoinName: (state) => {
      state.coinName = initialState.coinName;
    },
  },
});

export const { setCoinName, initCoinName } = coinNameSlice.actions;

export const coinName = (state) => state.coinNameSlice.coinName;

export default coinNameSlice;
