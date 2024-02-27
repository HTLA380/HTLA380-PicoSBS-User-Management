import { Combobox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

export default function SelectDropDownMenu({
  selected,
  setSelected,
  placeholder = "Select an option",
  options = [],
}) {
  const handleChange = (newValue) => {
    if (setSelected) setSelected(newValue);
  };

  return (
    <div className="w-full">
      <Combobox value={selected || ""} onChange={handleChange}>
        <div className="relative mt-1">
          <Combobox.Button className="flex items-center justify-between w-full px-4 py-3 text-xs text-left text-gray-400 bg-gray-100 rounded-md cursor-pointer sm:text-sm">
            <div
              className={`text-sm font-medium ${
                selected ? "text-gray-600" : "text-gray-400"
              }`}>
              {selected ? selected.name : placeholder}
            </div>
            <FaChevronDown aria-hidden="true" />
          </Combobox.Button>

          <Combobox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {options &&
              options.map((option) => (
                <Combobox.Option
                  key={option.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-50 text-blue-500" : "text-gray-500"
                    }`
                  }
                  value={option}>
                  <span className="text-xs font-medium">{option.name}</span>
                </Combobox.Option>
              ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
}
