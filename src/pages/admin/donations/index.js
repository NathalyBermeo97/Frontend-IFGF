import { useState } from "react";
import { ListOfDonations } from "../../../components/ListOfDonations";
import { UpdateDonationModal } from "../../../components/UpdateDonationModal";
import { withPrivate } from "../../../hocs/withPrivate";
import { useDonation } from "../../../hooks/useDonation";

const donationPage = () => {
  const { donations, updateDonation, setDonations } = useDonation();
  const [isOpen, setIsOpen] = useState(false);
  const [donation, setDonation] = useState({});

  const onShowModal = (donation) => {
    setDonation(donation);
    setIsOpen(true);
  };


  const updateDonationStatus = (data) => {
    updateDonation(data._id, data)
      .then((newDonation) => {
        if (newDonation) {
          const newDonations = donations.map((donation) =>
            donation._id === data._id ? data : donation
          );
          setDonations(newDonations);
          setIsOpen(false)
        }
      })
      .catch((e) => console.log("something went wrong", e));
  };

  return (
    <>

      <ListOfDonations
        donations={donations}
        onShowModal={onShowModal}
      />
      <UpdateDonationModal
        isOpen={isOpen}
        donation={donation}
        setIsOpen={setIsOpen}
        updateDonation={updateDonationStatus}
      />
    </>
  );
};

export default withPrivate(donationPage);
