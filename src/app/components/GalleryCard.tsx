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
    Glightbox({
      selector: ".gallery-lightbox",
    });
  }, []);
  return (
    <div className="col-lg-3 col-md-4">
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
