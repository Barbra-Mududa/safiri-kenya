import React from 'react'
import img from '/home/barbra/Documents/safiri-kenya/src/assets/image 20.png';
import { TypeAnimation } from 'react-type-animation';
import "../home/home.css"

function About() {

  return (
    <div>
      <img id='homeimg' src={img} alt='' />
      <div className='hero'>
            <h1 id='type-animation'>
            <TypeAnimation
            sequence={[
                'SAFIRI KENYA', 
                3000, // Waits 3s
                'KENYA ADVENTURES', 
                3000, // Waits 3s
                () => {
                console.log('Done typing!'); 
                }
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2.5em' }}
            />
            </h1>            <p>Unleash your wanderlust and let our travel tours redefine your sense of exploration.Discover captivating and awe-inspiring landscapes, and unforgettable adventures. </p>
        </div>
        <div className='experience'>
            <h3>EXPERIENCE</h3>
            <h2>Thrilling Adventures</h2>
            <p>Embark on unforgettable adventures through exhilarating  trails, immersive camping experiences, and breathtaking  
                Kenya Safaris that will ignite your spirit.</p>
        </div>
    </div>
  )
}

export default About