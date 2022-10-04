import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { UiSliceState } from "../../types";

const initialState: UiSliceState = {
  isSidebarOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsSidebarOpen(state, action: PayloadAction<boolean>) {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setIsSidebarOpen } = uiSlice.actions;

export const IsSideBarOpen = (state: RootState) => state.ui.isSidebarOpen;

export default uiSlice.reducer;
