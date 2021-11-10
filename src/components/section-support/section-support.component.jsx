import React from 'react';
import {Link} from 'react-router-dom';
import ResponseImage from '../../assets/images/api.png';
import {ReactComponent as More} from '../../assets/images/more.svg.svg';
import voltoxSupportImage from '../../assets/images/voltox-support.jpg';


const SectionSupport = () => (
    <>
        <div className="container">
    <div className="card__section">
        <article className="card__section-child">
            <div className="card__section-body">
                <div className="card__section-description">
                    <div className="card__section-subtitles">
                        <h3>Powerful and easy to use APIs</h3>
                        <h1>Developers</h1>
                    </div>
                    <h1 className="card__section-title">
                        Very powerful and easy<br/>to use APIs
                    </h1>
                    <div className="mb-28" >
                        Get our services through a front and back<br/>
                        interface
                    </div>
                    <p className="card__section-content">
                        No matter what your business is E-Commerce,
                        Retail, Bank- we make it run smoothly. We cover
                        every procedure you have to go through, from
                        logging in- to checking out. We simplify the
                        ordering process and provide a pleasant and
                        easy experience for our clients
                    </p>
                    <Link to='/' className="card__section-link">See more<More/></Link>
                </div>
                <div className="card__section-image">
                  <img alt="card-image" src={ResponseImage}/>
                </div>
            </div>
        </article>
        <article className="card__section-child">
            <div className="card__section-body">
                <div className="card__section-description">
                    <div className="card__section-subtitles">
                        <h3>See how we can help you</h3>
                        <h1>Support</h1>
                    </div>
                    <h1 className="card__section-title">
                        We are delighted<br/>
                        to assist you
                    </h1>
                    <p className="card__section-content">
                        The experts at the Voltox Team will not hesitate
                        to help you through every step of the way. We
                        are available 24/7 to answer any questions you
                        may have about the way Voltox works and we
                        make sure to provide a seamless experience for
                        you.
                    </p>
                    <Link to='/' className="card__section-link">Get Help<More/></Link>
                </div>
                <div className="card__section-image">
                    <img alt="card-image" src={voltoxSupportImage}/>
                </div>
            </div>
        </article>
    </div>
        </div>
    </>
)

export default SectionSupport;