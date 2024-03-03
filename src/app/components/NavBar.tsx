import "../styles/navBar.css";
import { navs } from "../data/data";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [navList, setNavList] = useState(navs);
  const [open, setOpen] = useState(false);

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
