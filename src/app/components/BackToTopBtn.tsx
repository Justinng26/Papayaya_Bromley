"use client";

import { useEffect, useState } from "react";
import "../styles/backToTopBtn.css";

export default function BackToTopBtn() {
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
      // Check if running on client-side
      const handleScroll = () => {
        setScroll(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scroll]);
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <a
      onClick={backToTop}
      className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? "active" : undefined}`}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}
