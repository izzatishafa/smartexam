"use client";

import { Badge, Col, Row, Space, Layout } from "antd";
import React from "react";
import styles from "../styles-layout/styles.module.css";
const { Footer } = Layout;
import useExamStore from "@/app/(exam)/stores/useExamStore";

const FooterExam = () => {
  const {
    goToNext,
    goToPrevious,
    answers,
    collapsed,
    questions,
    currentSubtest,
  } = useExamStore();

  // const answeredCount = getAnsweredCount();
  // const notAnsweredCount = getNotAnsweredCount();

  // Fungsi untuk mendapatkan jumlah jawaban untuk data API
  // const getAPIAnsweredCount = () => {
  //   return Object.keys(answers || {}).length;
  // };

  // // Fungsi untuk mendapatkan jumlah pertanyaan yang belum dijawab untuk data API
  // const getAPINotAnsweredCount = () => {
  //   const totalQuestions = questions?.length || 0;
  //   return totalQuestions - getAPIAnsweredCount();
  // };

  // // Logika untuk mendapatkan jumlah berdasarkan sumber data
  // const answeredCount = currentSubtest === "hexaco" ? getAPIAnsweredCount() : getAnsweredCount();

  // const notAnsweredCount = currentSubtest === "hexaco" ? getAPINotAnsweredCount() : getNotAnsweredCount();

  // Perbaikan perhitungan jumlah jawaban
  const getAnsweredCount = () => {
    return Object.keys(answers || {}).length;
  };

  // Perbaikan perhitungan pertanyaan yang belum dijawab
  const getNotAnsweredCount = () => {
    const totalQuestions =
      currentSubtest === "hexaco"
        ? questions?.rows?.jumlah_soal || 0
        : questions?.length || 0;

    return Math.max(0, totalQuestions - getAnsweredCount());
  };

  const answeredCount = getAnsweredCount();
  const notAnsweredCount = getNotAnsweredCount();

  return (
    <>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "12px",
        }}
      >
        <Row
          style={{
            height: "40px",
            margin: "0px 30px 5px",
            marginRight: collapsed ? "150px" : "30px",
          }}
        >
          {/* komponen ini */}
          <Col
            span={12}
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Space size="large">
              <Badge color="#36454F" text={`Answered (${answeredCount})`} />
              <Badge
                color="#D9D9D9"
                text={`Not answered (${notAnsweredCount})`}
              />
              {/* <Badge color="#ffd700" text={`Confused (${confusedCount})`} /> */}
            </Space>
          </Col>
          <Col
            span={12}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Space size="middle">
              {/* <button className={`${styles.button} ${styles.confused}`} onClick={markConfused}>
                Mark confused
              </button> */}
              <button
                className={`${styles.button} ${styles.previous}`}
                onClick={goToPrevious}
              >
                Previous
              </button>
              <button
                className={`${styles.button} ${styles.next}`}
                onClick={goToNext}
              >
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
