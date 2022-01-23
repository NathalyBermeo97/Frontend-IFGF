import React, { useEffect, useState } from "react";
import { ListOfDonations } from "../../components/ListOfDonations";
import { withPrivate } from "../../hocs/withPrivate";
import { useDonation } from "../../hooks/useDonation";
import styles from "../../styles/indexHome.module.css";
import { FormControl, InputGroup } from "react-bootstrap";

const MyDonationsPage = () => {
  const { userDonations } = useDonation();
  const [keyword, setKeyword] = useState("");
  const [filteredDonations, setFilteredDonations] = useState([]);

  useEffect(() => {
    const filteredDonations = userDonations?.filter((ni) =>
      ni.type.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredDonations(filteredDonations);
  }, [keyword, userDonations]);

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

  return (
    <>
      <div>
        <h1 className={styles.section}>Mis donaciones</h1>
        <div className={styles.linea}></div>
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
      <br />
      <ListOfDonations donations={filteredDonations} />;
    </>
  );
};

export default withPrivate(MyDonationsPage);
