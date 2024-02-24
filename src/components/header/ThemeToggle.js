import React, { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import HoverPopoverButton from "../button/HoverPopoverButton";

const themeData = [
  {
    name: "light",
    icon: <IoMdSunny />,
  },
  {
    name: "dark",
    icon: <BsFillMoonStarsFill />,
  },
  {
    name: "system",
    icon: <FaDesktop />,
  },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const themePopoverContent = (
    <div className="px-2 py-3 bg-white rounded-md shadow-md w-36">
      {themeData.map((data) => {
        return (
          <button
            onClick={() => setTheme(data.name)}
            key={data.name}
            className={`capitalize flex items-center w-full gap-2 px-4 py-2 my-1 text-xs rounded-md hover:text-blue-500 font-medium ${
              data.name === theme
                ? "bg-gray-100 text-blue-500"
                : "bg-transparent text-gray-500"
            }`}>
            {data.icon}
            {data.name}
          </button>
        );
      })}
    </div>
  );
  // getting the current selected theme
  const { icon } = themeData.find(({ name }) => name === theme);

  return (
    <HoverPopoverButton popOverContent={themePopoverContent}>
      <button
        onClick={() => setIsSoundOn((prev) => !prev)}
        className="flex items-center justify-center w-8 h-full text-sm text-gray-500 bg-white rounded-md hover:text-blue-500">
        {icon}
      </button>
    </HoverPopoverButton>
  );
};

export default ThemeToggle;
