"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "../styles/header.css";
import AppBtn from "./AppBtn";
// import NavBar from "./NavBar";
import dynamic from "next/dynamic";

const DynamicNavBar = dynamic(() => import("./NavBar"), {
  ssr: false,
});

export default function Header() {
  const [scroll, setScroll] = useState(0);

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
    if (typeof window !== "undefined") {
      // Check if running on client-side }
      const handleScroll = () => {
        setScroll(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
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
        <DynamicNavBar />
        <AppBtn name="order online" />
      </div>
    </header>
  );
}
