import React from "react";
import { MyButton } from "../../styles/ButtonStyle";
//Style Import
import "../../styles/testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
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
