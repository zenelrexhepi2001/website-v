import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import {ReactComponent as Moreblog} from '../../assets/images/more.svg.svg';
import OurblogItems from "../our-blog-items/our-blog-items.component";


class OurBlog extends React.Component {

     constructor() {
         super();

         this.state = {
             subTitle: "See what's new",
             title: 'our blog',
             sections: [
                 {
                     id: 1,
                     datePublishedArticle: 'November 4 2021',
                     title: 'Retail Innovators Collaborate\n' +
                         'on New Digital Security Concept',
                     content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
                     imageUrl: 'https://salestechstar.com/wp-content/uploads/2021/11/Retail-Innovators-Collaborate-on-New-Digital-Security-Concept.jpg',
                     linkUrl: '',
                 },
                 {
                     id: 2,
                     datePublishedArticle: 'November 6 2021',
                     title: 'New payment method',
                     content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
                     imageUrl: 'https://voltox.ch/uploads/images/head-funktionen.jpg',
                     linkurl: '',
                 },
                 {
                     id: 3,
                     datePublishedArticle: 'November 7 2021',
                     title: 'Retail Innovators Collaborate\n' +
                         'on New Digital Security Concept',
                     content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
                     imageUrl: 'https://voltox.ch/uploads/images/head-funktionen.jpg',
                     linkUrl: '',
                 }
             ]
         }
     }

     render() {
         return(
             <div className="our__blog-section">
                 <div className="container">
                     <div className="our__blog-titles">
                         <p>{this.state.subTitle}</p>
                         <h1>{this.state.title}</h1>
                     </div>
                     <div className="our__blog-elements">
                         {
                             this.state.sections.map(({id,...othersectionProp}) => (
                                 <OurblogItems key={id} {...othersectionProp}/>
                             ))
                         }
                     </div>
                     <Link to='/' className="our__blog-link">
                         More blogs
                         <Moreblog/>
                     </Link>
                 </div>
             </div>
         )
     }
}

export default  OurBlog;