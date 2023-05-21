import React from "react";
import MyCarousel from "./MyCarousel";
import "./travel.css"

export default function Safari() {

  const carouselData = [
    {
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT48X9wZvsl9jgNIXWebUC-QqbD1GZU04n_RCghM0IpweMofnAW',
      caption: 'Hells Gate, Nakuru',
      description: "A dramatic gorge in Kenya with towering cliffs, geothermal activity, wildlife, and thrilling activities like biking and hiking.",
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eD-u7fBZCVUTV2kmDpaABPt8OC9c5BcaXw&usqp=CAU',
      caption: 'Maasai Mara, Narok',
      description: " Vast savannah, iconic wildlife, annual migration, breathtaking landscapes, cultural Maasai encounters, unforgettable safari experiences, and nature's raw beauty.",
    },
    {
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT48X9wZvsl9jgNIXWebUC-QqbD1GZU04n_RCghM0IpweMofnAW',
      caption: 'Ambosseli, Kajiado',
      description: "Serene savannah in Kenya with iconic elephants, Mount Kilimanjaro backdrop, and abundant wildlife. A photographer's paradise with breathtaking sunsets.",
    },
    {
      imageUrl: 'https://www.govisitkenya.com/images/Lake-Turkana1.jpg',
      caption: 'The Cradle, Lake Turkana',
      description: "A serene, picturesque bay with tranquil waters, lush vegetation, and stunning sunsets, offering a perfect escape to nature's embrace.",
    },
    {
      imageUrl: 'https://images.pexels.com/photos/7235411/pexels-photo-7235411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'Lake Nakuru, Nakuru',
      description: "Stunning soda lake in Kenya's Rift Valley, renowned for its flamingo population, diverse birdlife, and majestic wildlife.",
    }
  ];

  return (
    <div className="saf">
      <h2 id="txt">Safaris</h2>
      <p id="content">Wildlife, nature, and adventure in Africa's iconic safari destinations.</p>
      <MyCarousel data={carouselData} />
    </div>
  );
}