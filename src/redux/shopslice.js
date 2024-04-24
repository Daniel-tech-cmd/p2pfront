"use client";
import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";

const initialState = {
  user: {},
  coins: [],
};

export const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createuser: (state, action) => {
      state.user = action.payload;
    },
    addcoin: (state, action) => {
      state.coins.push(action.payload);
    },
    conso: (state, action) => {
      console.log(state);
    },
  },
});

export const { createuser, conso, addcoin } = cartSlice.actions;
export default cartSlice.reducer;
