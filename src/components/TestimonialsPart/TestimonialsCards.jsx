import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { MyButton } from "../../styles/ButtonStyle";

//Style Import
import "../../styles/testimonials.scss";

const TestimonialsCards = ({ element }) => {
  //Destructin
  const { imgUrl, description, author } = element;

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
            <div className="description">{description}</div>
          </div>
          <div className="author">-{author}</div>
          <MyButton className="testimonials-button" type="button">
            Read More
          </MyButton>
        </div>
        <div className="right-part-picture">
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCards;
