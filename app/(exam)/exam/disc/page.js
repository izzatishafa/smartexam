"use client";
import React, { useEffect, useState } from "react";
import DiscCard from "./components/DiscCard";
const { Content } = Layout;
import { Layout } from "antd";
import { useExam } from "@/app/(exam)/contexts/ExamContext";

const DiscPage = () => {
  const {
    answers,
    setAnswer,
    changeExamType,
    currentExamType,
    currentQuestion,
    currentQuestionData,
  } = useExam();

  useEffect(() => {
    if (currentExamType !== "disc") {
      changeExamType("disc");
    }
  }, [currentExamType, changeExamType]);

  console.log("ini soal DISC : ", currentQuestionData);

  return (
    <>
      <Content>
        <DiscCard
          index={currentQuestion}
          data={currentQuestionData}
          onAnswer={setAnswer}
          currentAnswer={answers[currentQuestion]}
        ></DiscCard>
      </Content>
    </>
  );
};

export default DiscPage;
