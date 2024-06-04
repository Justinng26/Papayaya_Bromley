"use client";

import Image from "next/image";
import SectionTitle from "../components/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { images } from "../../../lib/images";
import "../styles/galleryNew.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GalleryNew() {
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Gallery"
          subtitle="Some photos from our Restaurant"
        />

        <div className="gallery-slider" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            navigation={true}
            pagination={{ type: "fraction" }}
            modules={[Navigation, Pagination]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    // style={{
                    //   display: "block",
                    //   objectFit: "cover",
                    // }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
