import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      {todos.map((task) => (
        <TodoItem
          key={task.id}
          item={task}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default TodosList;
