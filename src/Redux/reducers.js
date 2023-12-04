import { createSlice } from "@reduxjs/toolkit";

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // Clear existing data
      state.splice(0);
      // Add new item
      state.push(action.payload);
    },
    // removeItem: (state, action) => {
    //   const index = state.findIndex((item) => item.id === action.payload);
    //   state.splice(index, 1);
    // },
  },
});

export const { addItem, removeItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
