"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useExamStore from "@/app/(exam)/stores/useExamStore";
import WorkP1Card from "./component/WorkP1Card";

const WorkP1Page = () => {
  const router = useRouter();
  const {
    initializeExam,
    getCurrentQuestion,
    getHexacoChoices,
    currentQuestion,
    setAnswer,
    answers,
  } = useExamStore();

  const currentQuestionData = getCurrentQuestion();
  const choices = getHexacoChoices();

  if (!currentQuestionData) return <div>Loading...</div>;

  return (
    <WorkP1Card
      question={currentQuestionData.question}
      choices={choices}
      questionNumber={currentQuestion}
      selectedOption={answers[currentQuestionData.id]}
      onSelectOption={(option) => setAnswer(currentQuestionData.id, option)}
    />
  );
};

export default WorkP1Page;
