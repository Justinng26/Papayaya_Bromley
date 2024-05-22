"use client";

import React, { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import Preloader from "../components/Preloader";
// import GalleryCard from "../components/GalleryCard";
import dynamic from "next/dynamic";
import { BASE_API_URL } from "../utils/constants";

const DynamicGalleryCard = dynamic(() => import("../components/GalleryCard"), {
  ssr: false,
});

export default function Gallery() {
  const [images, setImages] = useState<any | []>([]);

  const getGalleryData = () => {
    console.log(`Fetching gallery data from: ${BASE_API_URL}/api/gallery`);
    fetch(`${BASE_API_URL}/api/gallery`)
      .then((res) => res.json())

      .then((data) => setImages(data))

      .catch((e) => console.log(e.massage));
  };

  useEffect(() => {
    getGalleryData();
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Gallery"
          subtitle="Some photos from our Restaurant"
        />
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {!images ? (
            <Preloader />
          ) : images.length > 0 ? (
            images.map((image: { id: number; image: string }) => (
              <DynamicGalleryCard key={image.id} item={image} />
            ))
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
}
