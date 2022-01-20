import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

export const QuestionItem = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if( answer.length === 1){
      setIsDisabled(true)
    }
  }, [answer])
  
  return (
    <ListGroup.Item>
      <p>¿{question.title}?</p>
      {answer.map((option) => (
        <Button
          key={option}
          size="sm"
          style={{ marginRight: "5px", marginTop: "5px" }}
          onClick={() => {
            setAnswer([option]);
            selected(option)
          }}
          disabled={isDisabled}
        >
          {option}
        </Button>
      ))}
    </ListGroup.Item>
  );
};
