import React, { useState } from "react";
import Button from "../../form/button/Button";
import Input from "../../form/input/Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaFilter } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { PiExportBold } from "react-icons/pi";
import FilterPopover from "./FilterPopover";

const TableFilter = ({ placeholder }) => {
  const [role, setRole] = useState("administrator");
  const [status, setStatus] = useState("active");

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 px-8 pt-8 font-medium">
        <div className="flex items-center">
          <Input
            leftIcon={faSearch}
            placeholder={placeholder}
            className="bg-gray-100 border-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <div>
            <FilterPopover
              role={role}
              setRole={setRole}
              status={status}
              setStatus={setStatus}
            />
          </div>
          <div>
            <button className="flex items-center gap-2 px-6 py-3 text-sm text-blue-500 rounded-md bg-blue-50 hover:bg-blue-500 hover:text-white">
              <PiExportBold size={15} />
              Export
            </button>
          </div>
          <div>
            <button className="flex items-center gap-2 px-6 py-3 text-sm text-white bg-blue-500 rounded-md">
              <GoPlus size={20} />
              Create User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableFilter;
