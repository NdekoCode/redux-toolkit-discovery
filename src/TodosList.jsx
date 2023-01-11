import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      {todos.map((task) => (
        <TodoItem key={task.id} item={task} />
      ))}
    </>
  );
};

export default TodosList;
