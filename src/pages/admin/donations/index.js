import React, { useState } from "react";
import { ListOfDonations } from "../../../components/ListOfDonations";
import { UpdateDonationModal } from "../../../components/UpdateDonationModal";
import { withPrivate } from "../../../hocs/withPrivate";
import { useDonation } from "../../../hooks/useDonation";
import styles from "../events/styles.module.css";
import {
  Col,
  Container,
  FormSelect,
  Row,
} from "react-bootstrap";
import { useFilter } from "../../../hooks/useFilter";

const DonationPage = () => {
  const { donations, updateDonation, setDonations } = useDonation();
  const [isOpen, setIsOpen] = useState(false);
  const [donation, setDonation] = useState({});

  const { newItems: filteredDonations, registerInput, selects } = useFilter(donations);

  const onShowModal = (donation) => {
    setDonation(donation);
    setIsOpen(true);
  };

  const updateDonationStatus = (data) => {
    console.log({ data });
    updateDonation(data._id, data)
      .then((newDonation) => {
        if (newDonation) {
          const newDonations = donations.map((donation) =>
            donation._id === data._id ? data : donation
          );
          setDonations(newDonations);
          setIsOpen(false);
        }
      })
      .catch((e) => console.log("something went wrong", e));
  };

  return (
    <>
      <Container>
        <div>
          <div className={styles.events}>
            <h1 className={styles.section}>Gestión de donaciones</h1>
            <div className={styles.linea}></div>
          </div>
        </div>
        <div className={styles.info}>
          <p>
            En esta sección se visualiza las donaciones realizadas por el
            usuario miembro de la Iglesia IFGF
          </p>
        </div>

        <Row>
          <Col>
            <div style={{ padding: "15px" }}>
              <FormSelect
                aria-label="Default select example"
                {...registerInput('type')}
              >
                <option value="ropa">Ropa</option>
                <option value="comida">Comida</option>
                <option value="dinero">Dinero</option>
                <option value="">
                  {selects.type ? "Todos" : "Tipos de donación"}
                </option>
              </FormSelect>
            </div>
          </Col>
          <Col>
            <div style={{ padding: "15px" }}>
              <FormSelect
                aria-label="Default select example"
                {...registerInput('status')}
              >
                <option value="aceptado">Aceptado</option>
                <option value="denegado">Denegado</option>
                <option value="undefined">Sin definir</option>
                <option value="">
                  {selects.status ? "Todos" : "Estados de la donación"}
                </option>
              </FormSelect>
            </div>
          </Col>
        </Row>

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
      </Container>
    </>
  );
};

export default withPrivate(DonationPage);
