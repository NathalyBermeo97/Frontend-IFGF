import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ListOfDonations } from "../../components/ListOfDonations";
import { withPrivate } from "../../hocs/withPrivate";
import { useDonation } from "../../hooks/useDonation";

const MyDonationsPage = (props) => {
  const { userDonations } = useDonation();
  console.log({ userDonations });
    console.log({props})
  return (
    <ListOfDonations donations={userDonations}/>
  );
};

export default withPrivate(MyDonationsPage);
