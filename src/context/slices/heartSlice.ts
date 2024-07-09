import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsSchema } from "../api/api";

interface WishlistState {
  value: ProductsSchema[];
}

const initialState: WishlistState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

const wishlistSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    toggleHeart: (state, action: PayloadAction<ProductsSchema>) => {
      const index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleHeart } = wishlistSlice.actions;
export default wishlistSlice.reducer;
