import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayloadSchema {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
}

interface ProductsSchema {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
  quantity: number;
}

interface cartSlice {
  value: ProductsSchema[];
}

const initialState: cartSlice = {
  value: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const cartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<PayloadSchema>) => {
      const index = state.value.findIndex(
        (i: ProductsSchema) => i.id === action.payload.id
      );
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    increment: (state, action: PayloadAction<PayloadSchema>) => {
      const index = state.value.findIndex(
        (i: ProductsSchema) => i.id === action.payload.id
      );
      state.value = state.value.map((item: ProductsSchema, inx: number) =>
        inx === index ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrement: (state, action: PayloadAction<PayloadSchema>) => {
      const index: number = state.value.findIndex(
        (i: ProductsSchema) => i.id === action.payload.id
      );
      state.value = state.value.map((item: ProductsSchema, inx: number) =>
        inx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCart: (state, action: PayloadAction<PayloadSchema>) => {
      state.value = state.value.filter(
        (item: ProductsSchema) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteAllCart: (state) => {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const {
  addToCart,
  decrement,
  deleteAllCart,
  increment,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
