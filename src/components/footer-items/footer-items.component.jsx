import React from 'react';
import {Link} from "react-router-dom";


const FooterItems = ({getDataFooter}) => (
    <div className="footer__items">
        <Link to='/' className="link-parent"><strong>{getDataFooter.title}</strong></Link>
        <div className="footer__items-child">
        <Link to='/'>{getDataFooter.linkOne}</Link>
        <Link to='/'>{getDataFooter.linkTwo}</Link>
        <Link to='/'>{getDataFooter.linkThree}</Link>
        <Link to='/'>{getDataFooter.linkFour}</Link>
        <Link to='/'>{getDataFooter.linkFive}</Link>
        </div>
    </div>
)

export default  FooterItems;