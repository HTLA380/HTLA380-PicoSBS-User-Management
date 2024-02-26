import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import LanguageSelector from "./LanguageSelector";
import PosScreen from "./PosScreen";
import SoundToggle from "./SoundToggle";
import ThemeToggle from "./ThemeToggle";
import UserProfile from "./UserProfile";
import { useRouter } from "next/router";
import { pageTitleData, sidebarData } from "constants/data";

const Header = ({ open, setOpen }) => {
  const router = useRouter();

  const getPageTitleData = (pathname) => {
    return pageTitleData.find((data) => data.url === pathname);
  };

  const { title, pathname, subtitle } = getPageTitleData(router.pathname) || {};

  return (
    <header className="sticky top-0 z-10 px-8 py-4 bg-slate-100">
      <nav className="flex items-center justify-between">
        <div>
          <h3>{title || ""}</h3>
          <p className="text-[0.8125rem] font-medium capitalize">
            <span className="text-gray-400">{pathname || ""} / </span>
            {subtitle || ""}
          </p>
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
