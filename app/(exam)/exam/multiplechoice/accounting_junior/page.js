"use client";
import React, { useEffect, useState } from "react";
import { Typography, Flex, Button, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import { Layout } from "antd";
import AccountingJuniorCard from "./components/AccountingJuniorCard";
import { useExam } from "@/app/(exam)/contexts/ExamContext";

const AccountingJuniorPage = () => {
  const {
    answers,
    setAnswer,
    changeExamType,
    currentExamType,
    currentQuestion,
    currentQuestionData,
  } = useExam();

  useEffect(() => {
    if (currentExamType !== "accounting_junior") {
      changeExamType("accounting_junior");
    }
  }, [currentExamType, changeExamType]);

  console.log("ini soal accounting_junior : ", currentQuestionData);
  return (
    <>
      <Content style={{ margin: "20px" }}>
        <AccountingJuniorCard
          index={currentQuestion}
          data={currentQuestionData}
          onAnswer={setAnswer}
          currentAnswer={answers[currentQuestion]}
        />
      </Content>
    </>
  );
};

export default AccountingJuniorPage;
