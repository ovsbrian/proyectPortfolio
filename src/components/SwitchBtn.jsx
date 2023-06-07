import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const SwitchButton = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    onToggle(!isDarkMode);
  };

  return (
    <>
      <div className="flex items-center gap-2 select-none">
        <FiSun className={`${isDarkMode ? "opacity-50" : "opacity-100"}`} />
        <div className="inline-flex items-center">
          <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
            <input
              id="switch-component"
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggle}
              className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 bg-slate-500 peer-checked:border-slate-600 peer-checked:before:bg-slate-600"
            />
            <label
              htmlFor="switch-component"
              className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md   transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-slate-600 peer-checked:before:bg-slate-300"
            >
              <div
                className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                data-ripple-dark="true"
              ></div>
            </label>
          </div>
        </div>
        <FiMoon className={`${isDarkMode ? "opacity-100" : "opacity-50"}`} />
      </div>
    </>
  );
};
