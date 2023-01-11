import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import UseThemeContext from "./libs/context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import TodoFooter from "./TodoFooter";
import TodosList from "./TodosList";
import TodossHeader from "./TodossHeader";

const App = () => {
  const { theme } = UseThemeContext();

  const [todos, setTodos] = useState([
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      text,
      id: Date.now(),
      done: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const toggleTodo = (task) => {
    const newTodos = todos.map((t) => {
      if (t.id === task.id) {
        t.done = !task.done;
        return t;
      }
      return t;
    });
    setTodos(newTodos);
  };
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
          <AddTodoForm addTodo={addTodo} />
          <TodosList todos={todos} />

          <TodoFooter todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
