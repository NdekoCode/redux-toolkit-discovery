import { v4 as uuid } from "uuid";
const addTodo = (state, action) => {
  // {type:"todo/addTodo",payload:"Faire la cuisine"}
  const newTask = {
    id: uuid(),
    text: action.payload,
    done: false,
  };
  state.unshift(newTask);
};
const toggleTodo = (state, action) => {
  // {type:"todo/toggleTodo",payload:{id:2,text:"Faire le menage",done:false}}
  state = state.map((t) => {
    if (t.id === action.payload.id) {
      t.done = !action.payload.done;
    }
    return t;
  });
};
const deleteTodo = (state, action) => {
  // {type:"todo/deleteTodo",payload:2}
  state = state.filter((t) => t.id !== action.payload);
  return state;
};
export default { addTodo, deleteTodo, toggleTodo };
