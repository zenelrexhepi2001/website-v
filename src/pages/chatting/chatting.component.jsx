import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import CoustumButton from "../../components/coustum-buttons/coustum-button.component";
import Userimage from '../../assets/images/bosi.png.png';
import exitImage from '../../assets/images/Layer 2 (2).svg';


function Chat() {
     const [hidden,setHidden] = useState(false);

     const hiddenCard = () => {
          if(!hidden) return;

          setHidden(true);


     }

     useEffect(() => {
         document.title = `Voltox chatting advisor`
     })

       return(
           <div className="chat-card-parent">
          <div className="chat-card">
              <header className="chat-card-header">
                  <div className="chat-card-user">
                  <div className="chat-card-avatar">
                      <img alt="user-image-avatar" src={Userimage}/>
                  </div>
                      <div className="card-chat-user-info">
                          <h3>Shefket Robelli <span>Support advisor</span></h3>
                          <p>Online Typing...</p>
                      </div>
                  </div>
                  <CoustumButton type="button" className="btn btn-light" onClick={hiddenCard}>
                      <img alt="exit-logo" src={exitImage}/>
                  </CoustumButton>
              </header>
              <ChatClient/>

          </div>
           </div>
       )
}

function ChatClient() {
    const [clientChat,setClientChat] = useState([
        {
            description: "Hey, what's your problem?",
            id: 1,
        },
        {
            description: "I'm having trouble using\n" +
                "Voltox B2B platform.\n" +
                "I don't know how to login?",
            right: "right",
            color: 'active',
            id: 2,
        },
        {
            description: "I'm having trouble using\n" +
                "Voltox B2B platform.\n" +
                "I don't know how to login?",
            right: "right",
            id: 3,
            color: 'active',
        }
    ])
    const sendMsg = (description) => {
        setTimeout(() => {
            console.log('you send succesfully message...');
        },100);

          const sendMessage = [...clientChat,{description}];
          setClientChat(sendMessage);

          const hour = new Date().getHours();
          const sec = new Date().getSeconds();

          console.log(hour);

          console.warn(sec);

    }
      return(
          <div  className="chat-card-chatting">
              {
                  clientChat.map((dataClientChat,index) => (
                      <ChatCardClient key={index} dataClientChat={dataClientChat}  />
                  ))
              }
              <ChatForm sendMsg={sendMsg}/>
          </div>
      )
}

function ChatCardClient({dataClientChat}) {
      return(
          <>
          <div className={`${dataClientChat.right} chat-card-client`}>
              <h1 className={`${dataClientChat.color}`}>{dataClientChat.description}</h1>
              <p>20:20</p>
          </div>
              </>
      )
}

function ChatForm({sendMsg}) {
    const [value,setValue] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        if(!value) return;
        sendMsg(value);
        setValue('');
    }

       return(
           <div>
               <form onSubmit={handleChange}>
                   <input type="text"  name="text" placeholder="Type your message..." className="form-control-text" required onChange={(e) => setValue(e.target.value)}/>
               </form>
           </div>
       )
}


export default  function chatLiveSupport() {

    return(
       <>
         <Header/>
           <div className="chatting-section">
               <div className="container">
               <div className="chatting-titles flex ai-c">
                   <Link to='/'>
                       <span className="mdi mdi-arrow-left"></span>
                   </Link>
                   <div className="text-center w-100">
                   <h3>Please click the close button when you finish</h3>
                   <h2>Direct chatting with an advisor</h2>
                   </div>
               </div>
               </div>
               <Chat/>
           </div>
           <Footer/>
       </>
      )
}