import "../styles/about.css";
import aboutImage from "../../../public/assets/images/Papayaya_interior.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-oas="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-oas="zoom-in"
            data-oas-delay="100"
          >
            <div className="about-img">
              <Image src={aboutImage} alt="restaurant setting" />
            </div>
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>
              All our food ingredients are uniquely sourced from Malaysia,
              Thailand and other parts of South East Asia.
            </h3>
            <p className="fst-italic">
              The exotic flavours will lighten up any palate, accompanied by
              fine wine or an Asian beer makes this the best place to eat in
              Bromley Town.
            </p>

            <ul>
              <li>
                <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </li>
            </ul>

            <p>This is Papayaya.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
