import React from "react";
import MyCarousel from "./MyCarousel";
import "./travel.css"

export default function Hiking() {
  
  const carouselData = [
    {
      imageUrl: 'https://www.wildpeakadventures.com/wp-content/uploads/2018/09/Mt-Kenya-climb.jpg',
      caption: 'Mt. Kenya Trail ',
      description: "Challenging and rewarding trek through Africa's second-highest peak, offering breathtaking scenery, unique flora, and awe-inspiring summit views.csufdu",
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-qVFENEIUE7LNoe3lkBklvfRrQzijf8V6-w&usqp=CAU',
      caption: 'Kijabe Hills',
      description: "Scenic and challenging trail in Kenya offering breathtaking views, lush forests, rugged terrain, and an immersive outdoor experience.",
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv7InnlurZxOwVQizuamQ-mgxwRR8bJkb2gQ&usqp=CAU',
      caption: 'Elephant Hill',
      description: "Scenic trek through lush forests and rugged terrain, offering breathtaking views and a chance to spot elephants in their natural habitat.",
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0P7OIvGZWAmH6gXIH9pyPaxpthJsYgvayg&usqp=CAU',
      caption: 'Thomson Falls',
      description: "Scenic trail in Kenya, leading to the mesmerizing Thomson Falls waterfall, offering breathtaking views and a tranquil nature experience.",
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkJow8OB65_cipZYY7kTSQ0XSgJdb-1pVQQ&usqp=CAU',
      caption: 'Ololosokuan, Ngong',
      description: "Ololosokwan gorge in Ngong is where you walk through dry river beds, missing waterfalls, heart-stopping sheer cliff drops, and friendly baboons.",
    }
  ];

  return (
    <div className="saf">
      <h2 id="txt">Hiking Trails</h2>
      <p id="content">Thrilling trails, stunning views, nature's embrace—hiking adventure awaits!</p>
      <MyCarousel data={carouselData} />
    </div>
  );
}