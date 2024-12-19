"use client";

import React from "react";

import NAV_LINKS from "@/constants/NavLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userId = 1;
  return (
    <>
      {NAV_LINKS.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `/profile/${userId}`;
          else return null;
        }

        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900",
                "flex items-center justify-start gap-4 bg-transparent p-4",
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={cn({ "invert-colors": !isActive })}
              />
              <p
                className={cn(
                  isActive ? "base-bold" : "base-medium",
                  !isMobileNav && "max-lg:hidden",
                )}
              >
                {item.label}
              </p>
            </Link>
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                isActive
                  ? "primary-gradient rounded-lg text-light-900 max-lg:w-fit"
                  : "text-dark300_light900",
                "flex items-center justify-start gap-4 bg-transparent p-4",
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={cn({ "invert-colors": !isActive })}
              />
              <p
                className={cn(
                  isActive ? "base-bold" : "base-medium",
                  !isMobileNav && "max-lg:hidden",
                )}
              >
                {item.label}
              </p>
            </Link>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
