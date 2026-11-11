"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./navLinks";
import { useLang } from "./LanguageProvider";

const isActive = (path, pathname) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

const Nav = () => {
  const pathname = usePathname();
  const { t } = useLang();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              isActive(link.path, pathname) ? "text-accent border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {t.nav[link.key]}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
