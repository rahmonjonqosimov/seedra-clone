import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import searchValue from "./slices/SearchState";

export const store = configureStore({
  reducer: {
    search: searchValue,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
