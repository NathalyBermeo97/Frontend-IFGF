import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { QuestionItem } from "./QuestionItem";

export const ListOfQuestions = ({questions, computeAnswer}) => {
  return (
    <ListGroup>
      {questions.map((question) => (
        <QuestionItem key={question._id} question={question} options={question.options} selected={answer => computeAnswer(answer, question.answer)}/>
      ))}
    </ListGroup>
  );
};
