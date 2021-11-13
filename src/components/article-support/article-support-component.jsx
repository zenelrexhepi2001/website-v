import React,{useState} from 'react';
import ArticleSupportData from "./article-data";
import  BookLover from '../../assets/images/Book Lover_Monochromatic (2).svg';
import SearchBox from "../search-box/search-box.component";
import ArticleSupportItem from "../article-support-items/article-support-item.component";


const ArticleSupport = () => {
    const [filter,setFilter] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    let dataSearch = ArticleSupportData.ArticleData.filter(item => {
          return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
          )
    })

        return (
            <div className="faq-support">
                <div className="container">
                    <div className="faq-support-titles">
                        <h3>Read more</h3>
                        <h1>Article Support</h1>
                    </div>
                    <SearchBox
                        placeholder="Search for an article..."
                        handleChange={handleChange.bind(this)}
                    />
                    <div className="article-support-two">
                        <div className="accordion-support">
                            {
                              dataSearch.map(({id,...otherdataArticleProp}) => (
                                  <ArticleSupportItem key={id} {...otherdataArticleProp}/>
                              ))
                            }
                            </div>
                            <div className="article-support-image">
                                <img alt='Book-lover' src={BookLover}/>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default  ArticleSupport;