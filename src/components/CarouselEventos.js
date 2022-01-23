import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/indexHome.module.css";

const CarouselEventos = () => {
  return (
    <Carousel style={{ width: '28rem' }}>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/p843x403/267620647_5334814176548338_613213228858365564_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeElAnOHreWYYbKaiVNuR0rdMNbDREqg0JUw1sNESqDQlewo9pwIho-bppRAgoz7a8zsv927D9OvjdTKRULeweot&_nc_ohc=SB0DrgvIlLYAX_1ujo0&tn=Wkw3FJ9iNf8T3MBj&_nc_ht=scontent.fuio1-2.fna&oh=00_AT9aNfmhAKOyf2qSjzKgr9sWoCQt_jCMK6f_S6uF9v9Cjw&oe=61EFB9AD"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/p843x403/264791751_5304785419551214_5422298084115860152_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeETgEPJSRsXk4x8_rfenuCpRnRsRA8tTT5GdGxEDy1NPlLag4DfC4l_dIm_UGuNaAZkMdV14sT-TnJKhF-JY7KQ&_nc_ohc=-i4ua-cXDPQAX-ZnRHd&tn=Wkw3FJ9iNf8T3MBj&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8oVQ_7v3Oz5x-vTUHFY_tHRV7XmsDrKg5EBxi5f5GZng&oe=61F09C60"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/p843x403/262361246_5281032231926533_5811781065805880359_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFNaeKtKOkT0epZIAFjzpvrN-0Y-Ft1DDE37Rj4W3UMMcQT7-At4DM0HhysXf8Lp_OH69D2G_0-KlVfbStA2Obc&_nc_ohc=wienFWDUXgwAX_EXrYR&_nc_ht=scontent.fuio1-2.fna&oh=00_AT9ydEE0L69kTjdXwt3gWD371YLNmPOj5BcKxr9GOTrtPg&oe=61F09F45"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselEventos;
