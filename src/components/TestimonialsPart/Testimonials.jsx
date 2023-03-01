import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { MyButton } from "../../styles/ButtonStyle";

//Style Import
import "../../styles/testimonials.scss";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
//Data import
import { data } from "./data";
import TestimonialsCards from "./TestimonialsCards";

const Testimonials = () => {
  const swiper = useSwiper();
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      onClick={() => swiper.slideNext()}
    >
      {data.map((element, idx) => {
        return (
          <SwiperSlide key={idx}>
            <TestimonialsCards element={element} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonials;
