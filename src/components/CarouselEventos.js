import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/indexHome.module.css";

const CarouselEventos = () => {
  return (
    <Carousel style={{ width: '28rem' }}>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/271551051_5413025732060515_3690654432448099915_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=S8m0zjSgXRkAX_Oxjsy&_nc_ht=scontent.fuio1-1.fna&oh=00_AT9HukeAT5Jb4Xikhvzg7jXAZeQ2A3mgRQeFpklqlNqyaQ&oe=61F524B8"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/272410678_5470538662975888_1663266292197816637_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=QbZe8Jjh-VIAX8KqGEe&_nc_ht=scontent.fuio1-2.fna&oh=00_AT_Ry-SOjNkJrO7oP-1KNL9BtaNV3mqWpMqRJKxpCfhVQw&oe=61F42742"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/269772917_5367224003307355_2685700156621203079_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=a26aad&_nc_ohc=05TZoDDBD3wAX9M-mYR&tn=Wkw3FJ9iNf8T3MBj&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8Gr_uSOH2RctIkORyruEIIxbVyYyVOZ1kol1rbN5aTmA&oe=61F55412"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselEventos;
