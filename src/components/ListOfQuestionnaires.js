import React from "react";
import { Container, Row } from "react-bootstrap";
import { QuestionnaireItem } from "./QuestionnarieItem";

export const ListOfQuestionnaires = ({questionnaires,handleDelete}) => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px 0px",
        }}
      >
        {questionnaires?.map((questionnaire) => (
          <QuestionnaireItem
            key={questionnaire._id}
            questionnaire={questionnaire}
            handleDelete={handleDelete}
          />
        ))}
      </Row>
    </Container>
  );
};
