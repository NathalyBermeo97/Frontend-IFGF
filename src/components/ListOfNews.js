import React from "react";
import {Button, Container, ListGroup, Row} from "react-bootstrap";
import {NewsItem} from "./NewsItem";

export const ListOfNews = ({ news, onShowModal,onShowEditModal,handleDelete }) => {
    return(
        <Container>
          <Row
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px 0px",
              }}
          >
            {news?.map((news) => (
                <NewsItem
                    key={news._id}
                    news={news}
                    onShowModal={onShowModal}
                    onShowEditModal={onShowEditModal}
                    handleDelete={handleDelete}
                />
            ))}
          </Row>
        </Container>
    )
};
