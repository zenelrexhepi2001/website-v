import React, {useEffect} from 'react';
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import ContactSupportPage from "../../components/contact-support/contact-support.component";


const ContactSupport = () => {
    useEffect(() => {
        document.title = `Voltox Contact Support`
    })
    return(
        <>
            <Header/>
            <ContactSupportPage/>
            <Footer/>
        </>
    )
}

export default  ContactSupport;