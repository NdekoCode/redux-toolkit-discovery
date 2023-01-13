import React from "react";

import { useDispatch } from "react-redux";
import CompletedIcon from "./CompletedIcon";
import { completedTodo, deleteTodo } from "./libs/store/todos/slice";
const TodoItemContent = ({ item, todoUpdate }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex w-full h-16 px-6 bg-white dark:bg-input-dark  shadow dark:text-gray-300 rounded-t-lg">
      <button
        tabIndex={0}
        role="button"
        className="flex w-full text-lg leading-tight text-gray-700 align-middle  appearance-none focus:outline-none focus:shadow-outline dark:text-gray-300"
        onClick={() => dispatch(completedTodo(item.id))}
      >
        <span className="w-6 h-6 my-auto mr-6">
          <CompletedIcon completed={item.completed} />
        </span>
        <p className="flex flex-1 w-full my-auto align-middle border-none cursor-pointer input hover:text-blue-600">
          {item.completed ? item.todo : <s>{item.todo}</s>}
        </p>
      </button>
      <button
        className="w-6 h-6 my-auto ml-5"
        onClick={() => todoUpdate()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-edit"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </button>
      <button
        className="w-6 h-6 my-auto ml-3"
        data-index={0}
        onClick={() => dispatch(deleteTodo(item.id))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18}>
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItemContent;
