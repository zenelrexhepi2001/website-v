import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import  RightArrow from '../../assets/images/Arrow-right.svg';
import  ImgVoltoxClient from '../../assets/images/voltox-client.jpg';
import Footer from "../footer/footer.component";
import SimilarBlog from "../similar-blog-items/similar-blogs.component";

class BlogOpened extends React.Component {

      constructor(props) {

          super(props);

          this.state = {
              titleBlog: 'Similar Blog',
              similarBlog: [
                  {
                      imageUrl: 'https://voltox.ch/uploads/images/head-funktionen.jpg',
                      date: 'October 17 2021',
                      title: 'Pay with face - Voltox',
                      content: 'Voltox can now be used from \n' +
                          'people across the whole world',
                      id: 1,
                  },
                  {
                      imageUrl: 'https://voltox.ch/uploads/images/head-funktionen.jpg',
                      date: 'October 17 2021',
                      title: 'Pay with face - Voltox',
                      content: 'Voltox can now be used from \n' +
                          'people across the whole world',
                      id: 2,
                  },
                  {
                      imageUrl: 'https://voltox.ch/uploads/images/head-funktionen.jpg',
                      date: 'October 17 2021',
                      title: 'Pay with face - Voltox',
                      content: 'Voltox can now be used from \n' +
                          'people across the whole world',
                      id: 3,
                  },
                  {
                      imageUrl: 'https://voltox.ch/uploads/images/head-funktionen.jpg',
                      date: 'October 17 2021',
                      title: 'Pay with face - Voltox',
                      content: 'Voltox can now be used from \n' +
                          'people across the whole world',
                      id: 4,
                  }
              ]
          }
      }

    componentDidMount() {
        document.title = 'Voltox Blog Opened'
    }

    render() {
          const {similarBlog} = this.state;
          return(
              <>
             <div className="blog-opened-article">
                 <div className="blog-opened-titles">
                     <Link to='/blog'>
                         <img alt='right-arrow' src={RightArrow}/>
                     </Link>
                     <div>
                         <h3>June 6 2020 /Tips & Tricks</h3>
                         <h1>Retail Innovators Collaborate on New Digital Security Concept</h1>
                     </div>
                 </div>
                 <div className="blog-opened-image">
                     <img src={ImgVoltoxClient} alt='image-blog'/>
                 </div>
                 <div className="blog-opened-description">
                     <p>
                         The Delloop Innovation Hub brings together e-commerce innovators, Delloop and Voltox, to collaborate on a new concept in
                         customer-centric shopping security
                         Retail technology innovators, Delloop, and facial recognition specialists, Voltox, have joined forces to bring a new level of digital
                         security to e-commerce.
                         The two will collaborate using Delloop’s Innovation Hub – a platform that facilitates end-to-end solutions for the many industries
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
                         will be a solution that allows smart Retailers to ‘leap-frog the competition and bring greater value to their Customers.”
                     </p>
                 </div>
             </div>
                  <div className="container">
                  <div className="blog__hero">
                      <h1 className="blog-title-similar">{this.state.titleBlog}</h1>
                      <div className="blog__cards-parent">
                  {
                      similarBlog.map((getData) => (
                          <SimilarBlog key={getData.id} getData={getData}/>
                      ))
                  }
                      </div>
                  </div>
                  </div>

                  <Footer/>
                  </>
          )
      }
}


export default  BlogOpened;