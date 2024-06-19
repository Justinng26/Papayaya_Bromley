import About from "./sections/About";
import MenuPDF from "./sections/MenuPDF";
import OpeningHours from "./sections/OpeningHours";
import Contact from "./sections/Contact";
import Booking from "./sections/Booking";
import GalleryNew from "./sections/GalleryNew";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("./sections/Hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <DynamicHero />
      <main id="main">
        <About />
        {/* <Menu /> */}
        {/* <Menu /> */}
        <MenuPDF />
        <GalleryNew />

        <Booking />
        <OpeningHours />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
}
