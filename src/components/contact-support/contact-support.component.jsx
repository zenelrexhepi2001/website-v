import React from 'react';
import SeendingEmails from '../../assets/images/Sending emails_Monochromatic.svg';
import CoustumButton from "../coustum-buttons/coustum-button.component";

class ContactSupportPage extends React.Component{
    constructor() {
        super();

        this.state = {
            fullName: '',
            emailAdress: '',
            phoneNumber: '',
            message: '',
        }
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({fullName: '',emailAdress: '',phoneNumber: '',message: ''});
    }

    handleSubmit = (e) => {
        const {name,value} = e.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="faq-support">
                <div className="container">
                    <div className="faq-support-titles">
                        <h3>Let us assist you</h3>
                        <h1>Contact support</h1>
                    </div>
                    <div className="contact-support-flex">
                        <form>
                            <div className="form-control">
                                <input type="text" name="Full name" className="form-control-element name"
                                     onChange={this.handleSubmit} value={this.setState.fullName}  placeholder="Full name" required/>
                            </div>
                            <div className="form-control">
                                <input type="email" name="Email" className="form-control-element email"
                                       onChange={this.handleSubmit}       value={this.setState.email}  placeholder="Email Adress" required/>
                            </div>
                            <div className="form-control">
                                <input type="text" name="Phone number" className="form-control-element phone"
                                       onChange={this.handleSubmit}       value={this.setState.phoneNumber}        placeholder="Phone number" required/>
                            </div>
                            <div className="form-control">
                              <textarea className="form-control textarea" placeholder="Message"  onChange={this.handleSubmit}       value={this.setState.message}  >

                              </textarea>
                            </div>
                            <CoustumButton type="submit">Let's talk</CoustumButton>
                        </form>
                        <div className="contact-support-image">
                            <img alt="seending-emails" src={SeendingEmails}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  ContactSupportPage;