"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { getDictionary, LANG_COOKIE } from "@/lib/dictionaries";

const LanguageContext = createContext(null);

export function LanguageProvider({ initialLang, children }) {
  const [lang, setLangState] = useState(initialLang);
  const router = useRouter();

  const setLang = (next) => {
    if (next === lang) return;
    document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = next;
    setLangState(next); 
    router.refresh(); 
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: getDictionary(lang) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
