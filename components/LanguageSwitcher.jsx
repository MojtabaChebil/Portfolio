"use client";

import { useLang } from "./LanguageProvider";
import { LANGS } from "@/lib/dictionaries";

const LanguageSwitcher = ({ className = "" }) => {
  const { lang, setLang } = useLang();

  return (
    <div className={`flex items-center gap-1 font-medium ${className}`} role="group" aria-label="Language">
      {LANGS.map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && <span className="text-white/30">|</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`uppercase px-1 transition-all ${
              lang === code ? "text-accent" : "text-white/60 hover:text-accent"
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
