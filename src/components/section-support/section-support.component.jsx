import React from 'react';
import {sectionSupportData} from "./data-section-support";
import {Link} from 'react-router-dom';
import SupportSectionItem from "../support-section-item/support-section-item.component";



class  SectionSupport extends React.Component {

     constructor(props) {
         super(props);

         this.state = {

         }
     }

    render() {

        return (
            <>
                <div className="container">
                    <div className="card__section">
                        {
                            sectionSupportData.map((data,idx) => (
                                <SupportSectionItem key={idx} data={data}/>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }

}

export default SectionSupport;