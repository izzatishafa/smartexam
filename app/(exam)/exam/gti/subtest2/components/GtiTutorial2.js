"use client";

import { Card, Row, Typography, Col, Button, notification } from "antd";
const { Text } = Typography;
import React, { useState } from "react";
import styles from "../styles/style.module.css";
import { useRouter } from "next/navigation";

const data = {
  name: ["Doni", "Toni", "Roni", "Boni"],
  options: [0, 1, 2, 3],
};

const GtiTutorial2 = () => {
  const router = useRouter();
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const checkAnswer = (number) => {
    setSelectedAnswer(number);

    if (number === 0) {
      setIsCorrect(true);
      notification.success({
        message: "Jawaban Benar!",
        description: "Selamat, jawaban Anda benar.",
        placement: "topRight",
        className: "custom-notification",
        style: {
          background: "#f6ffed",
          border: "1px solid #b7eb8f",
          borderRadius: 6,
        },
      });
    } else {
      setIsCorrect(false);
      notification.error({
        message: "Jawaban Salah",
        description: "Silakan coba lagi.",
        placement: "topRight",
        className: "custom-notification",
        style: {
          background: "#fff2f0",
          border: "1px solid #ffccc7",
          borderRadius: 6,
        },
      });
    }
  };

  const NumberOption = ({ letter, option, isSelected, onClick }) => (
    <Button className={`${styles["user-button"]} ${isSelected ? styles["selected"] : ""}`} onClick={() => onClick(letter)}>
      <div className={styles.avatar}>{letter}</div>
      <span className={styles.option}>{option}</span>
    </Button>
  );

  return (
    <>
      <Card style={{ margin: "32px 64px 32px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }} bodyStyle={{ padding: "16px 32px 24px" }}>
        <Row style={{ width: "100%", marginBottom: "16px" }}>
          <Text style={{ fontSize: 20 }}>Perhatikan soal berikut !</Text>
        </Row>
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ flexDirection: "column", display: "flex", marginBottom: "8px" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Doni lebih cepat dari Toni</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Toni lebih cepat dari Roni</Text>
          </div>
          <div>
            <Text style={{ fontSize: 20 }}>Siapa yang tercepat?</Text>
          </div>
          <Row gutter={54} style={{ marginTop: "16px" }}>
            {data.options.map((letter, index) => (
              <Col key={letter}>
                <NumberOption letter={letter} option={data.name[index]} isSelected={selectedAnswer === letter} onClick={checkAnswer} />
              </Col>
            ))}
          </Row>
        </Row>
      </Card>
      {isCorrect && (
        <Row style={{ width: "100%", marginTop: "40px" }} justify="center" className="mt-4">
          <Button
            size="large"
            style={{
              backgroundColor: "#1b3042",
              color: "white",
              width: "400px",
            }}
            onClick={() => router.push("/exam/gti/subtest2/questions")}
          >
            Mulai Test
          </Button>
        </Row>
      )}
    </>
  );
};

export default GtiTutorial2;
