import { v4 as uuid } from "uuid";
const addTodo = (state, action) => {
  if (JSON.stringify(action.payload) !== "{}") {
    state.todos.push({
      id: uuid(),
      todo: action.payload.todo,
      // description: action.payload.todo,
      completed: false,
    });
  }
};
const deleteTodo = (state, action) => {
  state.todos = state.todos.filter((d) => d.id !== action.payload);
  return state;
};

const completedTodo = (state, action) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === action.payload) {
      todo.completed = !todo.completed;
      return todo;
    }
    return todo;
  });
};
const updateTodo = (state, action) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === action.payload.id) {
      todo.completed = action.payload.completed;
      todo.todo = action.payload.todo;
    }
    return todo;
  });
};
const filterTodo = (state, action) => {
  state.filter = action.payload;
};
export default {
  addTodo,
  deleteTodo,
  completedTodo,
  updateTodo,
  filterTodo,
};
