import { withPrivate } from "../../../../hocs/withPrivate";
import QuestionnaireForm from "../../../../components/QuestionnaireForm";

const CreateQuestionnaire = () => {
  return <QuestionnaireForm action="create" />;
};

export default withPrivate(CreateQuestionnaire);
