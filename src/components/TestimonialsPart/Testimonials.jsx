import React from "react";
//Style Import
import "../../styles/testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="content">
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
        </div>
        <div className="right-part-picture">
          <img
            src="https://c.tadst.com/gfx/750x500/authors-day-fun.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
