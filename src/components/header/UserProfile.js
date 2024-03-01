import React from "react";
import HoverDropDownMenu from "../drawer/HoverDropDownMenu";
import Link from "next/link";

const UserProfile = () => {
  const themePopoverContent = (
    <div className="font-medium rounded-md shadow-md bg-secondary w-60">
      <div className="p-4">
        {/* ===== user information ===== */}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-12 h-12 text-lg rounded-md text-primary bg-primary-light">
            H
          </button>
          <div>
            <p>Htet Aung Lin</p>
            <Link
              href={"/#"}
              className="block text-xs text-muted-foreground hover:text-primary">
              Administrator
            </Link>
          </div>
        </div>

        <Link
          href={"/#"}
          className="block px-4 py-2 mt-5 text-sm rounded-md hover:text-primary hover:bg-accent">
          My Profile
        </Link>
      </div>

      <div className="px-4 py-3 border-t border-t-border">
        <Link
          className="block px-4 py-2 text-sm rounded-md hover:text-primary hover:bg-accent"
          href={"/#"}>
          SignOut
        </Link>
      </div>
    </div>
  );

  return (
    <HoverDropDownMenu popOverContent={themePopoverContent}>
      <button className="flex items-center justify-center h-full font-semibold rounded-md bg-primary-light text-primary w-9">
        H
      </button>
    </HoverDropDownMenu>
  );
};

export default UserProfile;
