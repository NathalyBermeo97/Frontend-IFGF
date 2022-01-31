import { Button, Card, Col } from "react-bootstrap";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/routes";
import React from "react";

export const QuestionnaireItem = ({ questionnaire,onShowDeleteModal }) => {
  const token = window.localStorage.getItem('jwt')
  const router = useRouter();
  const questionsNumber = questionnaire.questions.length;
  return (
    <Col
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Card className={styles.Qcard}>
        <Card.Img
          variant="top"
          src="https://themarketingresultsblog.com/wp-content/uploads/2020/11/Questionnaire-1200x720-1.png"
        />
        <Card.Body>
          <Card.Title>{questionnaire.name}</Card.Title>
          <Card.Text>🔢 Número de preguntas: {questionsNumber}</Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0px 5px",
            }}
          >

            {router.pathname.startsWith(ROUTES.ADMIN) ? (
              <>
                  <Button
                      size="sm"
                      variant="primary"
                      onClick={() => router.push(ROUTES.UPDATE_QUESTIONNAIRE(questionnaire._id, token))}
                  >
                      Editar
                  </Button>
                  <Button
                      size="sm"
                      variant="danger"
                      onClick={() => onShowDeleteModal(questionnaire._id)}
                  >
                      Eliminar
                  </Button></>
            ) : (
              <Button
                size="sm"
                onClick={() => router.push(ROUTES.GAME(questionnaire._id, token))}
              >
                Intentar
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
