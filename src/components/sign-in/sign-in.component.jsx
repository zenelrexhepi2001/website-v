import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as LogoSignin} from '../../assets/images/g10.svg';
import CoustumButton from "../coustum-buttons/coustum-button.component";
import SignInWithFace from "../sign-in-with-face/sign-in-with-face.component";



class SignInPage extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }
    componentDidMount() {
        document.title = `Voltox Sign in`
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '',password: ''});
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className="wrapper">
                <div className="sidebar">
                    <div className="sidebar-content">

                        <h1>
                            You’re just a few clicks<br/> away from logging in<br/> to your account
                        </h1>
                        <p>
                            If you already have a Voltox account, all you need to do<br/> is scan your face, write down your e-mail and your password
                        </p>
                        <div className="sidebar-logo">
                            <CoustumButton type="button">
                                <LogoSignin/>
                            </CoustumButton>
                        </div>
                    </div>

                </div>
            <div className="content-area">
                 <SignInWithFace/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-control">
                        <input type="email" name="Email" placeholder="email"  onChange={this.handleChange} value={this.setState.email} className="form-control-element" required/>
                    </div>
                    <div className="form-control">
                        <input type="password" name="Password" placeholder="password"  onChange={this.handleChange} value={this.setState.password} className="form-control-element" required/>
                    </div>
                    <div className="form-link">
                        <Link to='/'>
                            Forgot Password?
                        </Link>
                    </div>
                    <CoustumButton  type="submit" className="btn btn-primary">Sign in</CoustumButton>
                    <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
                </form>
            </div>
            </div>
        )
    }
}

export default SignInPage;