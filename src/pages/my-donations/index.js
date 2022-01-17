import React from "react";
import { ListOfDonations } from "../../components/ListOfDonations";
import { withPrivate } from "../../hocs/withPrivate";
import { useDonation } from "../../hooks/useDonation";
import styles from "../../styles/indexHome.module.css";
import {ListOfEvents_} from "../../components/ListOfEvents_";
import {EventModal} from "../../components/EventModal";

const MyDonationsPage = () => {
  const { userDonations } = useDonation();

  if (userDonations.length === 0)
    return (
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        SIN DONACIONES REGISTRADAS
      </h2>
    );


  return <>
      <div>
          <h1 className={styles.section}>Mis donaciones</h1>
          <div className={styles.linea}></div>
      </div>
      <br />
      <ListOfDonations donations={userDonations} />;

  </>

};

export default withPrivate(MyDonationsPage);
