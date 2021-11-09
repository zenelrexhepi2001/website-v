import React, { useEffect, useState } from "react";
import CoustumButton from "../coustum-buttons/coustum-button.component";
import { ReactComponent as ScrollLogo } from "../../assets/images/scroll.svg";

const ScrollButton = () => {
    const [scroll,setScroll] = useState(0);

    useEffect(() => {
        console.log(scroll);
    },[setScroll]);

  const handleScroll = (e) => {
    e.preventDefault();
    console.log(e);
   // alert(e);
  };
  return (
    <div className="scroll-down">
      <CoustumButton
        type="button"
        className="btn btn-light"
        onClick={handleScroll}
      >
        <ScrollLogo />
      </CoustumButton>
    </div>
  );
};

export default ScrollButton;
