import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/110184420_3722734127756359_3408679904642241617_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=p40A_2i4v5EAX_z36P4&_nc_ht=scontent.fuio1-2.fna&oh=00_AT8Gj-QzbIjwkJ3305WeXx5_JFzulEgg4OgeB8rc1j37ig&oe=6225FDA7"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/121634208_3996793663683736_706786937003803578_n.png?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=cC8-0gSXF_sAX-9mXQs&_nc_ht=scontent.fuio1-2.fna&oh=00_AT-iJj3tTX_rJHE8iSQzExhaFrsMr3oqIU9UqKvQ3tAbgA&oe=623D0A0C"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/120089115_3922227411140362_8621422112295952311_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=UxQBvS8XEkAAX_36jPq&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8WWSWA37n6sJdKaCfPORYCe8urcbB5mRL3DyUlw_ZZvQ&oe=623D8AAF"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselHome;
