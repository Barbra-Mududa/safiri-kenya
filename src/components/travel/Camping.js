import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';import Card from "./Cards";
// import { Link } from 'react-router-dom';

export default function Camping(card) {
  const [camp, setCamp] = useState([])

  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 2 
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2  
    },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 
    }
    }

  useEffect(() => {
    fetch("/camping")
    .then((res) => res.json())
    .then((resp) => {
        setCamp(resp)
    });
  },[])
  return (
    <div className="campg">
        <h2 id="txt">Camping Experience</h2>
        <p id="content">Outdoor adventure, nature, campfires, tents, hiking, and starry nights.</p>
        <Carousel responsive={responsive}>
            {camp.filter((card, ind) => ind < 5).map((card) => <Card card={card} />)}
        </Carousel>
    </div>
  );
}