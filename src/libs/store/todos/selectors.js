import { filters } from "./slice";

export const filteredTodo = (state, filter) => {
  if (filter === filters.COMPLETED) {
    return { ...state, todos: state.todos.filter((todo) => todo.completed) };
  }
  if (filter === filters.ACTIVE) {
    return { ...state, todos: state.todos.filter((todo) => !todo.completed) };
  }
  return { ...state, todos: state.todos };
};
