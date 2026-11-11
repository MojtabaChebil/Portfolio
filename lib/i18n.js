import { cookies, headers } from "next/headers";
import { LANGS, DEFAULT_LANG, LANG_COOKIE } from "./dictionaries";

export function getLang() {
  const fromCookie = cookies().get(LANG_COOKIE)?.value;
  if (LANGS.includes(fromCookie)) return fromCookie;

  const acceptLanguage = headers().get("accept-language") || "";
  return acceptLanguage.toLowerCase().startsWith("de") ? "de" : DEFAULT_LANG;
}
