import React from 'react';
import BLOG_DATA from "./blog-data";
import BlogCard from "../../components/blog-card-article/blog-card.component";
import Footer from "../../components/footer/footer.component";
import BlogPreview from "../../components/blog-preview/blog-preview.component";


class Blog extends  React.Component {
       constructor(props) {
           super(props);

           this.state = {
              getBlogData: BLOG_DATA,
           }
       }

       componentDidMount() {
           document.title = `Voltox Our Blog`;
       }

    render() {
           const {getBlogData} = this.state;
           return(
               <div className="blog__hero">
                   <div className="container">
                       <BlogCard/>
                        <div>
                            {
                                getBlogData.map(({id,...otherblogdataProp}) => (
                                    <BlogPreview key={id} {...otherblogdataProp}/>
                                ))
                            }
                        </div>
                       <Footer/>
                   </div>
               </div>
           )
       }
}

export default  Blog;