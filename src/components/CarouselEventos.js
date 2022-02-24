import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../styles/indexHome.module.css";

const CarouselEventos = () => {
  return (
    <Carousel style={{ width: '28rem' }}>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/274466494_5572269006136186_4134547737540987140_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Iwj4Z3K-Do8AX_46JjT&_nc_ht=scontent.fuio1-1.fna&oh=00_AT8z9OHzSMiFKn4e4zZNRkKUHUWgYFwnLet_wJaU0WELxw&oe=621D78F6"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/273944668_5549339075095846_8834170697654786272_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=XnkU0wXspv0AX_UrQIH&_nc_ht=scontent.fuio1-2.fna&oh=00_AT_Qh6DvRKwxvHCJZh2jmdJcPNYDcMFswotGh5KWYkMv1Q&oe=621BAB21"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/273388471_5526876984008722_6051769769783718624_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_ohc=r3pQlUVbLvMAX8Jm-6I&_nc_oc=AQnfz-XTtYbGsaPZda7lEc5KEd3ivRzyqcV1OPdWpy8IIyXw1fK-joiRqC6hEevcaE4i6V2PDXoULV4LG9srZLMT&_nc_ht=scontent.fuio1-1.fna&oh=00_AT_vpClL1bpUblkm9hZdMKJCzrXoD4jHBs2WST_iSSpQew&oe=621CF694"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselEventos;
