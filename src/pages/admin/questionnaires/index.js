import { useRouter } from "next/router";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import { ListOfQuestionnaires } from "../../../components/ListOfQuestionnaires";
import { ROUTES } from "../../../constants/routes";
import { withPrivate } from "../../../hocs/withPrivate";
import { useQuestionnaire } from "../../../hooks/useQuestionnaire";
import styles from "./style.module.css";
import React from "react";
import {SERVER_RESPONSE} from "../../../constants/inidex";


const Questionnaires = () => {
  const { questionnaires ,setQuestionnaires,deleteQuestionnaire} = useQuestionnaire();
  const router = useRouter();



    const handleDelete = (id) => {
        deleteQuestionnaire(id).then((data) => {
            console.log({data})
            if (data.message === SERVER_RESPONSE.DELETED_MESSAGES){

                const newQuestionnaires = questionnaires.filter((questionnaire) => questionnaire._id !== id);
                setQuestionnaires(newQuestionnaires);
            }

        });
    };


  return (
    <>
      <div>
        <div className={styles.events}>
          <h1 className={styles.section}>Gestión de cuestionarios</h1>
          <div className={styles.linea}></div>
        </div>
      </div>
        <InputGroup style={{ padding: "15px" }}>
            <FormControl
                placeholder="Buscar cuestionario"
                aria-label="search_new"
                aria-describedby="basic-addon1"

            />
        </InputGroup>

      <div className={styles.button}>
        <Button
            variant="info"
          size="sm"
          onClick={() => router.push(ROUTES.CREATE_QUESTIONNAIRE)}
        >
          Crear cuestionario
        </Button>
      </div>

      <ListOfQuestionnaires questionnaires={questionnaires}  handleDelete={handleDelete}/>
    </>
  );
};

export default withPrivate(Questionnaires);
