import { Col, Container, Row } from "react-bootstrap";
import { DonationItem } from "./DonationItem";

export const ListOfDonations = ({ donations, updateDonationStatus }) => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}
      >
        {donations.map((donation) => (
          <DonationItem
            key={donation._id}
            donation={donation}
            updateDonation={updateDonationStatus}
          />
        ))}
      </Row>
    </Container>
  );
};
