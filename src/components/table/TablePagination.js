import React, { useState, useEffect } from "react";
import { useUserFilter } from "@/context/UserFilter";
import SelectDropDownMenu from "../drawer/SelectDropDownMenu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [{ name: 10 }, { name: 25 }, { name: 50 }, { name: 100 }];

const TablePagination = () => {
  const {
    itemsPerPage,
    setItemsPerPage,
    filteredUsers,
    currentPage,
    setCurrentPage,
  } = useUserFilter();
  const [active, setActive] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Calculate total pages based on filteredUsers and itemsPerPage
    setTotalPages(Math.ceil(filteredUsers.length / itemsPerPage));
  }, [filteredUsers, itemsPerPage]); // Add itemsPerPage as a dependency

  useEffect(() => {
    setActive(currentPage);
  }, [currentPage]);

  const handlePagination = (pageNumber) => {
    setActive(pageNumber);
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    // Reset current page to 1 when items per page changes
    setCurrentPage(1);
  };

  const renderPageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).map((pageNumber) => (
    <span
      key={pageNumber}
      onClick={() => handlePagination(pageNumber)}
      className={`h-8 w-8 text-sm flex justify-center items-center rounded-md cursor-pointer ${
        active === pageNumber
          ? "bg-primary text-primary-foreground"
          : "text-accent-foreground hover:bg-accent"
      }`}>
      {pageNumber}
    </span>
  ));

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
    setCurrentPage(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    setCurrentPage(active - 1);
  };

  return (
    <div className="flex items-center justify-between px-8">
      <div className="w-24 rounded-md shadow-sm cursor-pointer">
        <SelectDropDownMenu
          selected={itemsPerPage}
          setSelected={handleItemsPerPageChange}
          placeholder={"10"}
          options={data}
        />
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={prev}
          className="p-2 text-sm rounded-md text-secondary-foreground hover:bg-accent hover:text-primary">
          <FaChevronLeft />
        </button>

        <div className="flex items-center gap-1">{renderPageNumbers}</div>

        <button
          onClick={next}
          className="p-2 text-sm rounded-md text-secondary-foreground hover:bg-accent hover:text-primary">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
