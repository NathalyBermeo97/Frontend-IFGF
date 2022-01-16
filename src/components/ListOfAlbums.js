import React from "react";
import {Button, Container, ListGroup, Row} from "react-bootstrap";
import {AlbumsItem} from "./AlbumsItem";

export const ListOfAlbums = ({ albums, onShowModal,onShowEditModal }) => {
    return(
        <Container>
            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px 0px",
                }}
            >
                {albums?.map((albums) => (
                    <AlbumsItem
                        key={albums._id}
                        albums={albums}
                        onShowModal={onShowModal}
                        onShowEditModal={onShowEditModal}
                    />
                ))}
            </Row>
        </Container>
    )
};
