import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Select = ({ data, className, labelText, required, error }) => {
  const [selected, setSelected] = useState(data[0]);
  return (
    <React.Fragment>
      {labelText ? (
        <div className="p-1">
          <label className="text-xs font-semibold text-gray-700">
            {labelText}
          </label>
          {required === true && <span className="ml-1 text-red-500">*</span>}{" "}
          {error ? (
            <label className="pt-0 mt-0 text-xs text-red-700">
              ( {error} )
            </label>
          ) : null}
        </div>
      ) : null}
      <div className={`w-72 ${className ? className : null}`}>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left text-gray-600 border border-gray-300 rounded-lg cursor-pointer sm:text-sm">
              <span className="block capitalize truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex flex-col items-center justify-center pr-2 pointer-events-none">
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="w-5 h-5 text-gray-400"
                />
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-5 h-5 text-gray-400"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 px-4 ${
                        active ? "bg-gray-100 text-[#009ef7]" : "text-gray-500"
                      }`
                    }
                    value={person}>
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected
                              ? "font-medium text-[#009ef7]"
                              : "font-normal"
                          }`}>
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#009ef7]">
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="w-5 h-5"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </React.Fragment>
  );
};

export default Select;
