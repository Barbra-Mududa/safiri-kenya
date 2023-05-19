import React from 'react'
import img from '/home/barbra/Documents/safiri-kenya/src/assets/image 20.png';
import img1 from '../../El Karama.png'
import img2 from '../../HGate.png'
import img3 from '../../Mt. Kenya.png'
import './home.css';
import Travel from '../travel/Travel';


function Home() {
  return (
    <div className='home'>
        <img id='homeimg' src={img} alt='' />
        <div className='hero'>
            <h1>Adventure</h1>
            <p>Unleash your wanderlust and let our travel tours redefine your sense of exploration.Discover captivating and awe-inspiring landscapes, and unforgettable adventures. </p>
        </div>
        <div className='experience'>
            <h3>EXPERIENCE</h3>
            <h2>Thrilling Adventures</h2>
            <p>Embark on unforgettable adventures through exhilarating  trails, immersive camping experiences, and breathtaking  
                Kenya Safaris that will ignite your spirit.</p>
        </div>
        <div className='homecards'>
            <div id='img1'>
                <img src={img1}/>
                <h2 id='text'>Camping Sites</h2>
            </div>
            <div id='img1'>
                <img src={img2}/>
                <h2 id='text'>Hiking Trails</h2>
            </div>
            <div id='img1'>
                <img src={img3}/>
                <h2 id='text'>Wild Safaris</h2>
            </div>
        </div>
        <Travel/>
    </div>
  )
}

export default Home