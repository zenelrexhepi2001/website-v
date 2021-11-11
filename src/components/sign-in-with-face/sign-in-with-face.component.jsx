import React from 'react';
import CoustumButton from "../coustum-buttons/coustum-button.component";
import UserAvatar from '../../assets/images/bosi.png.png';

const SignInWithFace = () => (
      <div className="sign-in-face">
          <div className="sign-in-titles">
              <h1>Sign in to Voltox</h1>
              <p>Please turn your camera and place your<br/>
                  head on the circle</p>
          </div>
          <div className="sign-in-image">
              <div className="sign-in-avatar">
                  <img alt="user-avatar" src={UserAvatar}/>
              </div>
              <CoustumButton type="button" className="btn btn-primary">Sign in with face</CoustumButton>
          </div>
      </div>
)

export default  SignInWithFace;