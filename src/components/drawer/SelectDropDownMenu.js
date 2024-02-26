import React from "react";
import { Listbox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

// ====================================================

const SelectDropDownMenu = ({ state, setState, placeholder, options }) => {
  return (
    <div className="relative">
      <Listbox value={state} onChange={setState ? setState : () => null}>
        <Listbox.Button className="flex items-center justify-between w-full px-4 py-3 mt-2 text-xs font-semibold text-gray-400 bg-gray-100 rounded-md">
          {placeholder}
          <FaChevronDown />
        </Listbox.Button>

        <Listbox.Options className="absolute bottom-0 right-0 z-10 w-full py-3 text-xs translate-y-full bg-white rounded-md shadow-card">
          {options.map((option) => (
            <Listbox.Option
              className={`cursor-pointer w-full px-4 py-2 rounded-sm text-[0.7rem] text-start hover:text-blue-500 hover:bg-blue-50 ${
                option.value === state
                  ? "text-blue-500 bg-blue-50"
                  : "text-gray-500"
              }`}
              key={option.id}
              value={option.value}>
              {option.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default SelectDropDownMenu;
