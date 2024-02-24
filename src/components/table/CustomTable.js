import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuDropdown from "../drawer/MenuDropdown";
import Checkbox from "../form/input/Checkbox";
import Image from "next/image";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CustomTable = ({ tableHeader, rowData }) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = (e) => {
    const { checked } = e.target;
    setChecked(checked);
  };
  const sortHandler = () => {
    console.log("sort");
  };
  return (
    <div className="flex flex-col w-11/12 gap-3 px-4 m-auto text-sm bg-white lg:w-full customize__scroll">
      <table className="table w-full">
        <thead>
          <tr className="text-left text-gray-400 uppercase border-b border-gray-200 border-dashed">
            <th className="px-3 py-4 min-w-[10px]">
              <Checkbox checked={checked} onChange={handleCheck} />
            </th>
            {tableHeader.map((th, index) => (
              <React.Fragment key={index}>
                <th
                  className="px-3 py-4 text-left min-w-[125px] group cursor-pointer"
                  onClick={() => sortHandler()}>
                  <div className="flex items-center text-xs font-semibold">
                    {th}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-2 w-[11px] h-[11px] opacity-0 transition duration-300 group-hover:opacity-100"
                    />
                  </div>
                </th>
              </React.Fragment>
            ))}
            <th className="px-3 py-4 text-xs font-semibold text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {rowData.length > 0 ? (
            rowData.map((row, idx) => {
              const rowKey = Object.keys(row);
              return (
                <tr
                  key={idx}
                  className="capitalize border-b border-gray-200 border-dashed">
                  <td className="px-3 py-3 min-w-[10px]">
                    <Checkbox
                      onChange={handleCheck}
                      value={idx + 1}
                      // id={index + 1}
                      // name={index + 1}
                      // checked={allChecked}
                    />
                  </td>
                  {rowKey.map((key, idx) =>
                    key === "user" ? (
                      <td
                        className="text-left p-3 min-w-[200px]"
                        key={key + idx}>
                        <div className="flex items-center">
                          <div
                            className={`w-[50px] h-[50px] cursor-pointer ${
                              row[key].img
                                ? "object-center"
                                : `text-center flex items-center justify-center`
                            }  rounded-full overflow-hidden mr-4`}>
                            {row[key].img ? (
                              <Image
                                src={row[key].img}
                                alt=""
                                className="w-full h-full"
                                width={100}
                                height={100}
                              />
                            ) : (
                              <div className="text-base">
                                {row[key].name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col gap-1">
                            <div>{row[key].name}</div>
                            <div className="text-xs text-gray-500">
                              {row[key].email}
                            </div>
                          </div>
                        </div>
                      </td>
                    ) : key === "status" ? (
                      <td
                        key={key + idx}
                        className="p-3 text-xs font-medium text-left">
                        <div
                          className={`w-[76px] text-center text-xs font-medium px-2 py-1 capitalize rounded`}>
                          {row[key]}
                        </div>
                      </td>
                    ) : (
                      <td
                        key={key + idx}
                        className="p-3 text-left text-gray-600">
                        {row[key]}
                      </td>
                    )
                  )}
                  <td className="p-3">
                    <MenuDropdown />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No data available in table</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;

// ${
// 	row[key].img
// 		? "object-center"
// 		: `text-center flex items-center justify-center`
// } ${
// 	orderStatus === "Pending" ||
// 	orderStatus === "Locked"
// 		? "bg-[#fff8dd] text-[#ffc700]"
// 		: `${
// 				orderStatus === "Completed" ||
// 				orderStatus === "Active" ||
// 				orderStatus === "Published"
// 					? "bg-[#e8fff3] text-[#50cd89]"
// 					: `${
// 							orderStatus === "Delivering" ||
// 							orderStatus === "Processing" ||
// 							orderStatus === "In Transit" ||
// 							orderStatus === "Scheduled"
// 								? "bg-[#eef6ff] text-[#3e97ff]"
// 								: `${
// 										orderStatus === "Refunded" ||
// 										orderStatus === "Disabled"
// 											? "bg-[#f8f5ff] text-[#7239ea]"
// 											: "bg-[#fff5f8] text-[#f1416c]"
// 									}`
// 						}`
// 			}`
// }
