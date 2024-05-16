import React, { useEffect } from "react";
import Glightbox from "glightbox";

import "../styles/galleryCard.css";
import Image from "next/image";

export default function GalleryCard({
  item,
}: {
  item: {
    id: number;
    image: string;
  };
}) {
  useEffect(() => {
    if (typeof window === "undefined") {
      Glightbox({
        selector: ".gallery-lightbox",
      });
    }
  }, []);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="gallery-item">
        <a
          href={item.image}
          className="gallery-lightbox"
          data-gall="gallery-item"
        >
          <Image
            width={500}
            height={300}
            style={{
              width: "100%",
              height: "250px",
              padding: "10px",
              opacity: "0.8",
            }}
            src={item.image}
            alt="Gallery Image"
            className="img-fluid"
          />
        </a>
      </div>
    </div>
  );
}
