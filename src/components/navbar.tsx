import React, { useState, useEffect } from "react";
import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { DiscordIcon, InstagramIcon } from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isBordered, setIsBordered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY > 10;
      setIsBlurred(scrollPosition);
      setIsBordered(scrollPosition); // Apply border instantly
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NextUINavbar
      isBordered={isBordered}
      isBlurred={isBlurred}
      className={clsx("bg-transparent z-50 top-0 transition duration-300", {
        "backdrop-blur-md transition-[backdrop-filter] duration-500 ease-in-out":
          isBlurred,
        "border-b border-default-400 ": isBordered,
      })}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo className="translate-y-0.5" />
            <p className="font-bold text-inherit">Gaming UP</p>
          </Link>
        </NavbarBrand>
        <div className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.instagram}>
            <InstagramIcon className="text-default-600" />
          </Link>
          <Link isExternal href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-600" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden md:flex"></NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.instagram}>
          <InstagramIcon className="text-default-600" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
