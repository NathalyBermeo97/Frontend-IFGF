import { ListOfQuestionnaires } from "../../components/ListOfQuestionnaires";
import { withPrivate } from "../../hocs/withPrivate";
import { useQuestionnaire } from "../../hooks/useQuestionnaire";

const Questionnaires = () => {
  const {questionnaires} = useQuestionnaire()
  console.log({ questionnaires });
  return <ListOfQuestionnaires questionnaires={questionnaires}/>
};

export default withPrivate(Questionnaires);
