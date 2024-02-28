import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Checkbox from "../form/input/Checkbox";
import DropdownMenu from "../drawer/DropdownMenu";

// ===================================================

const CustomTable = ({ tableHeader, rowData }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  const sortHandler = () => {
    console.log("sort");
  };

  return (
    <div className="flex flex-col w-11/12 gap-3 px-4 m-auto text-sm bg-white lg:w-full customize__scroll">
      <table className="table w-full text-xs">
        {/*  ====================== */}
        <thead>
          <tr className="text-left text-gray-400 uppercase border-b border-gray-200 border-dashed">
            <th className="px-3 py-4 min-w-[10px]">
              <Checkbox checked={checked} onChange={handleCheck} />
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
              <tr
                key={idx}
                className="capitalize border-b border-gray-200 border-dashed">
                <td className="px-3 py-3 min-w-[10px]">
                  <Checkbox onChange={handleCheck} value={idx + 1} />
                </td>
                {Object.keys(row).map((key, idx) => (
                  <td key={key + idx} className={getTableCellClass(key)}>
                    {getCellContent(key, row[key])}
                  </td>
                ))}
                <td className="py-3">
                  <DropdownMenu />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={tableHeader.length + 1}>
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
      return "w-1/2 p-3 text-left";
    case "status":
      return "p-3 text-xs font-medium text-left";
    default:
      return "p-3 font-medium text-left text-gray-500";
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
              <div className="flex items-center justify-center w-full h-full text-base text-red-500 bg-red-100">
                {value.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div>{value.name}</div>
            <div className="text-xs text-gray-500">{value.email}</div>
          </div>
        </div>
      );
    case "status":
      return (
        <div
          className={`w-fit text-center text-xs font-medium px-1 py-0.5 capitalize rounded ${
            value === "active"
              ? "bg-green-50 text-green-400"
              : "bg-red-50 text-red-500"
          }`}>
          {value}
        </div>
      );
    default:
      return value;
  }
};

export default CustomTable;
