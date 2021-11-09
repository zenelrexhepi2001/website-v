import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imagedivider from "../../assets/images/computersc.png";
import ScrollButton from "../scroll-button/scroll-button.component";

const HomepageSection = () => {
  useEffect(() => {
    document.title = `Voltox Homepage`;
  });

  return (
    <div className="hero">
      <div className="container">
        <div className="divider">
          <div className="divider__description">
            <h1>
              Quick login
              <br />
              using your
              <br />
              face
            </h1>
            <p>
              Login by using our modern face recognition technology instead of
              taking the time to write down all of your credentials time after
              time.
            </p>
            <Link to='/'>Vist our web</Link>
          </div>
          <div className="divider__image">
              <img alt="divider-image" src={imagedivider}/>
          </div>
        </div>
      </div>
      <ScrollButton/>
    </div>
  );
};

export default HomepageSection;
