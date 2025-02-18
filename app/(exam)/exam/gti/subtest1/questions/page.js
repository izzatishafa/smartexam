"use client";
import React, { useEffect, useCallback } from "react";
import { Typography, Layout } from "antd";
import  useExamStore  from "@/app/(exam)/stores/useExamStore";
import GtiQuestion1 from "@/app/(exam)/exam/gti/subtest1/questions/components/GtiQuestion1";
import LoadingPage from "@/app/(exam)/components-layout/LoadingPage";

const { Text } = Typography;
const { Content } = Layout;

const GtiSubtest1 = () => {
  const { currentQuestion, isLoading, getCurrentQuestion, initializeExam } = useExamStore();

  useEffect(() => {
    initializeExam();
  }, [initializeExam]);

  const currentQuestionData = getCurrentQuestion();

  const renderContent = useCallback(() => {
    if (isLoading) {
      return <LoadingPage />;
    }

    if (!currentQuestionData) {
      return <Text>Soal tidak ditemukan</Text>;
    }

    return currentQuestionData.type === "GTI" ? <GtiQuestion1 index={currentQuestion} data={currentQuestionData} /> : null;
  }, [isLoading, currentQuestionData, currentQuestion]);

  return (
    <Content
      style={{
        opacity: isLoading ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {renderContent()}
    </Content>
  );
};

const GtiSubtestPage = () => {
  return <GtiSubtest1 />;
};

export default React.memo(GtiSubtestPage);
