import { useRouter } from "next/router";
import { Button, Card, Form } from "react-bootstrap";
import { ROUTES } from "../../../../constants/routes";
import { withPrivate } from "../../../../hocs/withPrivate";
import styles from "./style.module.css";
import { useState } from "react";

const QUESTIONS = {
  questionName: "question1",
  optionName: "question1Option1",
};

const CreateQuestionnaire = () => {
  const router = useRouter();
  const handleSubmit = () => {};
  const onSubmit = () => {};
  const [questionsGroup, setQuestionsGroup] = useState([QUESTIONS]);
  console.log({questionsGroup})

  const addQuestion = () => {
    const length = questionsGroup.length;
    const newQuestion = {
      questionName: `question${length + 1}`,
      optionName: `question${length + 1}Option1`,
    };
    setQuestionsGroup((prevState) => [...prevState, newQuestion]);
  };

  return (
    <>
      <div className={styles.header}>
        <h2>Creación de cuestionarios</h2>
        <Button variant="primary" size="sm" onClick={() => {}}>
          Crear
        </Button>
      </div>

      <Form
        id="create-questionnaire-form"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <Form.Group className={styles.groupForm}>
          <Form.Control
            type="text"
            placeholder="Título del cuestionario"
            //{...register("title")}
            //isInvalid={!!errors.title?.message}
          />
          {/* <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback> */}
        </Form.Group>
        {questionsGroup.map((question, id) => {
          return (
            <Form.Group className={styles.groupForm} key={id}>
              <Form.Control
                type="text"
                placeholder="Pregunta"
                name={question.questionName}
              />
              <Form.Control
                style={{marginTop: '8px'}}
                type="text"
                placeholder="Opción 1"
                name={question.optionName}
              />
              {id === questionsGroup.length - 1 ? (
                <Button size="sm" style={{ marginTop: "10px" }} onClick={addQuestion}>
                  Añadir pregunta
                </Button>
              ) : (
                ""
              )}
            </Form.Group>
          );
        })}
      </Form>
    </>
  );
};

export default withPrivate(CreateQuestionnaire);
