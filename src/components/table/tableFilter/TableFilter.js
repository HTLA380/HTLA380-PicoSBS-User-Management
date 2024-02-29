import React, { useState } from "react";
import Link from "next/link";
import { useUserFilter } from "@/context/UserFilter";

import { FaPlus } from "react-icons/fa6";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Input from "../../form/input/Input";
import Filter from "./Filter";
import ExportModal from "./Export";
import Delete from "./Delete";

// ============================================================

const TableFilter = ({ placeholder }) => {
  const [searchText, setSearchText] = useState("");
  const { filterByName, selectedUsersId } = useUserFilter();

  // filter user by search input
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    filterByName(value);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-8 pt-8 font-medium">
      <div className="flex items-center">
        <Input
          leftIcon={faSearch}
          placeholder={placeholder}
          className="bg-gray-100 border-none"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-center gap-4">
        {/* render delete button if the users get select */}
        {selectedUsersId.length > 0 ? (
          <Delete />
        ) : (
          <>
            <Filter />
            <ExportModal />
            <Link
              href={"/users/create"}
              className="flex items-center gap-2 px-6 py-3 text-sm text-white bg-blue-500 rounded-md hover:brightness-90">
              <FaPlus />
              Create User
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TableFilter;
