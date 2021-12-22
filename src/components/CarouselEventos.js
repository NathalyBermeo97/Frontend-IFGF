import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselEventos = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/p843x403/262329777_5263674716995618_2238961071265280498_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=a26aad&_nc_ohc=5zVOZenQAlkAX-Dbgr1&_nc_ht=scontent.fuio1-1.fna&oh=00_AT-sQ1ixwSrzDI-eLqDGfVO7N9bXIfG6JzavyGWZUH2QGA&oe=61C1F0B5"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/p843x403/261171727_5256969394332817_5029606730700516067_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=xtTm3hDYhOoAX-FtawB&tn=Wkw3FJ9iNf8T3MBj&_nc_ht=scontent.fuio1-2.fna&oh=00_AT9wSD_sOD67nsg_tyRQCqgj1kp3BEmp2lNuadDGHJjPVQ&oe=61C27DF8"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/259247563_5232848776744879_4046525577728682851_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_ohc=UcZpLDPlV6cAX8W-BOU&_nc_ht=scontent.fuio1-1.fna&oh=00_AT835byANaLhRj8eSj-4CLVzwZB1ws9Lqav17vAS8ZAZmA&oe=61C16B9F"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselEventos;
