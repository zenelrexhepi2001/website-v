import React from 'react';


const ApiCollectionCard = ({title,content,subTitle,titleContent,imgUrl,titleTwo,contentTwo}) => (
    <article className="api-card">
        <div className="api-card-body">
        <div className="api-card-image">
            <img src={imgUrl}/>
        </div>
            <div className="api-card-description">
             <div className="api-card-titles-bottom">
                 <p>{subTitle}</p>
                 <h2>{titleContent}</h2>
             </div>
                <h1>{title}</h1>
                <h1>{titleTwo}</h1>
                <p>{contentTwo}</p>
                <p>{content}</p>
            </div>
        </div>
    </article>
)

export default  ApiCollectionCard;