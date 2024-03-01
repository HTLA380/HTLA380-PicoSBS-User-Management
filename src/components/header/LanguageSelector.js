import React, { useState } from "react";
import HoverDropDownMenu from "../drawer/HoverDropDownMenu";

const languageData = [
  {
    name: "မြန်မာ",
    imgSrc: "/images/flags/myanmar.svg",
  },
  {
    name: "English",
    imgSrc: "/images/flags/united-states.svg",
  },
  {
    name: "ภาษาไทย",
    imgSrc: "/images/flags/thailand.svg",
  },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languagePopoverContent = (
    <div className="px-2 py-3 rounded-md shadow-md bg-card w-36">
      {languageData.map((data) => {
        return (
          <button
            onClick={() => setSelectedLanguage(data.name)}
            key={data.name}
            className={`flex items-center w-full gap-2 px-4 py-2 my-1 text-xs font-medium rounded-md hover:text-primary ${
              data.name === selectedLanguage
                ? "bg-accent text-primary"
                : "bg-transparent text-muted-foreground"
            }`}>
            <img src={data.imgSrc} className="w-4 h-4 rounded-md" />
            {data.name}
          </button>
        );
      })}
    </div>
  );

  // getting the current selected language
  const { name, imgSrc } = languageData.find(
    ({ name }) => name === selectedLanguage
  );

  return (
    <HoverDropDownMenu popOverContent={languagePopoverContent}>
      <button className="flex items-center h-full gap-2 px-4 text-xs font-medium rounded-sm shadow-sm text-secondary-foreground bg-secondary">
        {name}
        <img src={imgSrc} className="w-4 h-4 rounded-md" />
      </button>
    </HoverDropDownMenu>
  );
};

export default LanguageSelector;
