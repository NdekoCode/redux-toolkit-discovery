import {
  configureStore
} from "@reduxjs/toolkit";
import pictureSlice from "./gallery/picture.slice";
import todoSlice from "./todos/slice";

const todoStore = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    pictures: pictureSlice.reducer
  },
});
export default todoStore;