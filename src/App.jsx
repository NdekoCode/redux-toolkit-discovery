import React from "react";
import UseThemeContext from "./libs/context/ThemeContext";
import { addTodo } from "./libs/store/todos/slice";
import ThemeSwitcher from "./ThemeSwitcher";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";
import TodossHeader from "./TodossHeader";

const App = () => {
  const { theme } = UseThemeContext();
  return (
    <div
      className={`relative w-full min-h-screen bg-top bg-no-repeat bg-contain bg-bg-light dark:bg-[#181824] ${theme}`}
    >
      <TodossHeader />
      <div className="relative z-10 flex h-auto max-w-xl px-10 mx-auto bg-yellow-3000 md:mx-auto">
        <div className="w-full mt-20 text-left ">
          <div className="flex justify-between align-middle">
            <h1 className="text-4xl font-bold text-white">T O D O</h1>
            <ThemeSwitcher />
          </div>
          <TodoForm submitTodo={addTodo} add={true} />
          <TodosList />

          <TodoFooter />
        </div>
      </div>
    </div>
  );
};

export default App;
