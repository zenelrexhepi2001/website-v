import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as More} from "../../assets/images/more.svg.svg";
import ResponseImage from "../../assets/images/api.png";


const SupportSectionItem = ({data}) => (
    <article className="card__section-child">
        <div className="card__section-body">
            <div className="card__section-description">
                <div className="card__section-subtitles">
                    <h3>{data.title}</h3>
                    <h1>{data.subTitle}</h1>
                </div>
                <h1 className="card__section-title">
                    {data.titleArticle}
                </h1>
                <div className="mb-28" >
                    {data.contentShort}
                </div>
                <p className="card__section-content">
                    {data.description}
                </p>
                <Link to='/' className="card__section-link">{data.linkUrl}<More/></Link>
            </div>
            <div className="card__section-image">
                <img alt="card-image" src={data.imageUrl}/>
            </div>
        </div>
    </article>
)

export default  SupportSectionItem;