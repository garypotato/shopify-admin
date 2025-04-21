import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define available languages
type Language = "en" | "zh";

// Define translations for both languages
const translationData: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "site.title": "Sydney Mom",

    // Navigation
    "nav.home": "Home",
    "nav.courses": "Courses",
    "nav.nanny": "Nanny",
    "nav.news": "News",
    "nav.me": "Me",

    // Common
    "language.switch": "Switch to Chinese",

    // Nanny Section
    "nanny.gold_medal": "Gold Medal Nanny",
    "nanny.hire": "Hire",
    "nanny.maternity": "Maternity Nanny",

    // Add more translations as needed
  },
  zh: {
    // Header
    "site.title": "悉尼妈妈",

    // Navigation
    "nav.home": "首页",
    "nav.courses": "课程",
    "nav.nanny": "保姆",
    "nav.news": "新闻",
    "nav.me": "我的",

    // Common
    "language.switch": "切换到英文",

    // Nanny Section
    "nanny.gold_medal": "金牌月嫂",
    "nanny.hire": "雇佣",
    "nanny.maternity": "月子护理",

    // Add more translations as needed
  },
};

// Define the initial state
interface LanguageState {
  language: Language;
  translations: Record<string, string>;
}

const initialState: LanguageState = {
  language: "en",
  translations: translationData.en,
};

// Create the language slice
const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
      state.translations = translationData[action.payload];

      // Update html lang attribute
      if (typeof document !== "undefined") {
        document.documentElement.lang = action.payload;
      }

      // Save to localStorage
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("language", action.payload);
      }
    },
    initializeLanguage: (state) => {
      // Load saved language preference from localStorage
      if (typeof localStorage !== "undefined") {
        const savedLanguage = localStorage.getItem("language") as Language;
        if (
          savedLanguage &&
          (savedLanguage === "en" || savedLanguage === "zh")
        ) {
          state.language = savedLanguage;
          state.translations = translationData[savedLanguage];

          // Update html lang attribute
          document.documentElement.lang = savedLanguage;
        }
      }
    },
  },
});

// Export actions and reducer
export const { setLanguage, initializeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
