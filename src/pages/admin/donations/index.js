import { Col, Container, Row } from "react-bootstrap";
import { ListOfDonations } from "../../../components/ListOfDonations";
import { withPrivate } from "../../../hocs/withPrivate";
import { useDonation } from "../../../hooks/useDonation";
import styles from "./style.module.css";

const donationPage = () => {
  const { donations, updateDonation, setDonations } = useDonation();

  const updateDonationStatus = (accion, data) => {
    const changedDonation = {
      ...data,
      status: accion,
    };
    updateDonation(data._id, changedDonation).then((newDonation) => {
        if(newDonation){
            const newDonations = donations.map((donation) =>
              donation._id === changedDonation._id ? changedDonation : donation
            );
            setDonations(newDonations);
        }
    }).catch(e => console.log('something went wrongggg', e))
  };

  return (
    <div>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px 0px",
          }}
        >
          {donations.map((donation) => (
            <Col
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <ListOfDonations
                key={donation._id}
                donation={donation}
                // onShowModal={onShowModal}
                // handleDelete={handleDelete}
                updateDonation={updateDonationStatus}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default withPrivate(donationPage);
