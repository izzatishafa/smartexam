"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useExamStore from "@/app/(exam)/stores/useExamStore";
import CTICard from "./component/CTICard";

const CTIPage = () => {
  const router = useRouter();
  const {
    initializeExam,
    getCurrentQuestion,
    getCTIChoices,
    currentQuestion,
    setAnswer,
    answers,
  } = useExamStore();

  const currentQuestionData = getCurrentQuestion();
  const choices = getCTIChoices();

  if (!currentQuestionData) return <div>Loading...</div>;

  return (
    <CTICard
      question={currentQuestionData.question}
      choices={choices}
      questionNumber={currentQuestion}
      selectedOption={answers[currentQuestionData.id]}
      onSelectOption={(option) => setAnswer(currentQuestionData.id, option)}
    />
  );
};

export default CTIPage;
