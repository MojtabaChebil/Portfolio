// Server-side helper: which language should this request be rendered in?
// 1. the "lang" cookie (set by the EN | DE switcher or by ?lang=de)
// 2. otherwise the browser language (German browser -> German site)
// 3. otherwise English
import { cookies, headers } from "next/headers";
import { LANGS, DEFAULT_LANG, LANG_COOKIE } from "./dictionaries";

export function getLang() {
  const fromCookie = cookies().get(LANG_COOKIE)?.value;
  if (LANGS.includes(fromCookie)) return fromCookie;

  const acceptLanguage = headers().get("accept-language") || "";
  return acceptLanguage.toLowerCase().startsWith("de") ? "de" : DEFAULT_LANG;
}
