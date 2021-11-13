import React, {useEffect} from 'react';
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import ArticleSupport from "../../components/article-support/article-support-component";


const ArticleSupportPage = () => {

    useEffect(() => (
        document.title = `Voltox Article Support`
    ))

    return(
    <>
        <Header/>
        <ArticleSupport/>
       <Footer/>
    </>
    )
}

export default  ArticleSupportPage;