import { createSlice } from "@reduxjs/toolkit";

const ArticleListSclice = createSlice({
  name: "ArticleList",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addItem, removeItem } = ArticleListSclice.actions;
export default ArticleListSclice.reducer;
