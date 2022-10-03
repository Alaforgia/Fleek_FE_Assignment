import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import rickAndMortySlice from "./slices/rickAndMortySlice";
import uiSlice from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    rickAndMortyCharacters: rickAndMortySlice,
    ui: uiSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
