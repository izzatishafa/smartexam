"use client";

import React, { useState } from "react";
import { Layout, Row, Col, Progress, Button } from "antd";
import Title from "antd/es/typography/Title";
import { theme } from "antd";
import useExamStore from "@/app/(exam)/stores/useExamStore";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

const SiderExam = () => {
  const { currentQuestion, collapsed, setCollapsed, answers, getCurrentQuestionData, goToQuestion, getProgress, getCurrentSubtestInfo } = useExamStore();

   const router = useRouter();
   const handleSubmit = useExamStore((state) => state.handleSubmit);

  const questionData = getCurrentQuestionData();
  const subtestInfo = getCurrentSubtestInfo(); // Gunakan getter

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const getProgress = () => {
  //   const answered = Object.keys(answers).length;
  //   return Math.round((answered / questionData.length) * 100);
  // };

  return (
    <Sider
      width={384}
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      reverseArrow
      style={{
        background: colorBgContainer,
        marginBottom: 24,
        boxShadow: "-4px 0 4px -2px rgba(27, 48, 66, 0.1)",
      }}
    >
      <Row style={{ padding: "0px 20px", height: "45px", borderBottom: "1px solid #E0E0E0", alignItems: "center" }}>
        <Progress percent={getProgress()} format={(percent) => `${Object.keys(answers).length} / ${subtestInfo?.questions.length || 0}`} strokeColor="#457D42" />
      </Row>
      <Row
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Col
          style={{
            height: "45px",
            backgroundColor: "#1b3042",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title level={4} style={{ color: "white", margin: 0 }}>
            List Question
          </Title>
        </Col>
        <Col
          style={{
            padding: "20px",
            height: "370px",
            overflow: "scroll",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "10px",
              overflow: "hidden",
            }}
          >
            {questionData.map((question) => {
              let backgroundColor = "#f5f5f5"; // default
              let color = "#000";

              // if (confusedQuestions.includes(question.id)) {
              //   backgroundColor = "#ffd700"; // confused - kuning
              // } else
              if (answers[question.id] !== undefined) {
                backgroundColor = "#36454F"; // answered - abu-abu gelap
                color = "#fff";
              }

              return (
                <div
                  key={question.id}
                  style={{
                    backgroundColor,
                    color,
                    width: "100%",
                    aspectRatio: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                  onClick={() => goToQuestion(question.id)}
                >
                  {question.id}
                </div>
              );
            })}
          </div>
          <Button type="primary" shape="round" onClick={() => handleSubmit(router.push)} style={{ marginTop: "20px" }}>
            Submit Quiz
          </Button>
        </Col>
      </Row>
    </Sider>
  );
};

export default SiderExam;
