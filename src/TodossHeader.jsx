import bg from "./assets/images/bg-desktop-light.jpg";

import bgDark from "./assets/images/bg-desktop-dark.jpg";
const TodossHeader = ({ todos }) => {
  return (
    <header>
      <img
        src={bg}
        alt="image light"
        className="absolute z-0 hidden object-cover w-full dark:opacity-0 sm:block"
        style={{ height: 300 }}
      />
      <img
        src={bgDark}
        alt="image light"
        className="absolute z-0 hidden object-cover w-full opacity-0 dark:opacity-100 sm:block"
        style={{ height: 300 }}
      />
      <img
        src={bg}
        alt="image light"
        className="absolute z-0 object-cover w-full opacity-100 dark:opacity-0 sm:hidden "
        style={{ height: 200 }}
      />
      <img
        src={bgDark}
        alt="image light"
        className="absolute z-0 object-cover w-full opacity-0 dark:opacity-100 sm:hidden"
        style={{ height: 200 }}
      />
    </header>
  );
};

export default TodossHeader;
