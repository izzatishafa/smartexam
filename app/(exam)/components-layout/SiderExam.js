"use client";

import React from "react";
import { Layout, Row, Col, Progress, Button, FloatButton, ConfigProvider } from "antd";
import Title from "antd/es/typography/Title";
import { theme } from "antd";
import useExamStore from "@/app/(exam)/stores/useExamStore";
import { useRouter } from "next/navigation";
import { RightOutlined } from "@ant-design/icons";
import styles from "@/app/(exam)/styles-layout/styles.module.css";

const { Sider } = Layout;

const SiderExam = () => {
  const { collapsed, setCollapsed, answers, getCurrentQuestionData, goToQuestion, getProgress, getCurrentSubtestInfo, currentSubtest, questions, isUsingAPI } = useExamStore();

  const handleSubmit = useExamStore((state) => state.handleSubmit);
  const router = useRouter();

  console.log("currentSubtest:", currentSubtest);
  console.log("questions:", questions);

  // Mendapatkan data pertanyaan berdasarkan sumber (API atau dummy)
  const getQuestionData = () => {
    if (isUsingAPI || currentSubtest === "hexaco") {
      return (
        questions?.map((q, index) => ({
          id: index + 1,
          question: q.question,
          choices: q.choices,
        })) || []
      );
    }

    return getCurrentQuestionData() || [];
  };

  const questionData = getQuestionData();
  console.log("questionData", questionData);

  const subtestInfo = getCurrentSubtestInfo();

  // Mendapatkan total pertanyaan
  const getTotalQuestions = () => {
    if (isUsingAPI || currentSubtest === "hexaco") {
      return questions?.length || 0;
    }
    return subtestInfo?.questions?.length || 0;
  };

  // Fungsi untuk memeriksa apakah pertanyaan sudah dijawab
  const isQuestionAnswered = (questionId) => {
    if (isUsingAPI) {
      // Untuk API gunakan format api_X sebagai kunci
      return answers[`api_${questionId}`] !== undefined;
    } else {
      // Untuk data dummy, gunakan ID asli
      return answers[questionId] !== undefined;
    }
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const SidebarContent = () => (
    <>
      <Row
        style={{
          padding: "0px 20px",
          height: "45px",
          borderBottom: "1px solid #E0E0E0",
          alignItems: "center",
        }}
      >
        <Progress percent={getProgress()} format={(percent) => `${useExamStore.getState().getAnsweredCount()} / ${getTotalQuestions()}`} strokeColor="#457D42" />
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
            {questionData.length ? "List Question" : "Tidak ada pertanyaan"}
          </Title>
        </Col>
        <Col
          style={{
            padding: "20px",
            height: "370px",
            overflow: "scroll",
          }}
        >
          {questionData.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "10px",
                overflow: "hidden",
              }}
            >
              {questionData.map((question) => {
                let backgroundColor = "#f5f5f5";
                let color = "#000";

                if (isQuestionAnswered(question?.id)) {
                  backgroundColor = "#36454F";
                  color = "#fff";
                }

                return (
                  <div
                    key={question?.id || "undefined"}
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
                    onClick={() => question?.id && goToQuestion(question.id)}
                  >
                    {question?.id || "N/A"}
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "20px" }}>Data pertanyaan tidak tersedia</div>
          )}
          <Button type="primary" shape="round" onClick={() => handleSubmit(router.push)} style={{ marginTop: "20px" }} disabled={!questionData.length}>
            Submit Quiz
          </Button>
        </Col>
      </Row>
    </>
  );

  return (
    <>
      {!collapsed ? (
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
          <SidebarContent />
        </Sider>
      ) : (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1b3042",
            },
          }}
        >
          <FloatButton
            icon={<RightOutlined />}
            onClick={() => setCollapsed(false)}
            type="primary"
            tooltip="Daftar Pertanyaan"
            style={{
              height: 70,
              width: 70,
              bottom: 10,
              right: 60,
            }}
          />
        </ConfigProvider>
      )}
    </>
  );
};

export default SiderExam;
