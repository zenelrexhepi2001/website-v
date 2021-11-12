import React from 'react';
import AccordionButton from "../accordion-button/accordion-button.component";
import CoustumButton from "../coustum-buttons/coustum-button.component";
import OpenAccordion from "../../assets/images/open.svg";


const AccordionItems = ({item}) => (
    <div className="accordion-item">

        <div className="accordion-body">
            <p>{item.content}</p>
        </div>
    </div>
)

export default  AccordionItems;