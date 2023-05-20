import React from 'react'
import img1 from '../../El Karama.png'
import img2 from '../../HGate.png'
import img3 from '../../Mt. Kenya.png'
import './home.css';
import Travel from '../travel/Travel';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import About from '../about/About';

function Home() {
  return (

    <div className='home'>
        <About />
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
        <Footer />
    </div>
  )
}

export default Home