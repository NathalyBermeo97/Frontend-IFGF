import React from "react";
import { Container, Row } from "react-bootstrap";
import { EventItem } from "./EventItem";

export const ListOfEvents = ({
  events,
  onShowModal,
  onShowEditModal,
  onShowDeleteModal,
  getValues,
  onInsModal,
}) => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}
      >
        {events?.map((event) => (
          <EventItem
            key={event._id}
            event={event}
            onShowModal={onShowModal}
            onShowEditModal={onShowEditModal}
            onShowDeleteModal={onShowDeleteModal}
            getValues={getValues}
            onInsModal={onInsModal}
          />
        ))}
      </Row>
    </Container>
  );
};
