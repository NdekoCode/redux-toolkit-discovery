import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos/slice";

const todoStore = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
export default todoStore;
