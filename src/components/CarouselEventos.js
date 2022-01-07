import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselEventos = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/p843x403/270299823_5391435947552827_1036702787305805522_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeHGDJHAoYUcWAs90XCO01W1D7hJntmgs3YPuEme2aCzdq5Rj3a_CpRR6I4IL-q9BDUGiPfcbIMQY3RFyQWDepoa&_nc_ohc=bcygDQ0KFtgAX_-eKAy&_nc_ht=scontent.fuio1-1.fna&oh=00_AT9zM87q2P4r9YZMoqKhsBdum4tyk5V-RGxYlXBrW7_Heg&oe=61DBB763"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/264791751_5304785419551214_5422298084115860152_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeETgEPJSRsXk4x8_rfenuCpRnRsRA8tTT5GdGxEDy1NPlLag4DfC4l_dIm_UGuNaAZkMdV14sT-TnJKhF-JY7KQ&_nc_ohc=OfnffcfHNC8AX84K3vO&tn=Wkw3FJ9iNf8T3MBj&_nc_ht=scontent.fuio1-1.fna&oh=00_AT-AieRbpi_4GcR2rwlOJK5841GcneIC6Cm220Ia_mpExA&oe=61DBA48A"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/267620647_5334814176548338_613213228858365564_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeElAnOHreWYYbKaiVNuR0rdMNbDREqg0JUw1sNESqDQlewo9pwIho-bppRAgoz7a8zsv927D9OvjdTKRULeweot&_nc_ohc=n_D-W1BTslwAX-TROX9&tn=Wkw3FJ9iNf8T3MBj&_nc_ht=scontent.fuio1-1.fna&oh=00_AT_EJP9RM_ZplNX42FEwf30NxCFvAzI0RlfJ6Tlx1hFpMg&oe=61DBB2BE"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselEventos;
