import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import CompletedIcon from "./CompletedIcon";

const TodoForm = ({ initialValue, add = false, submitTodo, modifyTodo }) => {
  const [state, setTodo] = useState(
    add ? { todo: "", completed: false } : initialValue
  );

  const keyEscEvent = (evt) => {
    console.log(evt.keyCode);
    if (evt.keyCode === 27 || evt.keyCode === 9) {
      if (!add) {
        modifyTodo(false);
      }
    }
  };
  console.log(initialValue);
  const { todo, completed } = state;
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitTodo(state));

    if (add) {
      setTodo((state) => ({ ...state, todo: "", completed: false }));
    } else {
      modifyTodo(false);
    }
  };
  const handleChange = useCallback(
    (evt) => {
      const name = evt.target.name;
      const value =
        name === "completed" ? evt.target.checked : evt.target.value;
      setTodo((d) => ({ ...d, [name]: value }));
    },
    [state]
  );
  return (
    <div
      id="#input"
      className="flex items-center w-full pr-0 h-16 px-6 my-12 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline"
    >
      <div className="mr-5">
        <label htmlFor="completed">
          <input
            type="checkbox"
            name="completed"
            checked={completed}
            onChange={handleChange}
            id="completed"
            className="hidden"
          />
          <CompletedIcon completed={completed} />
        </label>
      </div>
      <form className="flex-1" onSubmit={handleSubmit} onKeyDown={keyEscEvent}>
        <input
          className="w-full h-16 outline-none border-none input outline:none dark:bg-input-dark dark:text-gray-300 px-5"
          id="task"
          type="text"
          value={todo}
          name="todo"
          placeholder="What to do ?"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TodoForm;
