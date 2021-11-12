import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import  {DataAccordion} from './faq-support-data';
import PictureWoman from '../../assets/images/picture.svg';
import AccordionItems from "../accordion-items/accordion-items.component";
import CoustumButton from "../coustum-buttons/coustum-button.component";
import OpenAccordion from "../../assets/images/open.svg";
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus} from 'react-icons/fi';
import ArrowRight from '../../assets/images/Arrow-right.svg';
import Footer from "../footer/footer.component";



const FaqSupportItems = () => {

    const [clicked,setClicked] = useState(false);

    const ToggleAccordion = (index) => {
        if(clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }

        return (
            <div className="faq-support">
                <div className="container">
                    <div className="faq-support-titles">
                        <h3>Learn more</h3>
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className="faq-support-parent">
                        <div className="accordion">
                            {
                                DataAccordion.map((item,index) => {
                                    return(
                                        <div className="accordion-item">
                                            <div className="accordion-elements"  onClick={() => ToggleAccordion(index)} key={index}>
                                                <h1 className="accordion-title">{item.title}</h1>
                                                <span>{clicked === index ? <FiMinus style={{fontSize: '25px'}} /> : <FiPlus style={{fontSize: '25px'}}  />}</span>
                                            </div>
                                            <div className="accordion-body">
                                            {clicked === index ? (
                                                <>
                                                    <p>{item.content}</p>
                                                </>
                                            ) : null}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="faq-support-picture">
                            <img src={PictureWoman} alt="picture"/>
                        </div>
                    </div>
                    <div className="footer-faq-support">
                        <h1>Still have a question?</h1>
                        <p>
                            If you cannot find your answer in our FAQ, you can always contact us.<br/>
                            We will answer to you shortly!
                        </p>
                        <Link to='/'>
                            Contact Support
                        </Link>
                    </div>
                </div>
                <Footer/>
            </div>
        )
}



export default  FaqSupportItems;