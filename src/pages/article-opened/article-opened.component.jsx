import React, {useEffect, useState} from 'react';
import Footer from "../../components/footer/footer.component";
import ArticleSupportOpened from "../../components/article-support-opened/article-support-opened.component";
import Header from "../../components/header/header.component";


const ArticleOpenedPage = () => {
    const [title,setTitle] = useState();
    useEffect(() => {
        document.title = 'Article Support Opened'
    })
     return(
         <>
          <Header/>
             <div className="container">
              <ArticleSupportOpened/>
             </div>
             <Footer/>
         </>
     )
}
export default  ArticleOpenedPage;