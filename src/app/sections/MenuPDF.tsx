"use client";

import SectionTitle from "../components/SectionTitle";
import MenuCard from "../components/MenuCard";
import { menuLinks } from "../../../lib/menuLinks";
import "../styles/menuPDF.css";

export default function MenuPDF() {
  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Menu" subtitle="Check Out Our Menu" />

        <div className="row" data-aos="fade-up" data-aos-delay="200">
          {menuLinks.map((link) => (
            <div
              className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center"
              key={link.id}
            >
              <MenuCard name={link.name} url={link.url} />
            </div>
          ))}
        </div>

        {/* download PDF */}
        <div className="pdf">
          <a href="/PapayayaMenu.pdf" download>
            <button className="bi bi-download"> Download the Menu </button>
          </a>
        </div>
      </div>
    </section>
  );
}
