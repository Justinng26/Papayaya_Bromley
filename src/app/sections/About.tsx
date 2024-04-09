import "../styles/about.css";
import aboutImage from "../../../public/assets/images/Papayaya_about.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-oas="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-oas="zoom-in"
            data-aos-delay="100"
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
                <i className="bi bi-check-circle"></i> Book your parties,
                birthdays or events with us. We have a private room for hire.
                Head to the Contact page to get in touch.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Vegetarian and Vegan
                friendly (we have a separate menu for this)
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Our chicken dishes are
                Halal.
              </li>
            </ul>

            <p>This is Papayaya.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
