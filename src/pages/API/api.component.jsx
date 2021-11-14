import React from 'react';
import API_DATA from "./api-data";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import ApiPreview from "../../components/api-preview/api-preview.component";
import Apireference from "../../components/api-reference/api-reference.component";


class Api extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionApi: API_DATA,
            dataSection: [
                {
                    title: 'Introduction to APIs',
                    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren',
                    id: 1,
                },
                {
                    title: 'Just getting started?',
                    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren',
                    id: 2,
                },
                {
                    title: 'Not a developer?',
                    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren',
                    id: 3,
                }
            ]
        }
    }

    componentDidMount() {
        document.title = 'Voltox Developers'
    }

    render() {
        const {sectionApi} = this.state;
        return(
            <>
                <Header/>
                <div className="container">
                    <div className="api-preview-titles">
                        <h1>Introduction</h1>
                        <h2>API reference</h2>
                    </div>
                <div className="introduction">

                    {
                        this.state.dataSection.map((dataSecProp) => (
                            <Apireference key={dataSecProp.id} dataSecProp={dataSecProp}/>
                        ))
                    }
                </div>

                {
                    sectionApi.map(({id,...othersectionProp}) => (
                        <ApiPreview key={id} {...othersectionProp}/>
                    ))
                }
                </div>
                <Footer/>
            </>
        )
    }
}

export default  Api;