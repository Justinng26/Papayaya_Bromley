import "../styles/navBar.css";
import { navs } from "../data/data";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [navList, setNavList] = useState(navs);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  // TO DO: handleScrollTo function and handleNavActive function
  const handleScrollTo = (section: string) => {
    const header: HTMLElement = document.querySelector("#header")!;
    const offset = header.offsetHeight;
    const targetEl: HTMLElement = document.querySelector("#" + section)!;
    if (pathname === "/") {
      const elementPosition = targetEl.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    } else {
      router.push(`/#${section}`);
    }
  };

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

  useEffect(() => {
    handleNavActive();
  }, [scroll]);

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
              onClick={() => handleScrollTo(nav.target)}
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
