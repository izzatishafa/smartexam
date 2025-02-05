"use client";
import React, { useState } from "react";
import { Typography, Row, Col, Space, Modal, Button } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import { useExam } from "../../../../contexts/ExamContext";
import { Layout } from "antd";
import GtiQuestion1 from "@/app/(exam)/exam/gti/subtest1/questions/components/GtiQuestion1";

const GtiSubtest1 = () => {
  const { currentQuestion, questionData, answers, setAnswer } = useExam();
  const currentQuestionData = questionData.find((q) => q.id === currentQuestion);

  if (!currentQuestionData) {
    return <Text>Soal tidak ditemukan</Text>;
  }

  return (
    <Content>
      {currentQuestionData.type === "GTI" && <GtiQuestion1 data={currentQuestionData} onAnswer={setAnswer} currentAnswer={answers[currentQuestion]} />}
    </Content>
  );
};


const GtiSubtestPage1 = () => {
  return <GtiSubtest1 />;
};

export default GtiSubtestPage1;
