import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import "./travel.css"

const MyCarousel = ({ data, props }) => {
    const navigate = useNavigate()
    
    function handleClick(e) {
        navigate("/review", {
        state: {props},
        });
    }
        return (
      <Carousel>
        {data.map((item, index) => (
          <Carousel.Item key={index} >
            <img id="card" src={item.imageUrl} alt={item.caption} />
            <div className='card-img-overlay d-flex flex-column my-text'>
                <Carousel.Caption>
                <h3 id='overlay-text'><strong>{item.caption}</strong></h3>
                <p id='overlay-text'>{item.description}</p>
                </Carousel.Caption>
                <span className= 'v-btn'><button onClick={handleClick}>Review</button></span>                        
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
  
  export default MyCarousel;
  