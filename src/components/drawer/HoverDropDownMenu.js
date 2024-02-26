import React, { useEffect, useState } from "react";

const HoverDropDownMenu = ({ children, popOverContent, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  let hoverTimeout;

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout); // Clear any existing timeout
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {children}

      <div
        className={`absolute bottom-0 min-w-full translate-y-full right-0 ${className} ${
          isOpen ? "slideInUp_Animation" : "invisible"
        }`}>
        <div className="px-2 py-3 bg-white rounded-md shadow-md w-36"></div>
        {popOverContent}
      </div>
    </div>
  );
};

export default HoverDropDownMenu;
