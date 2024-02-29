import React, { Fragment, useState } from "react";

import { FaFilter } from "react-icons/fa";

import { Menu, Transition } from "@headlessui/react";
import SelectDropDownMenu from "@/components/drawer/SelectDropDownMenu";
import { UsersListInfos } from "constants/data";
import { useUserFilter } from "@/context/UserFilter";

// ====================================================

const roleOptionData = [
  { id: 1, name: "Administrator" },
  { id: 2, name: "Analyst" },
  { id: 3, name: "Developer" },
  { id: 4, name: "Support" },
  { id: 5, name: "Tiral" },
];

const activeStatusOptionData = [
  { id: 23143214653, name: "Active" },
  { id: 28967568767, name: "Inactive" },
];

// ====================================================

const Filter = () => {
  const [role, setRole] = useState(null);
  const [status, setStatus] = useState(null);
  const { filterByRole, resetFilter } = useUserFilter();

  const handleFilter = () => {
    if (role || status) {
      filterByRole({
        role: role?.toLowerCase(),
        status: status?.toLowerCase(),
      });
    }
    return;
  };

  const handleReset = () => {
    setRole(null);
    setStatus(null);
    resetFilter(UsersListInfos);
  };

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
          leaveTo="opacity-0">
          <Menu.Items className="absolute right-0 z-20 mt-1 origin-top-right bg-white rounded-md shadow-lg w-80">
            <div className="w-full px-4 py-3 text-sm font-semibold border-b border-b-gray-200">
              <p>Filter Options</p>
            </div>

            <div className="p-5">
              <div>
                <p className="text-xs">Role:</p>
                <SelectDropDownMenu
                  removeAble
                  selected={role}
                  setSelected={setRole}
                  placeholder={"Select option"}
                  options={roleOptionData}
                />
              </div>

              <div className="mt-8">
                <p className="text-xs">Account Status</p>
                <SelectDropDownMenu
                  removeAble
                  selected={status}
                  setSelected={setStatus}
                  placeholder={"Select option"}
                  options={activeStatusOptionData}
                />
              </div>

              <div className="flex items-center justify-end w-full gap-3 mt-6">
                <Menu.Item
                  as={"button"}
                  onClick={handleReset}
                  className="px-4 py-3 text-xs text-gray-500 rounded-md hover:bg-blue-50 hover:text-blue-500 bg-gray-50">
                  Reset
                </Menu.Item>
                <Menu.Item
                  as={"button"}
                  onClick={handleFilter}
                  className="px-4 py-3 text-xs text-white bg-blue-500 rounded-md hover:brightness-90">
                  Apply
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Filter;
