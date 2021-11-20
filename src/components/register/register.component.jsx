import React from "react";
import { Link } from "react-router-dom";
import SignInWithFace from "../sign-in-with-face/sign-in-with-face.component";
import CoustumButton from "../coustum-buttons/coustum-button.component";
import { ReactComponent as LogoSignin } from "../../assets/images/g10.svg";

class RegisterPage extends React.Component {
  constructor() {
    super();

    this.state = {
      emailAdress: "",
      password: "",
      confirmPassword: "",
      adress: "",
      accountType: "",
      addFace: "",
    };
  }

  componentDidMount() {
    document.title = `Voltox Register`;
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({ emailAdress: "", password: "", confirmPassword: "" });

    console.warn(event);
  };

  handleSubmit = (event) => {
    const { emailAdress, value } = event.target;

    this.setState({ [emailAdress]: value });

    console.info(event);
  };

  handleCheck = (event) => {
    event.preventDefault();

    console.log(event);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-content">
            <h1>
              You’re just a few clicks
              <br /> away from logging in
              <br /> to your account
            </h1>
            <p>
              If you already have a Voltox account, all you need to do
              <br /> is scan your face, write down your e-mail and your password
            </p>
            <div className="sidebar-logo">
              <CoustumButton type="button">
                <LogoSignin />
              </CoustumButton>
            </div>
          </div>
        </div>

        <div className="content-area">
          <div className="sign-in-face">
            <div className="sign-in-titles">
              <h1>Sign in to Voltox</h1>
              <p>
                Please turn your camera and place your
                <br />
                head on the circle
              </p>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-control">
              <input
                type="email"
                name="Email"
                placeholder="Email Adress"
                onChange={this.handleChange}
                value={this.setState.email}
                className="form-control-element"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="Password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.setState.password}
                className="form-control-element"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="Password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                value={this.setState.password}
                className="form-control-element"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="text"
                placeholder="Adress"
                onChange={this.handleChange}
                value={this.setState.adress}
                className="form-control-element"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="text"
                placeholder="Account Type"
                onChange={this.handleChange}
                value={this.setState.accountType}
                className="form-control-element"
                required
              />
            </div>
            <div className="form-control">
              <Link to="/add-face" className="form-control-face"  target="_blank">
                Add Face
              </Link>
            </div>
            <div
              className="form-control check"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <input
                type="checkbox"
                name="checkbox"
                onChange={this.handleCheck}
                required
                style={{ marginRight: "5px", position: "relative", top: "5px" }}
              />
              <p>
                I have read and agree to all the{" "}
                <Link className="form-control-link" to="/">
                  terms & conditions
                </Link>
              </p>
            </div>

            <CoustumButton type="submit" className="btn btn-primary">
              Sign up
            </CoustumButton>
            <p>
              Don't have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
