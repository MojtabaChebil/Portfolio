"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./navLinks";

const isActive = (path, pathname) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center" aria-label="Open menu">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="mt-32 mb-40 text-center text-2xl">
          {/* SheetClose: ysakker el menu ki tcliki */}
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
                  {link.name}
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
