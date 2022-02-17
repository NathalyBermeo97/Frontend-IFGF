import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const URL = "https://backend-ifgf.herokuapp.com/";
import api from "../api/api";
import { Card, Container, Row } from "react-bootstrap";

const Albums = ({ albums }) => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}
      >
        <h1>Álbum de fotos</h1>

        {albums.slice(0,3).map((item) => (
          <Card
            key={item._id}
            style={{ width: "28rem" ,margin:"20px"}}
            className="bg-dark text-white"

          >
              <Card.Img
                  src={URL+item.imgURL}
                  alt="Card image"
                  style={{display:"flex"}}
              />
          </Card>
        ))}
      </Row>
    </Container>
  );
};
export default Albums;
export async function getStaticProps() {
  let albums = [];
  try {
    const response = await api.get("albums");
    console.log("response", response);
    albums = response.data.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      albums,
    },
  };
}
