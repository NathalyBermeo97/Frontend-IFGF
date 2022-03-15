import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/indexHome.module.css";

const CarouselEventos = () => {
  return (
    <Carousel style={{ width: '28rem' }}>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/275561982_5634124203283999_1690251637048987424_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=WlZwqmu1u-4AX_jW6A6&_nc_ht=scontent.fuio1-2.fna&oh=00_AT-OCjG0D9Grzu-HteeEMNA8QI8vkovV28VoDgkS1itQ9g&oe=6236B67B"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/274876968_5594418733921213_8122476988034009837_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_ohc=0uUtHouee0wAX9KscUw&_nc_ht=scontent.fuio1-2.fna&oh=00_AT9hKY3zZaws82JvMfMHX4JYXgTFYFQAPaFvgdtoynQk9g&oe=6236B34E"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/274466494_5572269006136186_4134547737540987140_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_ohc=he8jbm5QdgMAX-eGiF5&_nc_ht=scontent.fuio1-1.fna&oh=00_AT_pnfsVRih3lEAnQOAuJrxJ4KSwRffMLqEoe1LA4vcNmg&oe=623533F6"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselEventos;
