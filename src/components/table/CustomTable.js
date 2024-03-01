import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import DropdownMenu from "../drawer/DropdownMenu";
import { useUserFilter } from "@/context/UserFilter";

const tableHeader = ["User", "Username", "Role", "Status"];

// ===================================================

const CustomTable = () => {
  const {
    paginatedUsers: rowData,
    selectedUsersId,
    setSelectedUsersId,
    selectAllChecked,
    setSelectAllChecked,
  } = useUserFilter();

  const handleCheck = (id) => {
    if (selectAllChecked) {
      // If "Select All" is checked, deselect all users if any checkbox is unchecked
      if (selectedUsersId.includes(id)) {
        setSelectedUsersId(selectedUsersId.filter((userId) => userId !== id));
      } else {
        setSelectedUsersId([...selectedUsersId, id]);
      }
    } else {
      // Otherwise, handle individual checkbox changes
      if (selectedUsersId.includes(id)) {
        setSelectedUsersId(selectedUsersId.filter((userId) => userId !== id));
      } else {
        setSelectedUsersId([...selectedUsersId, id]);
      }
    }
  };

  const handleSelectAll = () => {
    setSelectAllChecked(!selectAllChecked);
    if (!selectAllChecked) {
      const allUsersIds = rowData.map((row) => row.id);
      setSelectedUsersId(allUsersIds);
    } else {
      setSelectedUsersId([]);
    }
  };

  const sortHandler = () => {
    console.log("sort");
  };

  return (
    <div className="flex flex-col w-11/12 gap-3 px-4 m-auto text-sm bg-card lg:w-full customize__scroll">
      <table className="table w-full text-xs">
        {/*  ====================== */}
        <thead>
          <tr className="text-left uppercase border-b border-dashed border-border text-card-foreground">
            <th className="px-3 py-4 min-w-[10px]">
              <CheckBox checked={selectAllChecked} onChange={handleSelectAll} />
            </th>
            {tableHeader.map((th, index) => (
              <th
                key={index}
                className="px-3 py-4 text-left min-w-[125px] group cursor-pointer"
                onClick={sortHandler}>
                <div className="flex items-center text-xs font-semibold">
                  {th}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-2 w-[11px] h-[11px] opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                </div>
              </th>
            ))}
            <th className="px-3 py-4 text-xs font-semibold text-left">
              Actions
            </th>
          </tr>
        </thead>

        {/*  ==================== */}
        <tbody>
          {rowData.length > 0 ? (
            rowData.map((row, idx) => (
              <tr key={idx} className="border-b border-dashed border-border">
                <td className="px-3 py-3 min-w-[10px]">
                  <CheckBox
                    checked={selectedUsersId.includes(row.id)}
                    onChange={() => handleCheck(row.id)}
                  />
                </td>
                {Object.keys(row).map(
                  (key, idx) =>
                    key !== "id" && (
                      <td key={key + idx} className={getTableCellClass(key)}>
                        {getCellContent(key, row[key])}
                      </td>
                    )
                )}
                <td className="py-3">
                  <DropdownMenu />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={tableHeader.length + 1}
                className="py-8 text-sm text-center text-card-foreground">
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const getTableCellClass = (key) => {
  switch (key) {
    case "user":
      return "min-w-2/5 p-3 text-left";
    case "status":
      return "p-3 text-xs font-medium text-left";
    default:
      return "p-3 font-medium text-left text-card-foreground";
  }
};

const getCellContent = (key, value) => {
  switch (key) {
    case "user":
      return (
        <div className="flex items-center">
          <div
            className={`w-[50px] h-[50px] cursor-pointer ${
              value.img
                ? "object-center"
                : `text-center flex items-center justify-center`
            }  rounded-full overflow-hidden mr-4`}>
            {value.img ? (
              <Image
                src={value.img}
                alt=""
                className="w-full h-full"
                width={100}
                height={100}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-base font-medium text-destructive-light-foreground bg-destructive-light">
                {value.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[0.8125rem]">{value.name}</div>
            <div className="text-xs text-card-foreground">{value.email}</div>
          </div>
        </div>
      );
    case "status":
      return (
        <div
          className={`w-fit text-center text-xs font-medium px-1.5 py-0.5 capitalize rounded-md ${
            value === "active"
              ? "bg-green-400/10 text-green-400"
              : "bg-destructive-light text-destructive-light-foreground"
          }`}>
          {value}
        </div>
      );
    default:
      return value;
  }
};

const CheckBox = ({ checked, onChange }) => {
  return (
    <div class="flex items-center">
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="w-5 h-5 border-none rounded outline-none cursor-pointer text-primary bg-accent ring-0 focus:ring-0"
      />
    </div>
  );
};

export default CustomTable;
