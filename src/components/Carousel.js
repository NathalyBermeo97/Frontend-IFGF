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
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/120089115_3922227411140362_8621422112295952311_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGH1C88O-caIFlxpUI1UD2QJtyKCK_1V1Em3IoIr_VXURiQ9RnV-Dn5tiOVqrQFapxScCmeeesZZCY2DHGkh9T_&_nc_ohc=09n4x2NB6VgAX9mxm7g&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8HKwVXsvvCtjdaxNxg--TOXUBC10uWia9kHdt_pnPRmg&oe=620A202F"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/121634208_3996793663683736_706786937003803578_n.png?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHJWvlqBbR1XHT52AmsO6gkugF8KfZqUaW6AXwp9mpRpUoBmsXmrUtAir0sfzomn7GW-qXDLRczA-GPHWaf0qd7&_nc_ohc=xK_FPdaAmeAAX_Ug70M&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8iADzJiwYbXD_aCeq_GZaP3eXATcPqkS3mUQYJkTshuw&oe=62099F8C"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselHome;
