import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import actions from "./actions";
const initialState = [
  {
    id: uuid(),
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
  },
  {
    id: uuid(),
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48,
  },
];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ...actions,
  },
});
export const { addTodo, deleteTodo, completedTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice;
