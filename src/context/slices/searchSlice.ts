import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    searchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { searchValue } = counterSlice.actions;

export default counterSlice.reducer;
