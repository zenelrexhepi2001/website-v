import React from 'react';
import CoustumButton from "../coustum-buttons/coustum-button.component";
import LiveChatSupportItem from "../live-chat-support-items/live-chat-support-item.component";
import ItSupportImage from '../../assets/images/IT Support_Monochromatic.svg';


class liveChatSupportPage extends React.Component {
    constructor() {
        super();

        this.state = {
            LiveChatdata: [
                {
                    id: 1,
                    title: 'Select the Topic',
                },
                {
                    id: 2,
                    title: 'Select the issue',
                },
                {
                    id: 3,
                    title: 'Select the support type',
                }
            ]
        }
    }
    componentDidMount() {
        document.title = `Voltox Live chat support`
    }
    render() {
        return(
            <div className="faq-support">
                <div className="container">
                    <div className="faq-support-titles">
                        <h3>Read more</h3>
                        <h1>Article Support</h1>
                    </div>
                        <div className="live-chat-support-titles">
                            <h1>You must be signed in</h1>
                            <p>If you are not signed in, please do, so you can live chat with
                                our advisors and we know who we're talking to!</p>
                        </div>
                    <div className="live-chat-support-elements">
                        <div className="live-chat-support-dropdowns">
                            {
                                this.state.LiveChatdata.map((getdataLiveSupport) => (
                                    <LiveChatSupportItem key={getdataLiveSupport.id} getdataLiveSupport={getdataLiveSupport}/>
                                ))
                            }
                            <CoustumButton type="button" className="btn btn-primary">Request</CoustumButton>
                        </div>
                        <div className="live-chat-support-image">
                            <img alt="it-support" src={ItSupportImage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  liveChatSupportPage;