import React from 'react'
import { Link } from 'react-router-dom';
import './blog.css';

function BlogCard() {
  return (
    <div className='blog-section'>
        <div className='myblogs-card-4 text-center'>
            <img class="image img-responsive" src="https://res.cloudinary.com/practicaldev/image/fetch/s--CAdTc2jK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0tfsz7wcggf90l7ntrtm.png" alt=''/>
                <div class="blog-content">
                    <div class="myblogs-description">
                        <h4 class="text-center"><strong>Safiri Kenya</strong></h4>
                        <Link id="r" to='https://dev.to/b_mududa/my-first-azure-web-app-with-azure-sql-database-4ggg'>Read More...</Link>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default BlogCard