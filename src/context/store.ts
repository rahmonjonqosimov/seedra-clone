import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import searchValue from "./slices/searchSlice.ts";
import toggleHeart from "./slices/heartSlice.ts";
import cartSlice from "./slices/cartSlice.ts";

export const store = configureStore({
  reducer: {
    search: searchValue,
    wishlist: toggleHeart,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
