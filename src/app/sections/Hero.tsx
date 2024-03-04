"use client";

import { useEffect } from "react";
import Glightbox from "glightbox";
import HeroBtn from "../components/HeroBtn";
import "../styles/hero.css";

export default function Hero() {
  useEffect(() => {
    new Glightbox({
      selector: ".glightbox",
    });
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <span>Papayaya</span>
            </h1>
            <h2>A truly authentic street food experience!</h2>

            <div className="btns">
              <HeroBtn name="order online" target="menu" />
              <HeroBtn name="book a table" target="book-a-table" />
            </div>
          </div>

          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.youtube.com/watch?v=ucCNLqSbzGM"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
