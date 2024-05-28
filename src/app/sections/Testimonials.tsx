"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "../styles/testimonials.css";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  const [slides, setSlides] = useState([]);

  const getTestimonialData = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/testimonials`)
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getTestimonialData();
  }, []);

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Testimonials"
          subtitle="What they are saying about us"
        />

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            slidesPerView={"auto"}
            speed={600}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".testimonials-swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="testimonials-slider swiper-container"
          >
            {slides &&
              slides.length > 0 &&
              slides.map(
                (slide: {
                  id: number;
                  content: string;
                  avatar: string;
                  client: string;
                  position: string;
                  rating: number;
                }) => (
                  <SwiperSlide key={slide.id}>
                    <TestimonialCard item={slide} />
                  </SwiperSlide>
                )
              )}
          </Swiper>
          <div className="testimonials-swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
