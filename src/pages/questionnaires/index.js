import { ListOfQuestionnaires } from "../../components/ListOfQuestionnaires";
import { useQuestionnaire } from "../../hooks/useQuestionnaire";
import styles from "../donations/styles.module.css";
import {FormControl, InputGroup} from "react-bootstrap";
import React from "react";
import {withPrivate} from "../../hocs/withPrivate";

const Questionnaires = () => {
  const { questionnaires } = useQuestionnaire();
  console.log({ questionnaires });

  return (
    <>
      <div className={styles.events}>
        <h1 className={styles.section}>Cuestionarios</h1>
        <div className={styles.linea}></div>
      </div>
        <InputGroup style={{ padding: "15px" }}>
            <FormControl
                placeholder="Buscar cuestionario"
                aria-label="search_new"
                aria-describedby="basic-addon1"

            />
        </InputGroup>

      <ListOfQuestionnaires questionnaires={questionnaires} />
    </>
  );
};

export default withPrivate(Questionnaires);
