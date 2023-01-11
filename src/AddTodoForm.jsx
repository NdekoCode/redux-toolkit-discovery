import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./libs/store/todos/slice";

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  const handleChange = useCallback(
    (evt) => {
      const value = evt.target.value;
      setText(value);
    },
    [text]
  );
  return (
    <div
      id="#input"
      className="flex items-center w-full pr-0 h-16 px-6 my-12 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline"
    >
      <div className="mr-5">
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
      </div>
      <form className="flex-1" onSubmit={handleSubmit}>
        <input
          className="w-full h-16 outline-none border-none input outline:none dark:bg-input-dark dark:text-gray-300 px-5"
          id="task"
          type="text"
          value={text}
          placeholder="What to do ?"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AddTodoForm;
