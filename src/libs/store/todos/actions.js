import { v4 as uuid } from "uuid";
const addTodo = (state, action) => {
  if (JSON.stringify(action.payload) !== "{}") {
    state.push({
      id: uuid(),
      todo: action.payload.todo,
      description: action.payload.todo,
      completed: false,
    });
  }
};
const deleteTodo = (state, action) => {
  state = state.filter((d) => d.id !== action.payload.id);
  return state;
};

const completedTodo = (state, action) => {
  state = state.map((todo) => {
    if (todo.id === action.payload) {
      todo.completed = !todo.completed;
      return todo;
    }
    return todo;
  });
};

export default {
  addTodo,
  deleteTodo,
  completedTodo,
};
