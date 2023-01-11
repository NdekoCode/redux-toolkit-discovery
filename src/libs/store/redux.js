import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos/slice";
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
export default store;
