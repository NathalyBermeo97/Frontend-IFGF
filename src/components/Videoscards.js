import React, { useEffect, useState } from "react";
import styles from "../styles/videos.module.css";
import api from "../api/api";
import ReactPlayer from "react-player";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const Videoscards = ({ videos }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={10}>
            <Form.Control placeholder="Ingrese el nombre de un video" />
          </Col>
          <Col xs={2}>
            <Button variant="primary">
              <Search />
            </Button>
          </Col>
        </Row>
      </Container>
      <div className={styles.videos}>
        {videos.map((video) => (
          <Card key={video._id} className={styles.cardVideo}>
            <Card.Body>
              <Card.Title className={styles.title}>{video.title}</Card.Title>
              <div>{video.description}</div>
              <div>{video.type}</div>

              <ReactPlayer
                url={video.url}
                className="react-player"
                controls
                width="40em"
                height="25em"
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};
export default Videoscards;
export async function getStaticProps() {
  let videos = [];
  try {
    const response = await api.get("videos");
    console.log("response", response);
    videos = response.data.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      videos,
    },
  };
}
