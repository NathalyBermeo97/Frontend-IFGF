import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/indexHome.module.css";

const CarouselEventos = () => {
  return (
    <Carousel style={{ width: '28rem' }}>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/272855924_5503242313038856_3573026290570383353_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=pJTzcSJz3CwAX-Hu80g&tn=Wkw3FJ9iNf8T3MBj&_nc_ht=scontent.fuio1-1.fna&oh=00_AT_wIC7NMBej3F1au8o7P7bKzEQh_yXvw8aiUT_tsk9cWg&oe=61FCB7A3"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/272410678_5470538662975888_1663266292197816637_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=UFHbV1B6vPsAX8zaUEq&_nc_ht=scontent.fuio1-2.fna&oh=00_AT8HXM1ocNA9t0ISvIsuyaizZQKzks-kkz5Z4X4SQYAHZw&oe=61FE0A82"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/269772917_5367224003307355_2685700156621203079_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Z-ui71OXi1EAX-2AqnZ&tn=Wkw3FJ9iNf8T3MBj&_nc_ht=scontent.fuio1-1.fna&oh=00_AT91M4V2z540Udw1fi_4c2ponfXpxftBnEuwOfZjM8_-GA&oe=61FD3D12"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselEventos;
