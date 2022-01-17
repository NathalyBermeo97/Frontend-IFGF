import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { ListOfQuestionnaires } from "../../../components/ListOfQuestionnaires";
import { ROUTES } from "../../../constants/routes";
import { withPrivate } from "../../../hocs/withPrivate";
import { useQuestionnaire } from "../../../hooks/useQuestionnaire";
import styles from './style.module.css'

const Questionnaires = () => {
  const { questionnaires } = useQuestionnaire();
  const router = useRouter()
  return (
    <>
      <div className={styles.header}>
        <h2>Cuestionarios</h2>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => router.push(ROUTES.CREATE_QUESTIONNAIRE)}
        >
          Crear
        </Button>
      </div>
      <ListOfQuestionnaires questionnaires={questionnaires} />
    </>
  );
};

export default withPrivate(Questionnaires);
