import { useState } from "react";
import { Button } from "react-bootstrap";
import api from "../../api/api";
import Game from "../../api/score";
import { ListOfQuestions } from "../../components/ListOfQuestions";
import { Result } from "../../components/Result";
import styles from "./style.module.css";

const GamePage = ({ questionsBank }) => {
  const [questionnaire, setQuestionnaire] = useState(questionsBank);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isPlayingAgain, setIsPlayingAgain] = useState(false)

  const computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore((prevState) => prevState + 1);
    }
    setResponses((prevState) => (prevState < 5 ? prevState + 1 : 5));
  };

  const playAgain = () => {
    setQuestionnaire(questionsBank);
    setScore(0);
    setResponses(0);
    setShowResult(false)
    setIsPlayingAgain(true)
  };

  const sendScore = async () => {
    try {
      const newGame = {questionary_id: questionnaire._id, score}
      // if(isPlayingAgain){
      //   const response = await Game.update(newGame)
      // }
      console.log({newGame})
      const response = await Game.create(newGame)
      if(response.data){
        swal('Cuestionario enviado')
      }
      setShowResult(true);
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  return (
    <section className={styles.questionnaireSection}>
      <header className={styles.header}>{questionnaire.name}</header>
      {!showResult && (
        <ListOfQuestions
          questions={questionnaire.questions}
          computeAnswer={computeAnswer}
        />
      )}
      {responses === questionnaire.questions.length && !showResult && (
        <Button variant="success" onClick={sendScore}>
          Finalizar
        </Button>
      )}
      {showResult && (
        <Result
          score={score}
          length={questionnaire.questions.length}
          playAgain={playAgain}
        />
      )}
    </section>
  );
};

export default GamePage;

export async function getServerSideProps(context) {
  const { id, token } = context.query;
  api.defaults.headers.common["x-access-token"] = token;
  try {
    const response = await api.get(`/questionaries/${id}`);
    const questionsBank = await response.data;
    return {
      props: { questionsBank },
    };
  } catch (e) {
    console.log("Something went wrong", e);
  }
}
