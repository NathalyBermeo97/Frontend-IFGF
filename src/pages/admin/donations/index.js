import React, {useEffect, useState} from "react";
import { ListOfDonations } from "../../../components/ListOfDonations";
import { UpdateDonationModal } from "../../../components/UpdateDonationModal";
import { withPrivate } from "../../../hocs/withPrivate";
import { useDonation } from "../../../hooks/useDonation";
import styles from "../events/styles.module.css";
import {Button, FormControl, InputGroup} from "react-bootstrap";

const donationPage = () => {
  const { donations, updateDonation, setDonations } = useDonation();
  const [isOpen, setIsOpen] = useState(false);
  const [donation, setDonation] = useState({});
  const [keyword, setKeyword] = useState("");
  const [filteredDonations, setFilteredDonations] = useState([]);

    useEffect(() => {
        const filteredDonations = donations?.filter((ni) =>
            ni.type.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredDonations(filteredDonations);
    }, [keyword, donations]);

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
        <div >
            <div className={styles.events}>
                <h1 className={styles.section}>Gestión de donaciones</h1>
                <div className={styles.linea}></div>
            </div>
        </div>

        <InputGroup style={{ padding: "15px" }}>
            <FormControl
                placeholder="Buscar donación"
                aria-label="search_new"
                aria-describedby="basic-addon1"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
        </InputGroup>

      <ListOfDonations
          donations={filteredDonations}
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
