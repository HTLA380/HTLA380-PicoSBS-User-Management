import React, { useEffect, useState } from "react";

const HoverPopoverButton = ({ children, popOverContent, className }) => {
  const [isHovering, setIsHovering] = useState(false);

  let hoverTimeout;

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout); // Clear any existing timeout
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovering(false);
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
          isHovering ? "slideInUp_Animation" : "invisible"
        }`}>
        {popOverContent}
      </div>
    </div>
  );
};

export default HoverPopoverButton;
