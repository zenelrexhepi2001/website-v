import React from 'react';
import CoustumButton from "../coustum-buttons/coustum-button.component";


const LiveChatSupportItem = ({getdataLiveSupport}) => (
    <div className="live-chat-dropdown">
        <div className="live-chat-flex-item">
            <h1>{getdataLiveSupport.title}</h1>
            <CoustumButton type="button">
                <span className="mdi mdi-chevron-down"/>
            </CoustumButton>
        </div>
    </div>
)

export default  LiveChatSupportItem;