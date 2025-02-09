"use client"

import React from 'react'
import GtiQuestion3 from '../components/GtiQuestion3'
import { useExam } from "../../../../contexts/ExamContext";
import { Typography } from "antd";
import { Content } from 'antd/es/layout/layout';
const { Text } = Typography;

const GtiSubtest3 = () => {
  const { currentQuestion, questionData, answers, setAnswer, subtestInfo, currentQuestionData, currentSubtest } = useExam();

  console.log("currentSubtest222", currentSubtest);
  console.log("currentQuestionData", currentQuestionData);
  // const currentQuestionData = questionData.find((q) => q.id === currentQuestion);

  if (!currentQuestionData) {
    return <Text>Soal tidak ditemukan</Text>;
  }

  return (
    <>
      <Content>{currentQuestionData.type === "GTI" && <GtiQuestion3 data={currentQuestionData} onAnswer={setAnswer} currentAnswer={answers[currentQuestion]} />}</Content>
    </>
  );
};


const GtiSubtest3Page = () => {
  return <GtiSubtest3 />;
};

export default GtiSubtest3Page;
