import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { MyButton } from "../../styles/ButtonStyle";
//Style Import
import "../../styles/testimonials.scss";

//Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  const { setOpen } = useContext(AuthContext);

  return (
    <div className="testimonials-container" onClick={() => setOpen(false)}>
      <div className="content ">
        <div className="left-part">
          <h1 className="title">What people say</h1>
          <div className="tirnak-isareti">
            <img
              src="https://imgrosetta.mynet.com.tr/file/14683261/14683261-728xauto.jpg"
              alt=""
            />
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              delectus rem sapiente officiis excepturi itaque quia dolorem
              commodi maiores quibusdam hic, ut a atque ex dicta suscipit quod
              modi necessitatibus!
            </div>
          </div>
          <div className="author">-Kale, SkyNet</div>
          <MyButton className="testimonials-button" type="button">
            Read More
          </MyButton>
        </div>
        <div className="right-part-picture">
          <img
            src="https://assets.contenthub.wolterskluwer.com/api/public/content/ce98168dc425442682983e286b4c2096"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
