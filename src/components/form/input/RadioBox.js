import React from "react";

const RadioBox = ({ labelText, label, required, error, id }) => {
  return (
    <React.Fragment>
      {labelText ? (
        <div className="p-1">
          <label className="text-xs text-gray-700">{labelText}</label>
          {required === true && (
            <span className="ml-1 text-red-500">*</span>
          )}{" "}
          {error ? (
            <label className="pt-0 mt-0 text-xs text-red-700">
              ( {error} )
            </label>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <input
            type="radio"
            id={id}
            name="fav_language"
            value="CSS"
            className="bg-[#fff] w-5 h-5 mr-4"
          />
          <label htmlFor={id} className="ml-2">
            <div className="text-sm text-gray-700">{label}</div>
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RadioBox;
