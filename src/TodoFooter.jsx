import React from "react";

const TodoFooter = ({ todos }) => {
  const undoneTodos = todos.filter((t) => t.done === false);
  return (
    <>
      <div className="flex justify-between w-full h-16 px-6 text-sm leading-tight text-gray-700 align-middle bg-white rounded-b-lg shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline dark:text-gray-300">
        <p className="my-auto">{undoneTodos.length} items left</p>
        <div className="hidden my-auto gap-x-5 sm:flex">
          <p className="text-blue-600   hover:font-bold cursor-pointer">All</p>
          <p className="  hover:font-bold cursor-pointer">Active</p>
          <p className="  hover:font-bold cursor-pointer">Completed</p>
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
