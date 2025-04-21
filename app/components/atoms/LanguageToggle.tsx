"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setLanguage } from "@/app/store/slices/languageSlice";

const LanguageToggle = () => {
  const dispatch = useAppDispatch();
  const { language, translations } = useAppSelector((state) => state.language);

  const toggleLanguage = () => {
    dispatch(setLanguage(language === "en" ? "zh" : "en"));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1 text-sm rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
      aria-label={translations["language.switch"]}
    >
      {language === "en" ? "中文" : "EN"}
    </button>
  );
};

export default LanguageToggle;
