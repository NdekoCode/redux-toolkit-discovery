import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./libs/store/redux";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex w-full h-16 px-6 bg-white dark:bg-input-dark  shadow dark:text-gray-300 rounded-t-lg">
      <button
        tabIndex={0}
        role="button"
        className="flex w-full text-lg leading-tight text-gray-700 align-middle  appearance-none focus:outline-none focus:shadow-outline dark:text-gray-300"
        onClick={() => dispatch(toggleTodo(item))}
      >
        <span className="w-6 h-6 my-auto mr-6">
          {item.done ? (
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0208 23.0417C18.1075 23.0417 23.0417 18.1075 23.0417 12.0208C23.0417 5.9342 18.1075 1 12.0208 1C5.9342 1 1 5.9342 1 12.0208C1 18.1075 5.9342 23.0417 12.0208 23.0417Z"
                fill="url(#paint0_linear)"
                stroke="url(#paint1_linear)"
              />
              <path
                d="M8 12.1663L10.5837 14.75L16.3337 9"
                stroke="white"
                strokeWidth={2}
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1={1}
                  y1={1}
                  x2={23}
                  y2={23}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#70A7FA" />
                  <stop offset={1} stopColor="#B763EF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1={1}
                  y1={1}
                  x2="23.5"
                  y2={23}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#70A7FA" />
                  <stop offset={1} stopColor="#B763EF" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={12} cy={12} r="11.5" stroke="#E4E4E4" />
            </svg>
          )}
        </span>
        <p className="flex flex-1 w-full my-auto align-middle border-none cursor-pointer input hover:text-blue-600">
          {item.done ? item.text : <s>{item.text}</s>}
        </p>
      </button>
      <button
        className="w-6 h-6 my-auto ml-6 "
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

export default TodoItem;
