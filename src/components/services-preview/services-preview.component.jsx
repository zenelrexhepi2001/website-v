import React from 'react';
import ServicesCard from "../services-card/services-card.component";

const ServicesPreview = ({getServicesData}) => (
    <div className="services-preview">
        {
            getServicesData.filter((itemData,index) => index < Infinity)
                .map((servicesDataProp) => (
                    <ServicesCard key={servicesDataProp.id} servicesDataProp={servicesDataProp}/>
                ))
        }
    </div>
)

export default  ServicesPreview;