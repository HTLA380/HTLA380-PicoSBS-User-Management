import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Badge = ({ count, icon }) => {
  return (
    <div className="p-1 md:p-3 text-[0.5rem] md:text-xl relative mx-1 md:mx-2 cursor-pointer hover:text-[#4ca0d4]">
      <FontAwesomeIcon icon={icon} />
      {count > 0 && (
        <span className="absolute right-0 flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold text-white bg-red-500 rounded-full top-1">
          {count}
        </span>
      )}
    </div>
  );
};

export default Badge;
