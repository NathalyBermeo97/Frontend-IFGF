import { Container, Row} from "react-bootstrap";
import { Videoscards } from "./Videoscards";


export const ListOfVideosPage = ({ videos}) => {
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
                    <Videoscards
                        key={videos._id}
                        videos={videos}
                    />
                ))}
            </Row>
        </Container>
    );
};