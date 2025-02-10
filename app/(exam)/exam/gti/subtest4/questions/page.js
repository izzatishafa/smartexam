"use client";

import React from "react";
import GtiQuestion4 from "../components/GtiQuestion4";
import { useExam } from "../../../../contexts/ExamContext";
import { Typography } from "antd";
import { Content } from "antd/es/layout/layout";
const { Text } = Typography;

const GtiSubtest4 = () => {
  const { currentQuestion, questionData, answers, setAnswer, subtestInfo, currentQuestionData, currentSubtest } = useExam();

  console.log("currentSubtest222", currentSubtest);
  console.log("currentQuestionData", currentQuestionData);
  // const currentQuestionData = questionData.find((q) => q.id === currentQuestion);

  if (!currentQuestionData) {
    return <Text>Soal tidak ditemukan</Text>;
  }

  return (
    <>
      <Content>{currentQuestionData.type === "GTI" && <GtiQuestion4 data={currentQuestionData} onAnswer={setAnswer} currentAnswer={answers[currentQuestion]} />}</Content>
    </>
  );
};

const GtiSubtest4Page = () => {
  return <GtiSubtest4 />;
};

export default GtiSubtest4Page;
