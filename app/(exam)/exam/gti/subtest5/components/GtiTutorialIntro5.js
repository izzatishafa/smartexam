"use client";

import React from "react";
import { Card, Col, Row, Space } from "antd";
import Image from "next/image"; // Impor Image dari Next.js
import styles from "../styles/style.module.css";

const rotationImages = {
  1: "/assets/images/orientasi/f1.png",
  2: "/assets/images/orientasi/f2.png",
  3: "/assets/images/orientasi/f3.png",
  4: "/assets/images/orientasi/f4.png",
  5: "/assets/images/orientasi/f5.png",
  6: "/assets/images/orientasi/f6.png",
  7: "/assets/images/orientasi/f7.png",
  8: "/assets/images/orientasi/f8.png",
};

const GtiTutorialIntro5 = () => {
  const subtestData = {
    subtest5: {
      questions: [
        {
          id: 1,
          type: "GTI",
          question: "3,8|2,8|8,3",
          code: "gti_orientasi",
        },
      ],
    },
  };

  // Fungsi untuk memproses string question menjadi array soal
  const parseQuestion = (questionStr) => {
    const pairs = questionStr.split("|");
    return pairs.map((pair, index) => {
      const [topNumber, bottomNumber] = pair.split(",");
      return {
        id: index + 1,
        topNumber: parseInt(topNumber),
        bottomNumber: parseInt(bottomNumber),
      };
    });
  };

  // Ambil data question dari subtest
  const questionData = subtestData.subtest5.questions[0];
  const questions = parseQuestion(questionData.question);

  return (
    <Card title="Test Orientasi" className={styles["orientation-test-card"]}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {questions.map((question) => (
          <Card key={question.id} className={styles["question-card"]}>
            <Row gutter={[16, 16]} justify="center" align="middle">
              <Col span={12}>
                <div className={styles["image-container"]}>
                  <Image
                    src={rotationImages[question.topNumber]}
                    alt={`Rotasi ${question.topNumber}`}
                    width={150}
                    height={150} // Sesuaikan dengan tinggi gambar Anda
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className={styles["image-container"]}>
                  <Image
                    src={rotationImages[question.bottomNumber]}
                    alt={`Rotasi ${question.bottomNumber}`}
                    width={150}
                    height={150} // Sesuaikan dengan tinggi gambar Anda
                    className={styles["bottom-image"]}
                  />
                </div>
              </Col>
            </Row>
          </Card>
        ))}
      </Space>
    </Card>
  );
};

export default GtiTutorialIntro5;
