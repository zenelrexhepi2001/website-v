import React from 'react';
import FooterItems from "../footer-items/footer-items.component";
import {Link} from "react-router-dom";
import Twitter from "../../assets/images/Twitter.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Facebook from "../../assets/images/Facebook.svg";
import In from "../../assets/images/Linkedin.svg";
import Youtube from "../../assets/images/Youtube.svg";
import Google from "../../assets/images/Google-alt.svg";



class Footer extends React.Component {
      constructor() {
          super();

          this.state = {
              FooterData: [
                  {
                      id: 1,
                      title: 'Something',
                      linkOne: 'First example',
                      linkTwo: 'First example',
                      linkThree: 'Third example',
                      linkFour: 'Fourth example',
                      linkFive: 'Fifth example',
                  },
                  {
                      id: 2,
                      title: 'Something',
                      linkOne: 'First example',
                      linkTwo: 'First example',
                      linkThree: 'Third example',
                      linkFour: 'Fourth example',
                      linkFive: 'Fifth example',
                  },
                  {
                      id: 3,
                      title: 'Something',
                      linkOne: 'First example',
                      linkTwo: 'First example',
                      linkThree: 'Third example',
                      linkFour: 'Fourth example',
                      linkFive: 'Fifth example',
                  },
                  {
                      id: 4,
                      title: 'Something',
                      linkOne: 'First example',
                      linkTwo: 'First example',
                      linkThree: 'Third example',
                      linkFour: 'Fourth example',
                      linkFive: 'Fifth example',
                  }
              ]
          }
      }

      render() {
          return(
           <footer className="footer">
               <div className="container">
                   <div className="footer__content">
                       <div className="footer__items-social">
                           <h1>Social Media</h1>
                           <Link to='/' className="footer-item-social">
                               <img alt="twitter" src={Twitter}/> Twitter
                           </Link>

                           <Link to='/' className="footer-item-social">
                               <img alt="instagram" src={Instagram}/> Instagram
                           </Link>

                           <Link to='/' className="footer-item-social">
                               <img alt="Meta" src={Facebook}/> Facebook
                           </Link>

                           <Link to='/' className="footer-item-social">
                               <img alt="Linkedin"  src={In}/> Linkedin
                           </Link>

                           <Link to='/' className="footer-item-social">
                               <img alt="Youtube" src={Youtube}/> Youtube
                           </Link>

                           <Link to='/' className="footer-item-social">
                               <img alt="Google" src={Google}/>Google
                           </Link>
                       </div>
                       {
                           this.state.FooterData.map((getDataFooter) => (
                               <FooterItems key={getDataFooter.id} getDataFooter={getDataFooter}/>
                           ))
                       }
                   </div>
               </div>
           </footer>
          )
      }
}

export default Footer;