import React from "react";
import api from "../../../../api/api";
import QuestionnaireForm from "../../../../components/QuestionnaireForm";

export default function UpdateQuestionnaire({ questionsBank }) {
  return (
    <QuestionnaireForm
      title={questionsBank.name}
      questions={questionsBank.questions}
      action="update"
      id={questionsBank._id}
    />
  );
}

export async function getServerSideProps(context) {
  const { id, token } = context.query;
  api.defaults.headers.common["x-access-token"] = token;
  try {
    const response = await api.get(`/questionaries/${id}`);
    const questionsBank = await response.data;
    return {
      props: { questionsBank },
    };
  } catch (e) {
    console.log("Something went wrong", e);
  }
}
