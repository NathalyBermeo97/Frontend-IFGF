import { Button, Card, Col } from "react-bootstrap";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/routes";
import { useGames } from "../../hooks/useGames";
import { QuestionnairesGamesModal } from "../QuestionnairesGamesModal";
import { useState } from "react";

export const QuestionnaireItem = ({ questionnaire, onShowDeleteModal }) => {
  const token = window.localStorage.getItem("jwt");
  const router = useRouter();
  const questionsNumber = questionnaire.questions.length;
  const { hasAlreadyAttemptedGame, getQuestionnairesGames } = useGames();
  const existsAttempt = hasAlreadyAttemptedGame(questionnaire._id);
  const isTryingAgain = existsAttempt ? true : false;
  const questionnairesGames = getQuestionnairesGames(questionnaire._id);
  const [isOpen, setIsOpen] = useState(false)
  console.log({ questionnairesGames });
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
                  onClick={() =>
                    router.push(
                      ROUTES.UPDATE_QUESTIONNAIRE(questionnaire._id, token)
                    )
                  }
                >
                  Editar
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => onShowDeleteModal(questionnaire._id)}
                >
                  Eliminar
                </Button>
                <Button
                  size="sm"
                  variant="success"
                  onClick={() => setIsOpen(true)}
                >
                  Ver usuarios
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                onClick={() =>
                  router.push(
                    ROUTES.GAME(questionnaire._id, token, isTryingAgain)
                  )
                }
                variant={existsAttempt ? "success" : "primary"}
              >
                {existsAttempt ? "Intentar de nuevo" : "Intentar"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
      <QuestionnairesGamesModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        questionnairesGames={questionnairesGames}
      />
    </Col>
  );
};
