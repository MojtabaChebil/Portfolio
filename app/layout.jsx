import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "font-jetBrainsMono",
});

export const metadata = {
  title: {
    default: "Mojtaba Chebil – Full-Stack Developer",
    template: "%s | Mojtaba Chebil",
  },
  description:
    "Full-stack developer (React/Next.js, Node.js, Spring Boot) and M.Sc. Computer Science student at Ostfalia. Open to Werkstudent and full-time roles in Germany.",
  openGraph: {
    title: "Mojtaba Chebil – Full-Stack Developer",
    description:
      "Full-stack developer (React/Next.js, Node.js, Spring Boot). Open to Werkstudent and full-time roles in Germany.",
    images: ["/assets/mojtaba.png"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
