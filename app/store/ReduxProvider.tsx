"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { initializeLanguage } from "./slices/languageSlice";
import { ReactNode } from "react";

export function ReduxProvider({ children }: { children: ReactNode }) {
  // Initialize language from localStorage on client-side
  useEffect(() => {
    store.dispatch(initializeLanguage());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
