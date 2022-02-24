import { ListOfQuestionnaires } from "../../components/ListOfQuestionnaires";
import { useQuestionnaire } from "../../hooks/useQuestionnaire";
import styles from "../questionnaires/styles.module.css";
import {Container, FormControl, InputGroup} from "react-bootstrap";
import React from "react";
import { withPrivate } from "../../hocs/withPrivate";
import { useFilter } from "../../hooks/useFilter";

const Questionnaires = () => {
  const { questionnaires } = useQuestionnaire();
  const { newItems: filteredQuestionnaires, registerInput } = useFilter(
    questionnaires,
  );
  return (
    <>
      <Container>
        <div className={styles.events}>
          <h1 className={styles.section}>Cuestionarios</h1>
          <div className={styles.linea}></div>
        </div>
        <div className={styles.info}>
          <p>
            En esta sección puede visualizar y realizar cuestionarios referentes a la Iglesia IFGF
          </p>
        </div>
        <InputGroup style={{ padding: "15px" }}>
          <FormControl
            placeholder="Buscar cuestionario"
            aria-label="search_new"
            aria-describedby="basic-addon1"
            {...registerInput("name")}
          />
        </InputGroup>

        <ListOfQuestionnaires questionnaires={filteredQuestionnaires} />
      </Container>
    </>
  );
};

export default withPrivate(Questionnaires);
