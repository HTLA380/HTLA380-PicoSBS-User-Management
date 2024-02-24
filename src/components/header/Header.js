import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import LanguageSelector from "./LanguageSelector";
import PosScreen from "./PosScreen";
import SoundToggle from "./SoundToggle";
import ThemeToggle from "./ThemeToggle";
import UserProfile from "./UserProfile";

const Header = ({ open, setOpen }) => {
  return (
    <header className="sticky top-0 z-10 py-4 bg-slate-100">
      <nav className="flex items-center justify-between">
        <div>
          <h3>Users List</h3>
          <div className="flex items-center text-sm capitalize">
            <Breadcrumbs />
            <span> / Users List</span>
          </div>
        </div>

        <div className="flex items-stretch h-10 gap-2">
          <LanguageSelector />
          <PosScreen />
          <SoundToggle />
          <ThemeToggle />
          <UserProfile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
