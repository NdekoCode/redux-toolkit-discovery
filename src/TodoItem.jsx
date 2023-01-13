import React from "react";
import { useDispatch } from "react-redux";
import { useToggle } from "./libs/hooks/useToggle";
import TodoForm from "./TodoForm";
import TodoItemContent from "./TodoItemContent";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isModify, toggleModify] = useToggle(false);
  return (
    <>
      {isModify ? (
        <TodoForm />
      ) : (
        <TodoItemContent todoUpdate={toggleModify} item={item} />
      )}
    </>
  );
};

export default TodoItem;
