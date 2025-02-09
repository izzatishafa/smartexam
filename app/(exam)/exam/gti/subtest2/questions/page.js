"use client";

import React, { useState } from "react";
import { Typography, Row, Col, Space, Modal, Button, Flex } from "antd";
import { Layout } from "antd";
import ModalTutorial from "../components/GtiModalTutorial";
import GtiQuestion2 from "./components/GtiQuestion2";
import { useExam } from "../../../../contexts/ExamContext";
const { Content } = Layout;
const { Title, Text } = Typography;

const GtiSubtest2 = () => {
  const { currentQuestion, questionData, answers, setAnswer, subtestInfo, currentQuestionData, currentSubtest } = useExam();

  console.log("currentSubtest222", currentSubtest);
  console.log("currentQuestionData", currentQuestionData);
  // const currentQuestionData = questionData.find((q) => q.id === currentQuestion);

  if (!currentQuestionData) {
    return <Text>Soal tidak ditemukan</Text>;
  }

  return (
    <>
      <Content>{currentQuestionData.type === "GTI" && <GtiQuestion2 data={currentQuestionData} onAnswer={setAnswer} currentAnswer={answers[currentQuestion]} />}</Content>
    </>
  );
};

const GtiSubtest2Page = () => {
  return <GtiSubtest2 />;
};

export default GtiSubtest2Page;
