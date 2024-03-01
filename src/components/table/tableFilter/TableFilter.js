import React, { useState } from "react";
import Link from "next/link";
import { useUserFilter } from "@/context/UserFilter";

import { FaPlus } from "react-icons/fa6";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Input from "../../form/input/Input";
import Filter from "./Filter";
import ExportModal from "./ExportModal";
import Delete from "./DeleteModal";

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
    <div className="flex flex-wrap items-center justify-between gap-4 px-8 pt-8">
      <div className="flex items-center">
        <Input
          leftIcon={faSearch}
          placeholder={placeholder}
          className="border-none bg-accent"
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
              className="flex items-center gap-2 px-6 py-3 text-sm rounded-md text-primary-foreground bg-primary hover:brightness-90">
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
