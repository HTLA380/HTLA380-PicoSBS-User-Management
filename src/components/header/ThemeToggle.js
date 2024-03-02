import React, { useState, useEffect } from "react";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import HoverDropDownMenu from "../drawer/HoverDropDownMenu";

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

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    // Save theme preference to localStorage
    localStorage.setItem("theme", selectedTheme);
  };

  const themePopoverContent = (
    <div className="px-2 py-3 rounded-md shadow-md bg-secondary w-36">
      {themeData.map((data) => {
        return (
          <button
            onClick={() => handleThemeChange(data.name)}
            key={data.name}
            className={`capitalize flex items-center w-full gap-2 px-4 py-2 my-1 text-xs rounded-md hover:text-primary font-medium ${
              data.name === theme
                ? "bg-accent text-primary"
                : "bg-transparent text-muted-foreground"
            }`}>
            {data.icon}
            {data.name}
          </button>
        );
      })}
    </div>
  );

  // Getting the current selected theme
  const { icon } = themeData.find(({ name }) => name === theme);

  return (
    <HoverDropDownMenu popOverContent={themePopoverContent}>
      <button className="flex items-center justify-center w-8 h-full text-sm rounded-md text-muted-foreground bg-secondary hover:text-primary">
        {icon}
      </button>
    </HoverDropDownMenu>
  );
};

export default ThemeToggle;
