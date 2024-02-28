import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Input from "../../form/input/Input";
import Filter from "./Filter";
import ExportModal from "./Export";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

// ======================================================

const TableFilter = ({ placeholder, onSearchChange, onFilterChange }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    onSearchChange(value);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 px-8 pt-8 font-medium">
        <div className="flex items-center">
          <Input
            leftIcon={faSearch}
            placeholder={placeholder}
            className="bg-gray-100 border-none"
            value={searchText}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <Filter onFilterChange={onFilterChange} />
          <ExportModal />
          <Link
            href={"/users/create"}
            className="flex items-center gap-2 px-6 py-3 text-sm text-white bg-blue-500 rounded-md hover:brightness-90">
            <FaPlus />
            Create User
          </Link>
        </div>
      </div>
    </>
  );
};

export default TableFilter;
