import React from 'react';
import {connect} from "react-redux";
import {AccordionAction} from "../../redux/accordion/acordion-action";
import OpenAccordion from '../../assets/images/open.svg';

const AccordionButton = ({AccordionAction}) => (
    <button type="button" onClick={AccordionAction}>
        <img src={OpenAccordion}/>
    </button>
)

const Maptodispatch = dispatch =>({
    AccordionAction: () => dispatch(AccordionAction())
})

export default  connect(null,Maptodispatch)(AccordionButton);