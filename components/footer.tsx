import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { GitHubIcon } from "./icons/github";
import { LinkedinIcon } from "./icons/linkdedin";

const footerLink = [
  {
    title: "Projects",
    links: [
      { title: "Project 1", href: "#" },
      { title: "Project 2", href: "#" },
      { title: "Project 3", href: "#" },
    ],
  },

  {
    title: "Skills",
    links: [
      { title: "Skill 1", href: "#" },
      { title: "Skill 2", href: "#" },
      { title: "Skill 3", href: "#" },
    ],
  },

  {
    title: "Contact",
    links: [
      { title: "Contact 1", href: "#" },
      { title: "Contact 2", href: "#" },
      { title: "Contact 3", href: "#" },
    ],
  },

  {
    title: "Tech Stack",
    links: [
      { title: "Tech 1", href: "#" },
      { title: "Tech 2", href: "#" },
      { title: "Tech 3", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-transparent-white py-[5.6rem] mt-12 text-sm ">
    <Container className="flex flex-col justify-between md:flex-row">
      <div>
        <div className="flex flex-row justify-between h-full lg:flex-col">
          <div className="flex items-center text-grey hover:text-off-white transition-colors text-md">
            <Logo />
            <p className="ml-3">JASS - Frontend Developer</p>
          </div>
          <div className="mt-auto flex gap-4">
            <GitHubIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLink.map((column) => (
          <div className="min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0">
            <h3 className="font-medium mb-3">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li className="[&_a]:last:mb-0">
                  <Link
                    className="text-grey mb-3 block hover:text-off-white transition-colors"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
