import { Card, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

export const Videoscards = ({ videos }) => {
    return (
        <Col
            style={{
                justifyContent: "center",
                display: "flex",
            }}
        >
            <Card style={{ width: "30em",height: "30em" }}>
                <ReactPlayer
                    url={videos.url}
                    className="react-player"
                    controls
                    width="30em"
                    height="25em"
                />
                <Card.Body>
                    <Card.Body>
                        <Card.Title>{videos.title}</Card.Title>
                        <Card.Text>{videos.description}</Card.Text>
                    </Card.Body>
                </Card.Body>
            </Card>
        </Col>
    );
};