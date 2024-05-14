import About from "./sections/About";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Testimonials from "./sections/Testimonials";
import Gallery from "./sections/Gallery";
import OpeningHours from "./sections/OpeningHours";
import Contact from "./sections/Contact";

import Booking from "./sections/Booking";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Menu />
        <Gallery />
        <Booking />
        <OpeningHours />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
