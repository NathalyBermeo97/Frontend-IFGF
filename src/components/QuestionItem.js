import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";

export const QuestionItem = ({
  question,
  options,
  selected,
  isReport = false,
}) => {
  const [answer, setAnswer] = useState(options);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (answer.length === 1) {
      setIsDisabled(true);
    }
  }, [answer]);
  console.log({ Selectedanswer: question.selectedAnswer });

  return (
    <ListGroup.Item>
      <p>¿{question.title}?</p>
      {answer.map((option) => (
        <>
          <Button
            key={option}
            size="sm"
            style={{ marginRight: "5px", marginTop: "5px" }}
            onClick={() => {
              !isReport && (setAnswer([option]), selected(option));
            }}
            disabled={isDisabled}
          >
            {isReport && option === question.selectedAnswer && (
              <>
              <Badge bg="secondary">tu respuesta </Badge>{question.selectedAnswer === question.answer ? '' : '❌'}
              </>
            )}
            {option === question.answer && isReport ? `✔ ${option}` : option}
          </Button>
        </>
      ))}
    </ListGroup.Item>
  );
};
