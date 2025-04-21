"use client";

import React from "react";
import { useAppSelector } from "@/app/store/hooks";
import LanguageToggle from "../atoms/LanguageToggle";

const Header = () => {
  const { translations } = useAppSelector((state) => state.language);

  return (
    <div className="w-full bg-white z-10">
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-lg font-bold">{translations["site.title"]}</h1>
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Header;
