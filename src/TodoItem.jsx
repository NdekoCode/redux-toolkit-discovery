import React from "react";
import { useToggle } from "./libs/hooks/useToggle";
import { updateTodo } from "./libs/store/todos/slice";
import TodoForm from "./TodoForm";
import TodoItemContent from "./TodoItemContent";

const TodoItem = ({ item }) => {
  const [isModify, toggleModify] = useToggle(false);
  return (
    <>
      {isModify ? (
        <TodoForm
          initialValue={item}
          submitTodo={updateTodo}
          modifyTodo={toggleModify}
        />
      ) : (
        <TodoItemContent todoUpdate={toggleModify} item={item} />
      )}
    </>
  );
};

export default TodoItem;
