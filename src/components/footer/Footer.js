import React from 'react';
import "./footer.css"

function Footer() {
  return (
    <footer>
        <div className='waves'>
            < div className='wave' id='wave1'></div>
            < div className='wave' id='wave2'></div>
            < div className='wave' id='wave3'></div>
            < div className='wave' id='wave4'></div>
        </div>
        <ul className='social'>
          <li><a href='#'>
            <i class="fa-brands fa-instagram"></i>
            </a>
          </li> 
          <li><a href='#'>
            <i class="fa-brands fa-facebook"></i>
            </a>
          </li>          
          <li><a href='#'>
            <i class="fa-brands fa-twitter"></i>            
            </a>
         </li> 
          <li><a href='#'>
            <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>   
        </ul>
        <ul className='menu'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Experience</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        <p>©2023 Safiri Kenya | All Rights Reserved</p>
    </footer>   
    
  )
}

export default Footer