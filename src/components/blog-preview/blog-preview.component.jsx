import React from 'react';
import BlogItemsCard from "../blog-items/blog-items.component";


const BlogPreview = ({BlogItems}) => (
      <div className="blog__cards-parent">
          {
              BlogItems.filter((items,idx) => idx < Infinity)
                  .map(({id,...otheritemsProp}) => (
                      <BlogItemsCard key={id} {...otheritemsProp}/>
                  ))
          }
      </div>
)

export default  BlogPreview;