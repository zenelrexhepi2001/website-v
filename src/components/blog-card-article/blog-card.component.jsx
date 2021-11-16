import React from 'react';
import {Link} from 'react-router-dom';
import ImageBlog from '../../assets/images/image-blog.png.png';
import {ReactComponent as  ArrowRight} from "../../assets/images/more.svg.svg";

const BlogCard = () => (
    <>
        <div className="card-blog-subtitles">
            <h3>See what's new</h3>
            <h1>Our Blog</h1>
        </div>
    <article className="card-blog">
        <div className="card-blog-description">
            <div className="card-blog-image">
              <Link to='/'>
                  <img src="https://salestechstar.com/wp-content/uploads/2021/11/Retail-Innovators-Collaborate-on-New-Digital-Security-Concept.jpg"/>
              </Link>
            </div>
            <div className="card-blog-content">
            <h1>November 4 2021</h1>
            <Link to='/'>Retail Innovators Collaborate
               <br/> on New Digital Security Concept</Link>
            <p>The Delloop Innovation Hub brings together e-commerce innovators, Delloop and Voltox, to collaborate on a new concept in customer-centric shopping security
                Retail technology innovators, Delloop, and facial recognition specialists, Voltox, have joined forces to bring a new level of digital security to e-commerce.
                The two will collaborate using Delloop’s Innovation Hub – a platform that facilitates end-to-end solutions for the many... industries
                striving for greater customer-centricity. Delloop’s frictionless API-based technology – that secures an ongoing connection
                between Retailer and Customer – combined with Voltox’s ultra-secure biometric facial scanner, is aimed at creating a trusted
                contactless digital experience for online shoppers globally.
                Already the smartest omnichannel biometric facial scanner on the market, Voltox protects shoppers during the registration,
                shopping and payment process and it’s faster and easier to use than any other current facial recognition technology.
                Award-winning Delloop empowers customers with the use of their own data from which Retailers also gain real, actionable
                insights.
                “We have been aware of Voltox’s revolutionary technology for some time,” stated Delloop CEO, Lou Schillaci. “We are delighted to
                work together to further both our efforts in making shopping easier and more enjoyable and at the same time fundamentally
                safer for the Customer and the Retailer.”
                Voltox CEO, Shefket Robelli commented: “As leaders in our field it’s a pleasure to work with fellow innovators, like Delloop, who are
                also working hard to make a positive difference in the e-commerce space.”
                Delloop’s technology brings Retailers and Customers closer together and Voltox provides a secure environment within which they
                can interact with ease. Both solutions are aimed at all e-commerce stores, from the enterprise market down to the smallest
                stores, providing scalable, affordable options to make it attractive to any size retailer.
                Schillaci concluded: “The end result of this Innovation Hub co-creation will be a Voltox plug-in within Delloop, but more notably it
                will be a solution that allows smart Retailers to ‘leap-frog the competition and bring greater value to their Customers.”</p>
            </div>
        </div>
        <Link to='/blog-opened' className="read-more-link">
           Read more <ArrowRight/>
        </Link>
    </article>
    </>
)

export default  BlogCard;