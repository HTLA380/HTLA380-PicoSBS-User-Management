import Link from "next/link";
import React from "react";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PosScreen = () => {
  return (
    <Link
      href={"/#"}
      className="flex items-center justify-center w-8 px-3 text-xs text-gray-500 bg-white rounded-md">
      <FontAwesomeIcon icon={faCashRegister} />
    </Link>
  );
};

export default PosScreen;
