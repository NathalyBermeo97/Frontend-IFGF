import { Col, Container, Row } from "react-bootstrap";
import { ListOfDonations } from "../../../components/ListOfDonations";
import { withPrivate } from "../../../hocs/withPrivate";
import { useDonation } from "../../../hooks/useDonation";

const donationPage = () => {
  const { donations, updateDonation, setDonations } = useDonation();

  const updateDonationStatus = (accion, data) => {
    const changedDonation = {
      ...data,
      status: accion,
    };
    updateDonation(data._id, changedDonation)
      .then((newDonation) => {
        if (newDonation) {
          const newDonations = donations.map((donation) =>
            donation._id === changedDonation._id ? changedDonation : donation
          );
          setDonations(newDonations);
        }
      })
      .catch((e) => console.log("something went wrong", e));
  };

  return (
    <ListOfDonations
      donations={donations}
      updateDonationStatus={updateDonationStatus}
    />
  );
};

export default withPrivate(donationPage);
