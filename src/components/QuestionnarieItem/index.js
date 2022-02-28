import { Button, Card, Col } from "react-bootstrap";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { ROUTES } from "../../constants/routes";
import { useGames } from "../../hooks/useGames";
import { QuestionnairesGamesModal } from "../QuestionnairesGamesModal";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

export const QuestionnaireItem = ({ questionnaire, onShowDeleteModal }) => {
  const token = window.localStorage.getItem("jwt");
  const router = useRouter();
  const questionsNumber = questionnaire.questions.length;
  const { currentUser } = useAuth();
  const {
    hasAlreadyAttemptedGame,
    getQuestionnairesGames,
    getUserQuestionnaireScore,
  } = useGames();
  const existsAttempt = hasAlreadyAttemptedGame(questionnaire._id);
  const isTryingAgain = existsAttempt ? true : false;
  const questionnairesGames = getQuestionnairesGames(questionnaire._id);
  const [isOpen, setIsOpen] = useState(false);
  const [userScore, setUserScore] = useState(null);

  useEffect(() => {
    const getUserScore = async () => {
      const data = await getUserQuestionnaireScore(
        questionnaire._id,
        currentUser._id
      );
      setUserScore(data[0]?.score);
    };
    getUserScore();
  }, []);
  
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px 5px",
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
              <>
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
                {userScore === 0 ? (
                  <p>Nota final: {userScore}</p>
                ) : userScore ? (
                  <p>Nota final: {userScore}</p>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </Card.Body>
      </Card>
      <QuestionnairesGamesModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        questionnairesGames={questionnairesGames}
        length={questionnaire.questions.length}
      />
    </Col>
  );
};
