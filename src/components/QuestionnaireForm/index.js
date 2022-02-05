import { useRouter } from "next/router";
import { Badge, Button, Form } from "react-bootstrap";
import { ROUTES } from "../../constants/routes";
import { withPrivate } from "../../hocs/withPrivate";
import styles from "./style.module.css";
import { useState } from "react";
import { useQuestionnaire } from "../../hooks/useQuestionnaire";
import swal from "sweetalert";

const QUESTION = {
  title: "Pregunta",
  options: ["Opción 1"],
  answer: "",
};

const state = [QUESTION];

const CreateQuestionnaire = ({ action, questions = state, title = "", id }) => {
  const router = useRouter();
  const [questionsGroup, setQuestionsGroup] = useState(questions);
  const [questionnaireTitle, setQuestionnaireTitle] = useState(title);
  const { createQuestionnaire, updateQuestionnaire } = useQuestionnaire();

  const addQuestion = (questionId) => {
    let newQuestions = [...questionsGroup];
    newQuestions.splice(questionId + 1, 0, QUESTION);
    setQuestionsGroup(newQuestions);
  };

  const addOption = (questionId) => {
    const question = questionsGroup.find((_, qI) => qI === questionId);
    const options = [...question.options];
    options.push(`Opción ${options.length + 1}`);
    const newQuestion = {
      ...question,
      options,
    };
    const newQuestions = questionsGroup.map((question, id) => {
      return id === questionId ? newQuestion : question;
    });
    setQuestionsGroup(newQuestions);
  };

  const deleteOption = (questionId, optionId) => {
    const question = questionsGroup.find((_, i) => i === questionId);
    const newOptions = question.options.filter((_, opI) => opI !== optionId);
    const newQuestion = {
      ...question,
      options: newOptions,
    };
    const newQuestions = questionsGroup.map((question, id) => {
      return id === questionId ? newQuestion : question;
    });
    setQuestionsGroup(newQuestions);
  };

  const deleteQuestion = (questionId) => {
    const newQuestions = [...questionsGroup];
    newQuestions.splice(questionId, 1);
    setQuestionsGroup(newQuestions);
  };

  const handleQuestionTitleChange = (value, questionId) => {
    const newQuestions = questionsGroup.map((question, id) => {
      return id === questionId
        ? {
          ...question,
          title: value,
        }
        : question;
    });
    setQuestionsGroup(newQuestions);
  };

  const handleQuestionOptionChange = (value, questionId, optionId) => {
    const newQuestions = questionsGroup.map((question, qId) => {
      if (qId === questionId) {
        const newOptions = question.options.map((option, opI) => {
          return opI === optionId ? value : option;
        });
        return {
          ...question,
          options: newOptions,
        };
      } else {
        return question;
      }
    });
    setQuestionsGroup(newQuestions);
  };

  const handleCorrectAnswerSelectChange = (value, questionId) => {
    const newQuestions = questionsGroup.map((question, id) => {
      return id === questionId ? { ...question, answer: value } : question;
    });
    setQuestionsGroup(newQuestions);
  };

  const handleSubmit = (action) => {
    if (questionnaireTitle === '') return swal('Oops', "Ingresar título del cuestionario", 'error');

    const newQuestionsGroup = questionsGroup.map((question) => {
      return question.answer
        ? question
        : { ...question, answer: question.options[0] };
    });
    const questionnaire = {
      name: questionnaireTitle,
      questions: newQuestionsGroup,
    };

    switch (action) {
      case "create":
        createQuestionnaire(questionnaire)
          .then((data) => {
            console.log({ data });
            //setQuestionnaires(prevState => [...prevState, data])
            swal("Cuestionario creado exitosamente");
            router.push(ROUTES.ADMIN_QUESTIONNAIRES);
          })
          .catch((e) =>
            console.log("error", e),//swal("Ya existe un registro creado con este título")
          );

        break;
      case "update":
        updateQuestionnaire(id, questionnaire)
          .then((data) => {
            console.log({ data });
            //setQuestionnaires(prevState => [...prevState, data])
            swal("Cuestionario actualizado exitosamente");
            router.push(ROUTES.ADMIN_QUESTIONNAIRES);
          })
          .catch((e) => console.log("error", e));

      default:
        () => console.log("an action must be pass");
    }
  };

  return (
    <>
      <div className={styles.header}>
        <h2>Creación de cuestionarios</h2>
        <Button
          variant="primary"
          size="sm"
          onClick={() => handleSubmit(action)}
        >
          {action === "create"
            ? "Crear cuestionario"
            : "Actualizar cuestionario"}
        </Button>
      </div>

      <div id="create-questionnaire-form" className={styles.form}>
        <Form.Group className={styles.groupForm}>
          <Form.Control
            type="text"
            placeholder="Título del cuestionario"
            value={questionnaireTitle}
            onChange={({ target }) => setQuestionnaireTitle(target.value)}
          />
        </Form.Group>
        {questionsGroup.map((question, questionId) => {
          return (
            <Form.Group className={styles.groupForm} key={questionId}>
              <Form.Control
                type="text"
                placeholder="Pregunta"
                value={question.title}
                onChange={({ target }) =>
                  handleQuestionTitleChange(target.value, questionId)
                }
              />
              {question.options.map((option, optionId) => {
                return (
                  <div key={optionId}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p
                        style={{
                          padding: "5px",
                          margin: "0px",
                          alignSelf: "center",
                        }}
                      >
                        🅾
                      </p>
                      <Form.Control
                        style={{ marginTop: "8px" }}
                        type="text"
                        value={option}
                        onChange={({ target }) =>
                          handleQuestionOptionChange(
                            target.value,
                            questionId,
                            optionId
                          )
                        }
                      />
                      {optionId !== 0 ? (
                        <p
                          className={styles.deleteOption}
                          onClick={() => deleteOption(questionId, optionId)}
                        >
                          X
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    {optionId === question.options.length - 1 &&
                      optionId < 3 ? (
                      <Badge
                        bg="success"
                        style={{
                          marginLeft: "30px",
                          marginTop: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => addOption(questionId)}
                      >
                        Añadir opción
                      </Badge>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
              <Form.Group style={{ paddingTop: "5px" }}>
                <Form.Label>Respuesta correcta</Form.Label>
                <Form.Select
                  onChange={({ target }) =>
                    handleCorrectAnswerSelectChange(target.value, questionId)
                  }
                  value={question.answer || question.options[0]}
                >
                  {question.options.map((option, id) => (
                    <option value={option} key={id}>
                      {option}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <br />
              <div>
                <Button
                  size="sm"
                  style={{ marginRight: "10px" }}
                  onClick={() => addQuestion(questionId)}
                >
                  Añadir pregunta
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteQuestion(questionId)}
                >
                  Eliminar pregunta
                </Button>
              </div>
            </Form.Group>
          );
        })}
      </div>
    </>
  );
};

export default withPrivate(CreateQuestionnaire);
