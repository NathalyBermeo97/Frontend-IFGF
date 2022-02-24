import { ListOfDonations } from "../../components/ListOfDonations";
import { withPrivate } from "../../hocs/withPrivate";
import { useDonation } from "../../hooks/useDonation";
import styles from "../../styles/indexHome.module.css";
import { Container, FormSelect, InputGroup } from "react-bootstrap";
import { useFilter } from "../../hooks/useFilter";

const MyDonationsPage = () => {
  const { userDonations } = useDonation();

  const {
    newItems: filteredDonations,
    registerInput,
    selects,
  } = useFilter(userDonations);

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
    <Container>
      <div>
        <h1 className={styles.section}>Mis donaciones</h1>
        <div className={styles.linea}></div>
      </div>
      <br />
      <div className={styles.info}>
        <p>
          En esta sección puede visualizar las donaciones que ha realizado a la
          Iglesia IFGF
        </p>
      </div>
      <InputGroup style={{ padding: "15px" }}>
        <FormSelect {...registerInput("type")}>
          <option value="ropa">Ropa</option>
          <option value="comida">Comida</option>
          <option value="dinero">Dinero</option>
          <option value="">
            {selects.type ? "Todos" : "Tipos de donación"}
          </option>
        </FormSelect>
      </InputGroup>
      <ListOfDonations donations={filteredDonations} />
    </Container>
  );
};

export default withPrivate(MyDonationsPage);
