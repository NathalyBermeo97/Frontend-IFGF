import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import api from "../../api/api";
import { ListOfQuestions } from "../../components/ListOfQuestions";
import { Result } from "../../components/Result";
import swal from "sweetalert";
import styles from "./style.module.css";
import { useAuth } from "../../context/AuthContext";
import { useGames } from "../../hooks/useGames";
import Game from "../../api/score";

const GamePage = ({ questionsBank, isAttemptingAgain }) => {
  const [questionnaire, setQuestionnaire] = useState(questionsBank);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isPlayingAgain, setIsPlayingAgain] = useState(isAttemptingAgain);
  const {getUserQuestionnaireScore} = useGames()
  const {currentUser} = useAuth()
  const [gameId, setGameId] = useState(null)

  console.log({gameId})
  const computeAnswer = (answer, correctAnswer, questionId) => {
    if (answer === correctAnswer) {
      setScore((prevState) => prevState + 1);
    }
    const questions = questionnaire.questions.map((question, qId) => {
      return qId === questionId ? {...question, selectedAnswer: answer} : question
    })
    setQuestionnaire({...questionnaire, questions})
    setResponses((prevState) => (prevState < 5 ? prevState + 1 : 5));
  };

  const playAgain = async () => {
    setQuestionnaire(questionsBank);
    setScore(0);
    setResponses(0);
    setShowResult(false)
    setIsPlayingAgain(true)
    console.log('getUserScore', questionnaire._id, currentUser._id)
    //fix gameId problem when it's entered from list of questionnaires
  };

  useEffect(() => {
    const getGameId = async () => {
      const data = await getUserQuestionnaireScore(questionnaire._id, currentUser._id)
      setGameId(data[0]._id)
    }
    if(isPlayingAgain) getGameId()
  }, [])

  const sendScore = async () => {
    try {
      const newGame = {questionary_id: questionnaire._id, score}
      if(isPlayingAgain){
        const response = await Game.update(gameId, newGame)
        if(response.data){
          swal('Cuestionario actualizado')
        }
        setShowResult(true);
      }else{
        const response = await Game.create(newGame)
        if(response.data){
          swal('Cuestionario creado')
        }
        setShowResult(true);
      }
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
          questionnaire={questionnaire}
          playAgain={playAgain}
        />
      )}
    </section>
  );
};

export default GamePage;

export async function getServerSideProps(context) {
  const { id, token, isTryingAgain } = context.query;
  const isAttemptingAgain = isTryingAgain === 'true' ? true : false
  api.defaults.headers.common["x-access-token"] = token;
  try {
    const response = await api.get(`/questionaries/${id}`);
    const questionsBank = await response.data;
    return {
      props: { questionsBank, isAttemptingAgain },
    };
  } catch (e) {
    console.log("Something went wrong", e);
  }
}
