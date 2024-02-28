import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Input from "../../form/input/Input";
import Filter from "./Filter";
import ExportModal from "./Export";

// ======================================================

const TableFilter = ({ placeholder }) => {
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
          <Filter />

          <ExportModal />
        </div>
      </div>
    </>
  );
};

export default TableFilter;
