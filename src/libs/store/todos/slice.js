import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import actions from "./actions";
export const filters = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  ACTIVE: "SHOW_ACTIVE",
};
const initialState = {
  todos: [
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
  ],
  filter: filters.ALL,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ...actions,
  },
});
export const { addTodo, deleteTodo, completedTodo, updateTodo, filterTodo } =
  todoSlice.actions;
export default todoSlice;
