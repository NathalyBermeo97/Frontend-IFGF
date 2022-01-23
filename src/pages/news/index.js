import React, { useEffect, useState } from "react";
import { useNews } from "../../hooks/useNews";
import {
  Col,
  Row,
  Button,
  Container,
  Card,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import styles from "../../styles/events.module.css";
import News from "../../components/News";

const HomeNews = ({}) => {
  const { news } = useNews();

  return (
    <>
      <div className={styles.news}>
        <h1 className={styles.section}>Noticias</h1>
        <div className={styles.linea}></div>
      </div>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px 0px",
          }}
        >
          <Col>
            <News news={news} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeNews;
