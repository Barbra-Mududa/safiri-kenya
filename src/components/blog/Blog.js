import React from 'react';
import BlogCard from './BlogCard';
import './blog.css'

function Blog() {
  return (
    <div className='blogcontainer'>
      <div className='blog-page'>
        <div className='blogs'>
           <h2>Destinations Guides</h2>
           <p >Discover the road less traveled as we unveil enchanting destinations that are often overlooked by conventional tourists. From secluded islands to remote villages nestled in picturesque landscapes, we bring you tales of awe-inspiring places waiting to be explored.</p>
           <BlogCard />
        </div> 
      </div>
    </div>
  )
}

export default Blog