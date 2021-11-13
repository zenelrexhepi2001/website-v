import React from 'react';


const ServicesCard = ({servicesDataProp}) => (
    <article className="card-services">
        <div className={`${servicesDataProp.rowR} card-services-body`}>
            <div className="card-services-description">
                <h1>{servicesDataProp.title}</h1>
                <p>{servicesDataProp.content}</p>
            </div>
            <div>
                <img alt="image-card-services" src={servicesDataProp.img}/>
            </div>
        </div>
    </article>
)

export default  ServicesCard;