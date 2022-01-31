import React from "react";
import { Button } from "react-bootstrap";
import {useRouter} from 'next/router'
import styles from "../pages/admin/albums/styles.module.css";
import { ListOfQuestions } from "./ListOfQuestions";
import {ROUTES} from '../constants/routes'

export const Result = ({ score, length, playAgain, questionnaire }) => {
  const router = useRouter();
  return (
    <>
      <h1 style={{ margin: "10px", textAlign: "center" }}>
        Tu puntaje es : {score}/{length}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ margin: "10px" }}
          onClick={playAgain}
          variant="success"
        >
          Intentar de nuevo
        </Button>
        <Button
          style={{ margin: "10px" }}
          onClick={() => router.push(ROUTES.QUESTIONNAIRES)}
          variant="success"
        >
          Buscar otro cuestionario
        </Button>
      </div>
      <ListOfQuestions questions={questionnaire.questions} isReport={true} />
    </>
  );
};
