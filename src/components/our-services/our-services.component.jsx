import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import {ReactComponent as SecureLogin} from "../../assets/images/Layer 2 (1).svg";
import {ReactComponent as ScanGo} from "../../assets/images/Layer 2 (2).svg";
import {ReactComponent as EKYCservice} from "../../assets/images/Layer 2 (3).svg";
import {ReactComponent as QRcode} from "../../assets/images/Layer 2 (4).svg";


const OurServices = () => (
    <div className="our__services-section">
        <div className="container">
            <div className="our__services-titles">
                <p>See what we do</p>
                <h1>Our Services</h1>
            </div>
            <div className="card-ourservices">
                <article className="card__ourservice">
                    <div className="card__ourservice-body">
                        <Link to='/'>
                            <SecureLogin/>
                        </Link>
                        <div className="card__ourservice-desc">
                        <h1>Secure login & Fast checkout</h1>
                        <p>You can speed up the process of logging in
                            and checking out while online/offline
                            shopping by scanning your face.</p>
                        </div>
                    </div>
                </article>
                <article className="card__ourservice">
                    <div className="card__ourservice-body">
                        <Link to='/'>
                            <ScanGo/>
                        </Link>
                        <div className="card__ourservice-desc">
                            <h1>eKYC service</h1>
                            <p>There is no need for you to wait in line
                                at the POS. Scan your own items and
                                you are good to go.</p>
                        </div>
                    </div>
                </article>
                <article className="card__ourservice">
                    <div className="card__ourservice-body">
                        <Link to='/'>
                            <EKYCservice/>
                        </Link>
                        <div className="card__ourservice-desc">
                            <h1>Scan & Go</h1>
                            <p>Using onboarding deep OCR/MRZ/ML and
                                facial recognition, we offer security and
                                compliance to all of our users.</p>
                        </div>
                    </div>
                </article>
                <article className="card__ourservice">
                    <div className="card__ourservice-body">
                        <Link to='/'>
                            <QRcode/>
                        </Link>
                        <div className="card__ourservice-desc">
                            <h1>Voltox QR code</h1>
                            <p>Scan the QR Code on your smartphone and choose between the options displayed for you..</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
)

export default  withRouter(OurServices);