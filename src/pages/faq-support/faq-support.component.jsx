import React, {useEffect} from 'react';
import Header from "../../components/header/header.component";
import FaqSupportItems from "../../components/faq-support-items/faq-support-items.component";

const FaqSupport = () => {
    useEffect(() => {
          document.title = `Voltox FAQ Support`
    })
    return(
        <>
          <Header/>
            <FaqSupportItems/>
        </>
    )
}

export default  FaqSupport;