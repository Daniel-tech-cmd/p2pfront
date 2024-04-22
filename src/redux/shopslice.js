"use client";
import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";

const initialState = {
  user: {},
};

export const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createuser: (state, action) => {
      state.user = action.payload;
      console.log(state);
    },
    conso: (state, action) => {
      console.log(state);
    },
  },
});

export const { createuser, conso } = cartSlice.actions;
export default cartSlice.reducer;
