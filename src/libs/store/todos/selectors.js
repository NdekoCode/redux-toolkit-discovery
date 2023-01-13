import { filters } from "./slice";

const selectTodos = (state) => state;
const selectFilter = (state) => state.filter;
/* export const selectFilterTodo = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    console.log(todos, filter);
    switch (filter) {
      case VisibilityFilters.ALL:
        return todos;
      case VisibilityFilters.COMPLETED:
        return todos.filter((t) => t.completed);
      case VisibilityFilters.ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  }
); */
// export const getFilterTodos = (state) => ({
//   todos: selectFilterTodo(state.todos),
// });
export const filteredTodo = (state, filter) => {
  console.log(state);
  if (filter === filters.COMPLETED) {
    return { ...state, todos: state.todos.filter((todo) => todo.completed) };
  }
  if (filter === filters.ACTIVE) {
    return { ...state, todos: state.todos.filter((todo) => !todo.completed) };
  }
  // if none of above return all todos
  return { ...state, todos: state.todos };
};
