import React from 'react';
import {Link} from "react-router-dom";

const BlogItemsCard = ({imageUrl,date,title,content}) => (
    <article className="card-blog-child">
        <div className="card-blog-image">
            <Link to='/'>
            <img alt="card-blog-img" src={imageUrl}/>
            </Link>
        </div>
        <div className="card-blog-content">
            <h3>{date}</h3>
            <Link to='/'>{title}</Link>
            <p>
                {content}
            </p>
        </div>
    </article>
)

export default  BlogItemsCard;