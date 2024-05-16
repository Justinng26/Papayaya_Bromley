"use client";

import "../styles/navBar.css";
import { navs } from "../data/data";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { handleScrollTo } from "../lib/utils";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [navList, setNavList] = useState(navs);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if running on client-side}
      const handleScroll = () => {
        setScroll(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", () => {
  //       setScroll(window.scrollY);
  //     });
  //   };
  // }, [scroll]);

  useEffect(() => {
    const handleNavActive = () => {
      const position = scroll + 200;
      // nav add and remove active class
      setNavList(
        navList.map((nav) => {
          nav.active = false;
          const targetSection: HTMLElement = document.querySelector(
            "#" + nav.target
          )!;

          if (
            targetSection &&
            position >= targetSection.offsetTop &&
            position <= targetSection.offsetTop + targetSection.offsetHeight
          ) {
            nav.active = true;
          }
          return nav;
        })
      );
    };

    handleNavActive();
  }, [scroll]);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${open ? "navbar-mobile" : undefined}`}
    >
      <ul>
        {navList.map((nav) => (
          <li key={nav.id}>
            <a
              className={`nav-link scrollto ${
                nav.active ? "active" : undefined
              }`}
              onClick={() => handleScrollTo(nav.target, pathname, router)}
            >
              {nav.name === "Home" ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))}
      </ul>

      <i
        className="bi bi-list mobile-nav-toggle"
        onClick={handleToggleMenu}
      ></i>
    </nav>
  );
}
