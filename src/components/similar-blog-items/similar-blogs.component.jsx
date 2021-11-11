import React from 'react';
import {Link} from "react-router-dom";

const SimilarBlog = ({getData}) => (
    <article className="card-blog-child">
        <div className="card-blog-image">
            <Link to='/'>
                <img alt="card-blog-img" src={getData.imageUrl}/>
            </Link>
        </div>
        <div className="card-blog-content">
            <h3>{getData.date}</h3>
            <Link to='/'>{getData.title}</Link>
            <p>
                {getData.content}
            </p>
        </div>
    </article>
)

export default  SimilarBlog;