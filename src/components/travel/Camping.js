import React from "react";
import MyCarousel from "./MyCarousel";
import "./travel.css"

export default function Camping(card) {

  const carouselData = [
    {
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRajBeTKpteT61z1KqAM4k3ZPMBsL6FMYZZcfa7KBVwHMWgEPHy',
      caption: 'El Karama Lodge, ',
      description: "El Karama Lodge in Sgana is a scenic retreat offering breathtaking views, relaxation, and a tranquil atmosphere in nature.",
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVD-8NiijypbDUoFETnhcCpF8P29p9mIn9w&usqp=CAU',
      caption: 'Jangwani Camp, Sagana',
      description: "Jangwani Camp Sagana is an adventurous camp located in Sagana, offering a wide range of outdoor activities and accommodations.",
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8UK4YoCst7UQSPLsGNThRAOqwymZw7K32A&usqp=CAU',
      caption: 'Kiboko Camp, Naivasha',
      description: "Kiboko Camp is a wilderness retreat offering rustic accommodations, outdoor activities, and a serene natural environment for relaxation and exploration.",
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlDcUnzZUWiajN5ZNfSj7g4VHEX0B4gjQDA&usqp=CAU',
      caption: 'Ashnil Mara Camp, Maasai Mara',
      description: "Ashnil Mara Camp is a luxurious safari camp in Kenya's Maasai Mara reserve, offering stunning wildlife views and excellent amenities.",
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdOaupOvoqdLpy5-EhzZBB3QKStn7BFVX8w&usqp=CAU',
      caption: 'Leopard Hill Camp, Maasai Mara',
      description: "Leopard Hill Camp is a luxury safari camp offering an exclusive and immersive wildlife experience in a breathtaking natural setting.",
    }
  ];

  return (
    <div className="saf">
    <h2 id="txt">Camping Experience</h2>
    <p id="content">Outdoor adventure, nature, campfires, tents, hiking, and starry nights.</p>
    <MyCarousel data={carouselData} />
    </div>
  );
}