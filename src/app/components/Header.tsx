"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "../styles/header.css";
import AppBtn from "./AppBtn";
import NavBar from "./NavBar";

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
          <a href="/">
            <Image
              src="/assets/images/Papayaya_logo.jpg"
              alt="restaurant logo"
              width={40}
              height={40}
            />
          </a>
        </h1>
        <NavBar />
        <AppBtn name="order online" />
      </div>
    </header>
  );
}
{
  /* style="width: 170px; height: 170px; border-radius: 22%; overflow: hidden; display: inline-block; vertical-align: middle;"> */
}
