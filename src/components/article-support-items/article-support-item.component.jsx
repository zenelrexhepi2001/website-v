import React from 'react';
import CoustumButton from "../coustum-buttons/coustum-button.component";
import {Link} from "react-router-dom";


const ArticleSupportItem = ({title,content}) => (
    <article className="accordion-support-item">
        <div className="accordion-support-body">
            <div className="accordion-support-button-alert">
                <CoustumButton type="button">
                    <span className="mdi mdi-alert-circle-outline"/>
                </CoustumButton>
            </div>
            <div className="accordion-support-description">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <Link to='/'>
                <span className="mdi mdi-chevron-right"></span>
            </Link>
        </div>
    </article>
)

export default  ArticleSupportItem;