"use client";

import { Badge, Col, Row, Space, Layout } from "antd";
import React from "react";
import styles from "../styles-layout/styles.module.css";
const { Footer } = Layout;
import { useExam } from "../exam/gti/subtest1/questions/contexts/ExamContext";

const FooterExam = () => {
  const { markConfused, goToNext, goToPrevious, answers, confusedQuestions, questionData, goToQuestion } = useExam();

  const answeredCount = Object.keys(answers).length;
  // const confusedCount = confusedQuestions.length;
  const notAnsweredCount = questionData.length - answeredCount;

  return (
    <>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "12px",
        }}
      >
        <Row style={{ height: "40px" }}>
          <Col span={12} style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Space size="large">
              <Badge color="#36454F" text={`Answered (${answeredCount})`} />
              <Badge color="#D9D9D9" text={`Not answered (${notAnsweredCount})`} />
              {/* <Badge color="#ffd700" text={`Confused (${confusedCount})`} /> */}
            </Space>
          </Col>
          <Col span={12} style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Space size="middle">
              {/* <button className={`${styles.button} ${styles.confused}`} onClick={markConfused}>
                Mark confused
              </button> */}
              <button className={`${styles.button} ${styles.previous}`} onClick={goToPrevious}>
                Previous
              </button>
              <button className={`${styles.button} ${styles.next}`} onClick={goToNext}>
                Next
              </button>
            </Space>
          </Col>
        </Row>
      </Footer>
    </>
  );
};

export default FooterExam;
