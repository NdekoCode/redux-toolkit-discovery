import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const initialState = [
  { id: 1, text: "Faire les courses", done: false },
  { id: 2, text: "Ménage !", done: true },
];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // {type:"todo/addTodo",payload:"Faire la cuisine"}
      const newTask = {
        id: uuid(),
        text: action.payload,
        done: false,
      };
      state.push(newTask);
    },
    toggleTodo: (state, action) => {
      // {type:"todo/toggleTodo",payload:{id:2,text:"Faire le menage",done:false}}
      state = state.map((t) => {
        if (t.id === action.payload.id) {
          t.done = !action.payload.done;
        }
        return t;
      });
    },
    deleteTodo: (state, action) => {
      // {type:"todo/deleteTodo",payload:2}
      state = state.filter((t) => t.id !== action.payload);
    },
  },
});
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
export default store;
