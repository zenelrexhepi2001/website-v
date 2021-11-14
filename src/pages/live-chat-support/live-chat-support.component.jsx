import React, {useEffect} from 'react';
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import LiveChatSupportPage from '../../components/live-chat-support/live-chat-support.component';

const liveChatSupport = () => {
    return(
    <>
        <Header/>
         <LiveChatSupportPage/>
        <Footer/>
    </>
    )
}

export default  liveChatSupport;