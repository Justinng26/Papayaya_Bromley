'use client'

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import "../styles/testimonials.css";


export default function Testimonials() {
    const [slides, setSlides] = useState([]);

    const getTestimonialData = () => {
        fetch('http://localhost:3000/api/testimonials')
            .then((response) => response.json())
            .then((data) => setSlides(data))
            .catch(e => console.log(e.message));
    }

    useEffect(() => {
        getTestimonialData();
    }, []);

  return (
    
  );
}
