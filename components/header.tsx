"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./container";
import { Button } from "./button";
import { Logo } from "./icons/logo";
import { HamburgerIcon } from "./icons/hamburger";
import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
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
            // classNames dynamicaly add the visible class
            className={classNames(
              "h-[calc(100vh_-_var(--navigation-height))] md:block fixed top-navigation-height left-0 w-full bg-background overflow-auto md:relative md:top-0 md:h-auto md:w-auto md:bg-transparent md:opacity-100 transition-opacity duration-500",
              hamburgerMenuIsOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex flex-col md:flex-row md:items-center h-full [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "ease-in [&_a]:h-navigation-height [&_a]:flex [&_a]:items-center [&_a]:text-md [&_a:hover]:text-grey [&_a]:transition-[color, transform] md:[&_a]:text-sm [&_a]:translate-y-8 md:[&_a]:translate-y-0 [&_a]:duration-300",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
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
          <Link className="text-sm mr-6" href="">
            Lets talk
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
