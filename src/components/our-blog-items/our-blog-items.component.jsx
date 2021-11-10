import React from 'react';
import {Link,withRouter} from "react-router-dom";

const OurblogItems = ({datePublishedArticle,title,content,imageUrl}) => (
    <article className="card__blog">
        <Link to='/'>
        <div className="card__blog-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        </Link>
        <div className="card__blog-description">
            <h1>{datePublishedArticle}</h1>
            <Link to='/' className="card__blog-link"><strong>{title}</strong></Link>
            <p>
                {content}
            </p>
        </div>
    </article>
)

export default  withRouter(OurblogItems);