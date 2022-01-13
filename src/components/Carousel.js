import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/110184420_3722734127756359_3408679904642241617_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFoM7K30H1jqimdMXrF1g1BoBabs0mGiIugFpuzSYaIizaZL4n1U2goy-8otJoNvFbqKKQtmoOwNQWEoG2H5EIn&_nc_ohc=aRCP0NAQ9t4AX9Vcj65&_nc_ht=scontent.fuio1-2.fna&oh=00_AT_s6ek-b0du6Y7Yrvp3FLawZPKIEdIT3msumbqDBPhooQ&oe=61FE70A7"
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
