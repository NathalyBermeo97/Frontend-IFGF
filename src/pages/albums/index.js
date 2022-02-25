import React, { useEffect, useState } from "react";
import { useAlbums } from "../../hooks/useAlbums";
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
import AlbumPage from "../../components/NewsPage";


const HomeAlbums = ({}) => {
    const { albums } = useAlbums();
    const [keyword, setKeyword] = useState("");
    const [filteredAlbums, setFilteredAlbums] = useState([]);

    useEffect(() => {
        const filteredAlbums = albums.filter((ni) =>
            ni.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredAlbums(filteredAlbums);
    }, [keyword, albums]);

    return (
        <>
            <div className={styles.news}>
                <h1 className={styles.section}>Álbum de fotos</h1>
                <div className={styles.linea}></div>
            </div>
            <Container>
                <InputGroup style={{ padding: "15px" }}>
                    <FormControl
                        placeholder="Buscar foto"
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
                        <AlbumPage news={filteredAlbums} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default HomeAlbums;
