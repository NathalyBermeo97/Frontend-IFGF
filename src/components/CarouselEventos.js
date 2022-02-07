import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/indexHome.module.css";

const CarouselEventos = () => {
  return (
    <Carousel style={{ width: '28rem' }}>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/273388471_5526876984008722_6051769769783718624_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_ohc=LW73klqB0hUAX-G5fe3&_nc_oc=AQm4Go6uUVkaL9lftQHXRGDbnzcYI4HlO--u8lnvMJihiwQVxvv6u3ICMMwJfxJkYhn2KmOwlesAMX-vQcDAY07k&_nc_ht=scontent.fuio1-1.fna&oh=00_AT_xZbhr8k7xEGpbXCQQXdQ9PuETL2Fbaa3NQp4883PpWQ&oe=620735D4"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/272410678_5470538662975888_1663266292197816637_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=RrlvvAxq2d0AX9ccngz&_nc_ht=scontent.fuio1-2.fna&oh=00_AT-wiSfI6q67NxQEF7j6zGr0XXxy8rQCVi6qrxiyAnIEyw&oe=6205F382"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/272855924_5503242313038856_3573026290570383353_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=qWe88wZM-ZwAX8swv2q&tn=Wkw3FJ9iNf8T3MBj&_nc_ht=scontent.fuio1-1.fna&oh=00_AT_ze2pZOVscP6NFjeZZ-5sCnNEQZcbSFRSYOAB-ULCucg&oe=62069AE3"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselEventos;
