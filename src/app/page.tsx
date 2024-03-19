import About from "./sections/About";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import Menu from "./sections/Menu";
import Events from "./sections/Events";
import BookAtable from "./sections/BookAtable";
import Testimonials from "./sections/Testimonials";
// import Booking from "./sections/Booking";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Events />
        {/* <Booking /> */}
        <BookAtable />
        <Testimonials />
      </main>
    </>
  );
}
