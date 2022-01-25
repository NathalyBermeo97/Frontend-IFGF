import { useRouter } from "next/router";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import { ListOfQuestionnaires } from "../../../components/ListOfQuestionnaires";
import { ROUTES } from "../../../constants/routes";
import { withPrivate } from "../../../hocs/withPrivate";
import { useQuestionnaire } from "../../../hooks/useQuestionnaire";
import styles from "./style.module.css";
import React, {useState} from "react";
import {SERVER_RESPONSE} from "../../../constants/inidex";
import {ConfirmModal} from "../../../components/ConfirmModal";


const Questionnaires = () => {
  const { questionnaires ,setQuestionnaires,deleteQuestionnaire} = useQuestionnaire();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [eventId, setEventId] = useState(null);
  const router = useRouter();



    const handleDelete = (id) => {
        deleteQuestionnaire(id).then((data) => {
            console.log({data})
            if (data.message === SERVER_RESPONSE.DELETED_MESSAGES){

                const newQuestionnaires = questionnaires.filter((questionnaire) => questionnaire._id !== id);
                setQuestionnaires(newQuestionnaires);
            }
        });
        setShowDeleteModal(false)
    };
    const onConfirm = () => {
        handleDelete(eventId);
    };

    const onShowDeleteModal = (eventId) => {
        setShowDeleteModal(true);
        setEventId(eventId);
        //confirm({onOk: () => handleDelete(eventId)})
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

      <ListOfQuestionnaires questionnaires={questionnaires}   onShowDeleteModal={onShowDeleteModal}/>
        <ConfirmModal
            isOpen={showDeleteModal}
            confirm={onConfirm}
            setIsOpen={setShowDeleteModal}
            item='cuestionario'
        />
    </>
  );
};

export default withPrivate(Questionnaires);
