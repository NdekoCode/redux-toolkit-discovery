import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredTodo } from "./libs/store/todos/selectors";
import { filters, filterTodo } from "./libs/store/todos/slice";

const TodoFooter = () => {
  const { filter } = useSelector((state) => state.todos);
  const { todos } = useSelector((state) => filteredTodo(state.todos, filter));
  const dispatch = useDispatch();
  const undoneTodos = useMemo(
    () => todos.filter((t) => t.completed === false),
    [todos]
  );
  return (
    <>
      <div className="flex justify-between w-full h-16 px-6 text-sm leading-tight text-gray-700 align-middle bg-white rounded-b-lg shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline dark:text-gray-300">
        <p className="my-auto">{undoneTodos.length} items left</p>
        <div className="hidden my-auto gap-x-5 sm:flex">
          <button
            className={`${
              filter === filters.ALL ? "text-blue-600 font-bold " : ""
            }hover:font-bold cursor-pointer`}
            onClick={() => dispatch(filterTodo(filters.ALL))}
          >
            All
          </button>
          <button
            onClick={() => dispatch(filterTodo(filters.ACTIVE))}
            className={`${
              filter === filters.ACTIVE ? "text-blue-600 font-bold " : ""
            }hover:font-bold cursor-pointer`}
          >
            Active
          </button>
          <button
            onClick={() => dispatch(filterTodo(filters.COMPLETED))}
            className={`${
              filter === filters.COMPLETED ? "text-blue-600 font-bold " : ""
            }hover:font-bold cursor-pointer`}
          >
            Completed
          </button>
        </div>
        <p className="my-auto cursor-pointer hover:font-bold">
          Clear Completed
        </p>
      </div>
      <div className="flex justify-center w-full h-16 px-6 mt-5 text-sm leading-tight text-gray-700 align-middle bg-white rounded-lg shadow appearance-none gap-x-5 sm:hidden dark:bg-input-dark focus:outline-none focus:shadow-outline dark:text-gray-300 ">
        <p className="text-blue-600   hover:font-bold cursor-pointer my-auto">
          All
        </p>
        <p className="  hover:font-bold cursor-pointer my-auto">Active</p>
        <p className="  hover:font-bold cursor-pointer my-auto">Completed</p>
      </div>
    </>
  );
};

export default TodoFooter;
