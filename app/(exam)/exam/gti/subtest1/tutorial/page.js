"use client";
import React, { useState } from "react";
import { Typography, Row, Col, Space, Modal, Button } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import GtiTutorial1 from "@/components/ui/card/GtiTutorial1";

const GtiTutorialPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (value) => setSelectedOption(value);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOptionQuestionsClick = (value) => {
    setSelectedOption(value);
    setIsAnswerCorrect(value === correctAnswer);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    // Logic to fetch the next question will go here
  };

  const answers = [0, 1, 2, 3, 4];
  const correctAnswer = 1;

  return (
    <>
      <QuizHeader title="Tutorial Subtest 1" onGuideClick={showModal}>
        <Countdown />
      </QuizHeader>
      <Content style={{ margin: "20px" }}>
        <Space>
          <Modal
            width={1000}
            title={
              <Title
                level={5}
                style={{
                  color: "#2F2F2F",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 2,
                }}
              >
                Petunjuk Pengerjaan
              </Title>
            }
            open={isModalOpen}
            onCancel={handleClose}
            footer={null}
          >
            <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "20px" }}>
              {/* Huruf di baris atas */}
              <Col span={4}>
                <Title level={1} style={{ textAlign: "center" }}>
                  F
                </Title>
              </Col>
              <Col span={4}>
                <Title level={1} style={{ textAlign: "center" }}>
                  G
                </Title>
              </Col>
              <Col span={4}>
                <Title level={1} style={{ textAlign: "center" }}>
                  R
                </Title>
              </Col>
              <Col span={4}>
                <Title level={1} style={{ textAlign: "center" }}>
                  S
                </Title>
              </Col>
            </Row>
            <Row gutter={[16, 16]} align="middle" justify="center">
              {/* Huruf di baris bawah */}
              <Col span={4}>
                <Title level={3} style={{ textAlign: "center" }}>
                  f
                </Title>
              </Col>
              <Col span={4}>
                <Title level={3} style={{ textAlign: "center" }}>
                  c
                </Title>
              </Col>
              <Col span={4}>
                <Title level={3} style={{ textAlign: "center" }}>
                  r
                </Title>
              </Col>
              <Col span={4}>
                <Title level={3} style={{ textAlign: "center" }}>
                  s
                </Title>
              </Col>
            </Row>
            <Row gutter={[16, 16]} align="middle" justify="center" style={{ marginTop: "10px" }}>
              {/* Opsi jawaban sebagai tombol */}
              {answers.map((answer, index) => (
                <Col span={4} key={`answer-${index}`}>
                  <Button
                    type={selectedOption === answer ? "primary" : "default"}
                    onClick={() => handleOptionClick(answer)}
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "8px",
                      fontSize: "16px",
                    }}
                  >
                    {answer}
                  </Button>
                </Col>
              ))}
            </Row>
            <div style={{ marginTop: "20px" }}>
              <Text>Di dalam setiap kotak terdapat pasangan huruf di setiap soal, pada contoh di atas pasangan huruf tersebut berada di dalam kotak yang membatasinya.</Text>
              <br />
              <br />
              <Text>
                Tugas Anda adalah menghitung dari keempat pasangan huruf yang ada, <b>berapa jumlah pasangan huruf yang memiliki kesamaan</b> antara huruf yang berada di baris atas dengan huruf yang tepat berada di baris bawahnya.
              </Text>
              <br />
              <br />
              <Text>Pada contoh di atas, pasangan pertama huruf F dan f merupakan huruf yang sama.</Text>
              <br />
              <Text>R dan r serta 5 dan s, pasangan ketiga dan keempat juga merupakan huruf yang sama.</Text>
              <br />
              <br />
              <Text>Pasangan kedua yakni G dan c, adalah pasangan yang tidak sama.</Text>
              <br />
              <br />
              <Text>Pada contoh di atas terdapat 3 pasangan huruf yang sama. Jawaban pada angka 3 (tiga) merupakan jawaban yang benar untuk jawaban persoalan ini.</Text>
            </div>
          </Modal>
        </Space>
        <GtiTutorial1
          upperRowLetters={["A", "J", "K", "M"]}
          lowerRowLetters={["b", "d", "j", "m"]}
          answers={[0, 1, 2, 3, 4]}
          selectedOption={selectedOption}
          onOptionClick={handleOptionQuestionsClick}
          isAnswerCorrect={isAnswerCorrect}
          onNextQuestion={handleNextQuestion}
        />
      </Content>
    </>
  );
};

export default GtiTutorialPage;
