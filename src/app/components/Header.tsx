"use client";

import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
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
  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${scroll > 100 ? "header-scrolled" : undefined}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">Papayaya</a>
        </h1>
        {/* insert image logo */}
        {/* <a href="/"><img src="assets/img/logo.png" alt="" className="img-fluid" />
                {/* </a> */}
      </div>
    </header>
  );
}
