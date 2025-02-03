"use client";
import React, { useState } from "react";
import { Typography, Row, Col, Space, Modal, Button } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import { ExamProvider } from "./contexts/ExamContext";
import { useExam } from "./contexts/ExamContext";
// import {ExamLayout} from "./components/ExamLayout";
import { Layout } from "antd";
import GtiQuestion1 from "@/app/(exam)/exam/gti/subtest1/questions/components/GtiQuestion1";

const GtiSubtest = () => {
  const { currentQuestion, questionData, answers, setAnswer } = useExam();
  const currentQuestionData = questionData.find((q) => q.id === currentQuestion);

  return (
    <>
      <Content>
        <GtiQuestion1 data={currentQuestionData} onAnswer={setAnswer} currentAnswer={answers[currentQuestion]} />
      </Content>
    </>
  );
};

const GtiSubtestPage = () => {
  return <GtiSubtest />;
};

export default GtiSubtestPage;
