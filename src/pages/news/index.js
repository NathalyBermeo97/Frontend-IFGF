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
import NewsPage from "../../components/NewsPage";


const HomeNews = ({}) => {
  const { news } = useNews();
    const [keyword, setKeyword] = useState("");
    const [filteredNews, setFilteredNews] = useState([]);

    useEffect(() => {
        const filteredNews = news.filter((ni) =>
            ni.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredNews(filteredNews);
    }, [keyword, news]);

  return (
    <>
      <div className={styles.news}>
        <h1 className={styles.section}>Noticias</h1>
        <div className={styles.linea}></div>
      </div>
      <Container>
          <InputGroup style={{ padding: "15px" }}>
              <FormControl
                  placeholder="Buscar noticia"
                  aria-label="search_new"
                  aria-describedby="basic-addon1"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
              />
          </InputGroup>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px 0px",
          }}
        >
          <Col>
            <NewsPage news={filteredNews} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeNews;
