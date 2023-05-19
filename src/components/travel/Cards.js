import React from 'react';
// import { Link } from 'react-router-dom';
import './travel.css'


function Card({card}) {


    return (
        <div className='card-container' >
            <figure>
            <div className="card shadow s-white rounded text-white">
                <img className="card-img" src={card.image} alt="Card image"/>
                <figcaption>
                <div class="card-img-overlay d-flex flex-column my-text">
                        <h2 id='overlay-text'><strong>{card.title}</strong></h2>
                        <p id='overlay-text' className='htxt'>{card.location}</p>
                        <p id='overlay-text'>{card.description}</p>
                        {/* <Link to={`/singleproperty/${card.id}`} >
                            <span class= 'v-btn'><button></button></span>                        
                        </Link> */}
                </div>
                </figcaption>
            </div>
            </figure>
        </div>
    )
}

export default Card