import React from "react";
import { ListOfDonations } from "../../components/ListOfDonations";
import { withPrivate } from "../../hocs/withPrivate";
import { useDonation } from "../../hooks/useDonation";

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

  return <ListOfDonations donations={userDonations} />;
};

export default withPrivate(MyDonationsPage);
