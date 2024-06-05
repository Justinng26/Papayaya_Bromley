import About from "./sections/About";
// import Hero from "./sections/Hero";
// import Menu from "./sections/Menu";
// import Testimonials from "./sections/Testimonials";
// import Gallery from "./sections/Gallery";
import OpeningHours from "./sections/OpeningHours";
import Contact from "./sections/Contact";
import Booking from "./sections/Booking";
import GalleryNew from "./sections/GalleryNew";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("./sections/Hero"), {
  ssr: false,
});

export default function Home() {
  // if (!BASE_API_URL) {
  //   return null;
  // }
  return (
    <>
      <DynamicHero />
      <main id="main">
        <About />
        {/* <Menu /> */}
        <GalleryNew />
        {/* <Gallery /> */}
        <Booking />
        <OpeningHours />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
}
