"use client";
import React, { useEffect, useState } from "react";
import { Typography, Flex, Button, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import { Layout } from "antd";
import { useExam } from "@/app/(exam)/contexts/ExamContext";
import EnglishCard from "./components/EnglishCard";

const EnglishUniversity = () => {
  const {
    answers,
    setAnswer,
    changeExamType,
    currentExamType,
    currentQuestion,
    currentQuestionData,
  } = useExam();

  useEffect(() => {
    if (currentExamType !== "english") {
      changeExamType("english");
    }
  }, [currentExamType, changeExamType]);

  console.log("ini soal english : ", currentQuestionData);

  return (
    <>
      <Content style={{ margin: "20px" }}>
        <EnglishCard
          index={currentQuestion}
          data={currentQuestionData}
          onAnswer={setAnswer}
          currentAnswer={answers[currentQuestion]}
        />
      </Content>
    </>
  );
};

export default EnglishUniversity;
