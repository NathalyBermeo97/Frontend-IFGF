import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/133714402_4221521751210925_371313037717639245_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=pptFNXBvpgIAX-daEQE&_nc_ht=scontent.fuio1-2.fna&oh=00_AT9d-WKlztvJe8Q_4SKVCJRqAYo7FHlhlq3iGM1kDR6n3Q&oe=61E11C24"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/120089115_3922227411140362_8621422112295952311_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=0Cb_TEzfZwEAX-wGvis&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8XD9cTCc7ObzG0fJEVSNsR-TkAQaIXeo_V71QkZ0bAkg&oe=61E2932F"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/121634208_3996793663683736_706786937003803578_n.png?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=SUEsKrvU2mEAX-x037I&_nc_ht=scontent.fuio1-2.fna&oh=00_AT-v566GoGpzc0kaDCCuDU9CewDKcUVl6CN7OVdL2jez5g&oe=61E2128C"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselHome;
