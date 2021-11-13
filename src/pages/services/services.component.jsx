import React from 'react';
import ServicesData from "./services-data";
import Header from "../../components/header/header.component";
import ServicesPreview from "../../components/services-preview/services-preview.component";
import Footer from "../../components/footer/footer.component";

class Services extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionData: ServicesData,
        }
    }

    componentDidMount() {
        document.title = `Voltox Services`
    }

    render() {
        const {sectionData} = this.state;
        return(
            <>
                <Header/>
            <div className="services__hero">
                <div className="container">
                <div className="services-titles">
                    <h1>See what Voltox offers</h1>
                    <h2>Services</h2>
                </div>
                    {
                        sectionData.map(({id,...othergetdataProp})=> (
                            <ServicesPreview key={id} {...othergetdataProp}/>
                        ))
                    }
                </div>
            </div>
                <Footer/>
            </>
        )
    }
}

export default  Services;