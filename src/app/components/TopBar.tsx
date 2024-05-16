"use client";

import { useEffect, useState } from "react";
import "../styles/topBar.css";

export default function TopBar() {
  const [scroll, setScroll] = useState(0);

  // this useEffect is for the scroll event. It will update the state of scroll by the window.scrollY. When the component is unmounted, it will remove the event listener because of the return function.
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

  return (
    <div
      id="topbar"
      className={`fixed-top d-flex align-items-center ${scroll > 100 ? "topbar-scrolled" : undefined}`}
    >
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center">
            <span> 0208 466 8886</span>
          </i>

          <i className="bi bi-clock d-flex align-items-center ms-4">
            <span> Tue-Sun: 11:30AM-22:00PM </span>
          </i>
        </div>
      </div>
    </div>
  );
}
