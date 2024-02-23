// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({
  labelText,
  leftIcon,
  rightIcon,
  required,
  disable,
  className,
  type,
  placeholder,
  value,
  name,
  onChange,
  iconClick,
  onFocus,
  min,
  max,
  id,
  inputRef,
  error,
}) => {
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
      <div className="relative overflow-hidden">
        {leftIcon && (
          <span className="absolute top-0 inline-flex items-center justify-center h-full p-0 mx-3 text-gray-400 left-1">
            <FontAwesomeIcon icon={leftIcon} />
          </span>
        )}
        <input
          className={`block w-full text-gray-500 text-sm focus:outline-none overflow-auto h-10 px-4 ${
            leftIcon ? "pl-10" : ""
          } rounded-lg focus:shadow-inner border focus:border-gray-400 ${
            error ? "border-red-400 bg-red-100" : "border-gray-300 bg-gray-100"
          } ${required ? "required" : ""} ${className ? className : null}`}
          type={type}
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          min={min}
          max={max}
          id={id}
          disabled={disable}
          autoComplete="off"
        />
        {rightIcon && (
          <span
            className="absolute top-0 right-0 inline-flex items-center justify-center h-full p-0 mx-3 text-gray-400 cursor-pointer"
            onClick={iconClick}>
            <FontAwesomeIcon icon={rightIcon} />
          </span>
        )}
      </div>
    </React.Fragment>
  );
};

export default Input;
