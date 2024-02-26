import React from "react";
import HoverDropDownMenu from "../drawer/HoverDropDownMenu";
import Link from "next/link";

const UserProfile = () => {
  const themePopoverContent = (
    <div className="font-medium bg-white rounded-md shadow-md w-60">
      <div className="p-4">
        {/* ===== user information ===== */}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-12 h-12 text-lg text-blue-400 rounded-md bg-blue-50">
            P
          </button>
          <div>
            <p>PICO</p>
            <Link
              href={"/#"}
              className="block text-xs text-gray-500 hover:text-blue-400">
              Administrator
            </Link>
          </div>
        </div>

        <Link
          href={"/#"}
          className="block px-4 py-2 mt-5 text-sm rounded-md hover:text-blue-500 hover:bg-gray-100">
          My Profile
        </Link>
      </div>

      <div className="px-4 py-3 border-t border-t-gray-200">
        <Link
          className="block px-4 py-2 text-sm rounded-md hover:text-blue-500 hover:bg-gray-100"
          href={"/#"}>
          SignOut
        </Link>
      </div>
    </div>
  );

  return (
    <HoverDropDownMenu popOverContent={themePopoverContent}>
      <button className="flex items-center justify-center h-full font-semibold text-blue-400 rounded-md bg-blue-50 w-9">
        P
      </button>
    </HoverDropDownMenu>
  );
};

export default UserProfile;
