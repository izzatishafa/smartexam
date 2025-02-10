"use client";

import React from "react";
import { useExam } from "../../../../contexts/ExamContext";
import { Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import GtiQuestion5 from "../components/GtiQuestion5";
const { Text } = Typography;

const GtiSubtest5 = () => {
  const { currentQuestion, answers, setAnswer, currentQuestionData, currentSubtest } = useExam();

  console.log("currentSubtest222", currentSubtest);
  console.log("currentQuestionData", currentQuestionData);
  // const currentQuestionData = questionData.find((q) => q.id === currentQuestion);

  if (!currentQuestionData) {
    return <Text>Soal tidak ditemukan</Text>;
  }

  return (
    <>
      <Content>{currentQuestionData.type === "GTI" && <GtiQuestion5 data={currentQuestionData} onAnswer={setAnswer} currentAnswer={answers[currentQuestion]} />}</Content>
    </>
  );
};

const GtiSubtest5Page = () => {
  return <GtiSubtest5 />;
};

export default GtiSubtest5Page;
