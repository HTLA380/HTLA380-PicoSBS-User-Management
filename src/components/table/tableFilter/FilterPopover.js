import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { FaFilter } from "react-icons/fa";
import DropDownMenu from "@/components/menu/DropDownMenu";

const roleOptionData = [
  { id: 1, name: "Administrator", value: "administrator" },
  { id: 2, name: "Analyst", value: "analyst" },
  { id: 3, name: "Developer", value: "developer" },
  { id: 4, name: "Support", value: "support" },
  { id: 5, name: "Tiral", value: "tiral" },
];

const activeStatusOptionData = [
  { id: 23143214653, name: "Active", value: "active" },
  { id: 28967568767, name: "Inactive", value: "inactive" },
];

const FilterPopover = ({ role, setRole, status, setStatus }) => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 text-xs font-medium text-blue-500 rounded-md bg-blue-50 hover:bg-blue-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <FaFilter />
          Filter
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 translate-y-12"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease duration-300 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0"
        >
          <Menu.Items className="absolute right-0 z-20 mt-1 origin-top-right bg-white rounded-md shadow-lg w-80">
            <div className="w-full px-4 py-3 text-sm font-semibold border-b border-b-gray-200">
              <p>Filter Options</p>
            </div>

            <div className="p-5">
              <div>
                <p className="text-xs">Role:</p>
                <DropDownMenu
                  state={role}
                  setState={setRole}
                  placeholder={"Select option"}
                  options={roleOptionData}
                />
              </div>

              <div className="mt-8">
                <p className="text-xs">Account Status</p>
                <DropDownMenu
                  state={status}
                  setState={setStatus}
                  placeholder={"Select option"}
                  options={activeStatusOptionData}
                />
              </div>

              <div className="flex items-center justify-end w-full gap-3 mt-6">
                <button className="px-4 py-3 text-xs text-gray-500 rounded-md hover:bg-blue-50 hover:text-blue-500 bg-gray-50">
                  Reset
                </button>
                <button className="px-4 py-3 text-xs text-white bg-blue-500 rounded-md hover:brightness-90">
                  Apply
                </button>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default FilterPopover;
