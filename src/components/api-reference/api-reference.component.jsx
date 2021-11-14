import React from 'react';


const Apireference = ({dataSecProp}) => (
    <article className="api-reference-card">
        <div className="api-reference-card-body">
           <h1>{dataSecProp.title}</h1>
            <p>{dataSecProp.desc}</p>
        </div>
    </article>
)

export default  Apireference;