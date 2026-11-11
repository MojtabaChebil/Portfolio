// Lets you share a link that opens the portfolio directly in one language:
//   https://mojtabachebil.vercel.app/?lang=de
// The choice is stored in a cookie and the ?lang parameter is removed from the URL.
import { NextResponse } from "next/server";

export function middleware(request) {
  const lang = request.nextUrl.searchParams.get("lang");
  if (lang !== "en" && lang !== "de") return NextResponse.next();

  const url = request.nextUrl.clone();
  url.searchParams.delete("lang");
  const response = NextResponse.redirect(url);
  response.cookies.set("lang", lang, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
  return response;
}

export const config = {
  // Skip Next.js internals and static files (images, CV, videos …)
  matcher: ["/((?!_next|assets|cv|.*\\..*).*)"],
};
