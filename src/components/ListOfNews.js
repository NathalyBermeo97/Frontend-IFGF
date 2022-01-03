import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const ListOfNews = ({newsItem, onShowModal}) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{newsItem.title}</div>
        {newsItem.description}
      </div>
      <Button size="sm" onClick={() => onShowModal(newsItem)}>
        ver
      </Button>
    </ListGroup.Item>
  );
};
