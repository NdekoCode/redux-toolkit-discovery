import { createSlice } from "@reduxjs/toolkit";
import actions from "./actions";
const initialState = [
  { id: 1, text: "Faire les courses", done: false },
  { id: 2, text: "Ménage !", done: true },
];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ...actions,
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice;
