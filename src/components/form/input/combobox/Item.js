import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Item = ({ item, addItem, selectedItems }) => {
  return (
    <div className="w-full cursor-pointer" onClick={() => addItem(item)}>
      <div
        className={`flex ${
          selectedItems.findIndex((sItem) => sItem.value === item.value) >= 0
            ? "bg-gray-200 text-[#009ef7] border-b border-white cursor-not-allowed"
            : "hover:bg-gray-200 text-gray-600 hover:text-[#009ef7]"
        } w-auto items-center px-3 py-2 text-sm font-normal select-none`}>
        <div className="flex items-center justify-between w-full">
          <div className="mx-2 leading-6">{item.label}</div>
          {selectedItems.findIndex((sItem) => sItem.value === item.value) >=
            0 && <FontAwesomeIcon icon="fa-solid fa-check" />}
        </div>
      </div>
    </div>
  );
};

export default Item;
