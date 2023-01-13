import React from "react";
import { useSelector } from "react-redux";
import { filteredTodo } from "./libs/store/todos/selectors";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const { filter } = useSelector((state) => state.todos);
  const { todos } = useSelector((state) => filteredTodo(state.todos, filter));
  console.log(todos);
  console.log(todos);
  return (
    <>
      {todos.map((task) => (
        <TodoItem key={task.id} item={task} />
      ))}
    </>
  );
};

export default TodosList;
