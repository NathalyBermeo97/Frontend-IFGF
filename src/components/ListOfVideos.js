import React from "react";
import {Button, Container, ListGroup, Row} from "react-bootstrap";
import {VideosItem} from "./VideosItem";

export const ListOfVideos = ({ videos, onShowModal, onShowEditModal,onShowDeleteModal }) => {

    return (
        <Container>
            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px 0px",
                }}
            >
                {videos?.map((videos) => (
                    <VideosItem
                        key={videos._id}
                        videos={videos}
                        onShowModal={onShowModal}
                        onShowEditModal={onShowEditModal}
                        onShowDeleteModal={onShowDeleteModal}
                    />
                ))}
            </Row>
        </Container>
    );
};