import React from 'react';
import ApiCollectionCard from '../api-collection/api-collection.component';

const ApiPreview = ({DataApi}) => (

        <div className="api-preview-flex">
            {
                DataApi.filter((itemApi,idx) => idx < Infinity)
                    .map(({id,...otherPreviewProp}) => (
                          <ApiCollectionCard key={id} {...otherPreviewProp}/>
                    ))
            }
        </div>
)

export default  ApiPreview;