import React, { useState } from "react";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Combobox = ({
  labelText,
  required,
  clickSubmit,
  selectedItems,
  setSelectedItems,
  setFilterItems,
  filterItems,
  items,
}) => {
  const [value, setValue] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const handleOnChangeInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    const filterItem = items.filter((item) => {
      return item?.label?.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilterItems(filterItem);
  };
  const toogleDropdown = () => {
    if (!value) {
      setFilterItems(items);
    }
    setDropdown(!dropdown);
  };
  // adds new item to multiselect
  const addTag = (item) => {
    if (selectedItems.findIndex((sItem) => sItem.value === item.value) >= 0) {
      return;
    } else {
      setSelectedItems([...selectedItems.concat(item)]);
    }
    setValue("");
  };
  // removes item from multiselect
  const removeTag = (item) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelectedItems(filtered);
  };
  return (
    <div className="w-full">
      {labelText ? (
        <div className="p-1">
          <label className="text-xs text-gray-700">{labelText}</label>
          {required === true && <span className="ml-1 text-red-500">*</span>}
          {clickSubmit && !selectedItems.length > 0 && (
            <span className="ml-1 text-xs text-red-500">( require )</span>
          )}
        </div>
      ) : null}
      <div className="relative flex flex-col items-center w-full mx-auto">
        <div className="flex flex-col items-center w-full">
          <div className="w-full">
            <div
              className={`my-1 p-1 flex border ${
                clickSubmit && !selectedItems.length > 0
                  ? "border-red-300 bg-red-100"
                  : "border-gray-300 bg-gray-100"
              } focus:bg-white rounded-md overflow-hidden`}>
              <div className="flex flex-wrap flex-auto">
                {selectedItems.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-center items-center font-medium m-0.5 py-1.5 px-2 rounded-lg bg-gray-200 border border-gray-300">
                      <div className="flex-initial max-w-full text-sm font-normal leading-none text-gray-600">
                        {tag.label}
                      </div>
                      <div className="flex flex-row-reverse flex-auto text-gray-600 hover:text-red-500">
                        <div onClick={() => removeTag(tag)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x cursor-pointer hover:text-red-500 rounded-full w-3.5 h-3.5 ml-1">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="flex-1">
                  <input
                    value={value}
                    onChange={handleOnChangeInput}
                    className="bg-transparent py-1.5 px-2 appearance-none outline-none h-full w-full text-gray-600"
                  />
                </div>
              </div>
              <div
                className="flex items-center justify-center w-8 h-8 text-gray-300 bg-gray-300 rounded"
                onClick={toogleDropdown}>
                <button
                  type="button"
                  className="flex items-center justify-center w-full h-full text-white outline-none cursor-pointer focus:outline-none">
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-down"
                    className={`w-[15px] h-[15px] ${
                      dropdown || value ? "rotate-180" : ""
                    } ease-in-out transform duration-500`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="dropdown"
          className={`transition absolute top-12 ${
            dropdown || value
              ? "visible duration-300 ease-in max-h-[50rem]"
              : "invisible duration-200 ease-out max-h-0"
          } flex flex-col overflow-hidden w-full z-20`}>
          <div className="z-50 flex flex-col w-full overflow-hidden rounded-md shadow-md bg-gray-50">
            {filterItems.map((item, index) => (
              <Item
                key={index}
                item={item}
                selectedItems={selectedItems}
                addItem={addTag}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combobox;
