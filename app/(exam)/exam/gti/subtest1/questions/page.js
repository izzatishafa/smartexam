"use client";
import React, { useState } from "react";
import { Typography, Row, Col, Space, Modal, Button } from "antd";
import { Layout } from "antd";
import { useExam } from "../../../../contexts/ExamContext";
import GtiQuestion1 from "@/app/(exam)/exam/gti/subtest1/questions/components/GtiQuestion1";
import LoadingPage from "@/app/(exam)/components-layout/LoadingPage";
const { Text } = Typography;
const { Content } = Layout;

const GtiSubtest1 = () => {
  const { currentQuestion, questionData, answers, setAnswer, subtestInfo, currentQuestionData, isLoading } = useExam();
  // const currentQuestionData = questionData.find((q) => q.id === currentQuestion);
  console.log(currentQuestionData, "ehe");

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!currentQuestionData) {
    return <Text>Soal tidak ditemukan</Text>;
  }

  return (
    <Content
      style={{
        opacity: isLoading ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {currentQuestionData.type === "GTI" && <GtiQuestion1 index={currentQuestion} data={currentQuestionData} onAnswer={setAnswer} currentAnswer={answers[currentQuestion]} />}
    </Content>
  );
};

const GtiSubtestPage = () => {
  return <GtiSubtest1 />;
};

export default GtiSubtestPage;
