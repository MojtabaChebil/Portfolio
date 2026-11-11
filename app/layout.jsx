import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "font-jetBrainsMono",
});

export function generateMetadata() {
  const lang = getLang();
  const { meta } = getDictionary(lang);
  return {
    metadataBase: new URL("https://mojtabachebil.vercel.app/"),
    title: {
      default: meta.title,
      template: "%s | Mojtaba Chebil",
    },
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      images: ["/assets/mojtaba.png"],
      type: "website",
      locale: lang === "de" ? "de_DE" : "en_US",
    },
  };
}

export default function RootLayout({ children }) {
  const lang = getLang();
  return (
    <html lang={lang}>
      <body className={jetBrainsMono.variable}>
        <LanguageProvider initialLang={lang}>
          <Header />
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
