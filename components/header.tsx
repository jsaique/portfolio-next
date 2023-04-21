"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./container";
import { Button } from "./button";
import { Logo } from "./icons/logo";
import { HamburgerIcon } from "./icons/hamburger";
import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  //Locking the scroll when the mobile nav is open
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  // Removing the scroll lock when changed to desktop and tablet
  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)]">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-[.5rem]" />
          JASS
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
          )}
        >
          <nav
            // classNames dynamicaly add the opacity class
            className={classNames(
              "h-[calc(100vh_-_var(--navigation-height))] md:block fixed top-navigation-height left-0 w-full bg-background overflow-auto transition-opacity duration-500 md:relative md:top-0 md:h-auto md:w-auto md:bg-transparent md:opacity-100 md:transition-none", //[md:translate-x-0]
              hamburgerMenuIsOpen
                ? //translate-x-0 prevents nav snap when resizing the screen [translate-x-0 opacity-100, translate-x-[-100vw] opacity-0]
                  "opacity-100"
                : "opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex flex-col md:flex-row md:items-center h-full [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a]:h-navigation-height [&_a]:flex [&_a]:items-center [&_a]:text-lg [&_a:hover]:text-grey [&_a]:transition-[color, transform] [&_a]:md:transition-colors md:[&_a]:text-md [&_a]:translate-y-8 md:[&_a]:translate-y-[.01rem] overflow-y-hidden [&_a]:duration-300",
                hamburgerMenuIsOpen && "[&_a]:translate-y-[.01rem]"
              )}
            >
              <li className="md:hidden lg:block">
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Skills</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center ml-auto h-full">
          <Link
            className="text-sm mr-6 hover:text-grey transition-colors ease-in"
            href=""
          >
            Hire me
          </Link>
          <Button href="cv.pdf" download="cv.pdf">
            Resume
          </Button>
        </div>

        <button
          className="ml-6 md:hidden"
          // toggles the hamburger menu
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
