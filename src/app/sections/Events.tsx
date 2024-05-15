// "use client";

// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import "../styles/events.css";
// import SectionTitle from "../components/SectionTitle";
// import EventsItem from "../components/EventsItem";

// export default function Events() {
//   const [slides, setSlides] = useState<any | []>([]);

//   // This getEventsData function will be called when the component is mounted. It will fetch the data from the server and set the slides state.
//   const getEventsData = () => {
//     fetch("http://localhost:3000/api/events")
//       .then((response) => response.json())
//       .then((data) => setSlides(data))
//       .catch((error) => console.log(error.message));
//   };

//   useEffect(() => {
//     getEventsData();
//   }, []);
//   return (
//     <section id="events" className="events">
//       <div className="container" data-aos="fade-up">
//         <SectionTitle
//           title="Events"
//           subtitle="Organize Your Events in our Restaurant"
//         />

//         <div data-aos="fade-up" data-aos-delay="100">
//           <Swiper
//             spaceBetween={0}
//             autoplay={{
//               delay: 10000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               el: ".swiper-pagination",
//               type: "bullets",
//               clickable: true,
//             }}
//             modules={[Autoplay, Pagination]}
//             loop={true}
//             className="events-slider swiper-container"
//           >
//             {slides &&
//               slides.length > 0 &&
//               slides.map(
//                 (slide: {
//                   id: number;
//                   image: string;
//                   title: string;
//                   price: number;
//                   content: string;
//                   details: string[];
//                   summary: string;
//                 }) => (
//                   <SwiperSlide key={slide.id}>
//                     <EventsItem item={slide} />
//                   </SwiperSlide>
//                 )
//               )}
//           </Swiper>
//           <div className="swiper-pagination"></div>
//         </div>
//       </div>
//     </section>
//   );
// }
