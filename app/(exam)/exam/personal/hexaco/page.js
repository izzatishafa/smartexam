"use client";
import React, { useEffect } from "react";
import HexacoCard from "@/app/(exam)/exam/personal/hexaco/component/HexacoCard";
import { useRouter } from "next/navigation";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const Hexaco = () => {
  const { getCurrentQuestionAPI, getHexacoChoices, currentQuestion, setAnswer, answers } = useExamStore();

  const currentQuestionData = getCurrentQuestionAPI();
  const choices = getHexacoChoices();
  
  if (!currentQuestionData) return <div>Loading...</div>;

  return <HexacoCard question={currentQuestionData.question} choices={choices} questionNumber={currentQuestion} selectedOption={answers[currentQuestionData.id]} onSelectOption={(option) => setAnswer(currentQuestionData.id, option)} />;
};

export default Hexaco;
