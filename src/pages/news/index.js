import React from "react";
import { useNews } from "../../hooks/useNews";
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import styles from "../../styles/events.module.css";
import NewsPage from "../../components/NewsPage";


const HomeNews = ({}) => {
  const { news } = useNews();

  return (
    <>
      <div className={styles.news}>
        <h1 className={styles.section}>Noticias</h1>
        <div className={styles.linea}></div>
      </div>
      <Container>
        <Row style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px 0px",
        }}>
          <Col
          >

             <NewsPage news={news}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeNews;
