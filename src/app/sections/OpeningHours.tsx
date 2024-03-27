import openingHours from "../../../public/assets/images/opening_hours.png";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import "../styles/openingHours.css";

export default function OpeningHours() {
  return (
    <section id="opening-hours" className="opening-hours">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Opening Hours"
          subtitle="We are open 6 days a week"
        />
        <div className="opening-hours-img">
          <Image
            // height={500}
            // width={600}
            src={openingHours}
            alt="Opening Hours Image"
          />
        </div>
      </div>
    </section>
  );
}
