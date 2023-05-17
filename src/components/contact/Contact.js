import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:example@example.com';
  };

  return (
    <div className='homeContainer'>
      <form class="form">
        <div className='contact-container'>
          <div class="pageTitle title">
              <img id='phone' src='https://img.freepik.com/free-vector/phone_78370-560.jpg?w=2000'/>
              <h2>Contact Me</h2> 
          </div>
          <div class="secondaryTitle title">DISCUSS A PROJECT OR JUST GET IN TOUCH? MY INBOX IS OPEN</div>      
          </div>
          <div className='contacts'>
            <Link to="https://github.com/Barbra-Mududa/">
              <i class="fa-brands fa-github" id='icons'></i>
            </Link>
            <Link to="https://www.linkedin.com/in/barbra-mududa-30a36124b/">
              <i class="fa-brands fa-linkedin" id='icons'></i>
            </Link>
            <Link onClick={handleEmailClick}>
              <i class="fa-solid fa-envelope" id='icons'></i>
            </Link>
            </div>
          <div className='contact-arrow'>
        Go Back Home <Link to='/'>
          <i class="fa-sharp fa-solid fa-arrow-right" id='arrow'></i>
          </Link> 
      </div>
      </form> 
    </div>
  )
}

export default Contact