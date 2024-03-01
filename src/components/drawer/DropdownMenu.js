import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const DropdownMenu = ({ className }) => {
  return (
    <div className={`${className ? className : null}`}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-medium rounded-lg text-muted-foreground bg-accent bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Actions
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-3 h-3 ml-2 -mr-1 text-gray-400"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-75"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-75">
          <Menu.Items className="absolute right-0 z-50 w-32 mt-1 origin-top-right rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-accent text-primary" : "text-gray-500"
                    } group flex w-full items-center rounded-md px-2 py-2 text-xs my-1`}>
                    View
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-accent text-primary" : "text-gray-500"
                    } group flex w-full items-center rounded-md px-2 py-2 text-xs my-1`}>
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-accent text-primary" : "text-gray-500"
                    } group flex w-full items-center rounded-md px-2 py-2 text-xs my-1`}>
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
