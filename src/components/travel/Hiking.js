import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';import Card from "./Cards";

export default function Hiking() {
  const [hike, setHike] = useState([])

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
    fetch("/hiking")
    .then((res) => res.json())
    .then((resp) => {
        setHike(resp)
    });
  },[])
  return (
    <div className="hike">
        <h2 id="txt">Hiking Trails</h2>
        <p id="content">Thrilling trails, stunning views, nature's embrace—hiking adventure awaits!</p>
        <Carousel responsive={responsive}>
            {hike.filter((card, ind) => ind < 5).map((card) => <Card card={card} />)}
        </Carousel>
    </div>
  );
}