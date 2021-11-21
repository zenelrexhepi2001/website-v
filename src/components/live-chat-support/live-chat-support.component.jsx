import React, { useEffect, useState } from "react";
import { DataLivechatsupport } from "./live-chat-support.data";
import CoustumButton from "../coustum-buttons/coustum-button.component";
import ItSupportImage from "../../assets/images/IT Support_Monochromatic.svg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const LiveChatSupportPage = () => {
  const [clickedAccordion, setClickedAccordion] = useState(false);

  useEffect(() => {
    document.title = `Voltox Live chat support`;
  });

  const AccordionToggle = (index) => {
    if (clickedAccordion === index) {
      return setClickedAccordion(null);
    }
    setClickedAccordion(index);
  };

  return (
    <div className="faq-support">
      <div className="container">
        <div className="faq-support-titles">
          <h3>Read more</h3>
          <h1>Live chat support</h1>
        </div>
        <div className="live-chat-support-titles">
          <h1>You must be signed in</h1>
          <p>
            If you are not signed in, please do, so you can live chat with our
            advisors and we know who we're talking to!
          </p>
        </div>
        <div className="live-chat-support-elements">
          <div className="live-chat-support-dropdowns">
            {DataLivechatsupport.map((data, index) => (
              <div
                className="live-chat-dropdown"
                onClick={() => AccordionToggle(index)}
                key={index}
              >
                <div className="live-chat-flex-item">
                  <h1>{data.title}</h1>
                  <CoustumButton type="button" className="btn btn-light">
                    {clickedAccordion === index ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </CoustumButton>
                </div>
                <div className="live-chat-support-dropdown">
                  {clickedAccordion === index ? (
                    <p>{data.description}</p>
                  ) : null}
                </div>
              </div>
            ))}

            <CoustumButton type="button" className="btn btn-primary">
              Request
            </CoustumButton>
          </div>
          <div className="live-chat-support-image">
            <img alt="it-support" src={ItSupportImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatSupportPage;
