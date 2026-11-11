"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./navLinks";
import { useLang } from "./LanguageProvider";

const isActive = (path, pathname) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

const MobileNav = () => {
  const pathname = usePathname();
  const { t } = useLang();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center" aria-label={t.header.openMenu}>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">{t.header.navigation}</SheetTitle>
        <div className="mt-32 mb-40 text-center text-2xl">
       
          <SheetClose asChild>
            <Link href="/">
              <span className="text-4xl font-semibold">
                Mojtaba<span className="text-accent">.</span>
              </span>
            </Link>
          </SheetClose>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`${
                    isActive(link.path, pathname) ? "text-accent border-b-2 border-accent" : ""
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {t.nav[link.key]}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
