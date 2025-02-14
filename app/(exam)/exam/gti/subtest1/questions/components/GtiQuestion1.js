"use client";

import { Col, Row, Typography, Card, Button, Modal } from "antd";
import React, { useState } from "react";
import ModalGti1 from "./ModalGti1";
const { Text } = Typography;

const LetterCard = ({ upperLetter, lowerLetter, isHighlighted }) => (
  <Card
    style={{
      width: 160,
      padding: 0,
      border: isHighlighted ? "2px solid #1890ff" : "1px solid #d9d9d9",
      borderRadius: 6,
      boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
      border: "none",
    }}
    bodyStyle={{ padding: 0 }}
  >
    <div
      style={{
        height: 110,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 80,
      }}
    >
      {upperLetter}
    </div>
    <div
      style={{
        height: 70,
        backgroundColor: "rgba(27, 48, 66, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: 30,
        borderRadius: "0 0 5px 5px",
      }}
    >
      {lowerLetter}
    </div>
  </Card>
);

const NumberOption = ({ number, isSelected, onClick }) => (
  <Card
    style={{
      width: 130,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isSelected ? "#2D7CC1" : "white", // Ubah warna saat selected
      borderRadius: 6,
      cursor: "pointer",
      border: "1px solid #1B3042",
    }}
    bodyStyle={{
      padding: 0,
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    onClick={onClick}
  >
    <div style={{ fontSize: 24, color: isSelected ? "white" : "black" }}>{number}</div>
  </Card>
);

const GtiQuestion1 = ({ data, onAnswer, currentAnswer, index }) => {
const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  // Fungsi untuk memproses pasangan huruf
  const processLetterPairs = (question) => {
    const length = question.length / 2;
    const lowerLetters = question.slice(0, length).split("");
    const upperLetters = question.slice(length).split("");

    return lowerLetters.map((lower, index) => ({
      upper: upperLetters[index],
      lower: lower,
    }));
  };

  // Proses data huruf
  const letterPairs = processLetterPairs(data.question);

  console.log("ahai", data);
  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button variant="outlined" size="middle" color="green" onClick={showModal} style={{ margin: "16px 0px" }}>
          Panduan
        </Button>
      </Row>
      <Card style={{ margin: "0px 24px 0px 24px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }}>
        <Text style={{ fontSize: 18 }}>{index}. Berapa jumlah pasangan huruf yang memiliki kesamaan?</Text>
        <Row gutter={32} style={{ margin: "24px 0px" }} justify="center">
          {letterPairs.map((pair, idx) => (
            <Col key={idx}>
              <LetterCard upperLetter={pair.upper} lowerLetter={pair.lower} />
            </Col>
          ))}
        </Row>

        <Row gutter={32} justify="center">
          {[0, 1, 2, 3, 4].map((number) => (
            <Col key={number}>
              <NumberOption
                number={number}
                isSelected={currentAnswer === number}
                onClick={() => onAnswer(data.id, number)}
              />
            </Col>
          ))}
        </Row>
      </Card>
      <ModalGti1 open={isModalOpen} onCancel={() => setIsModalOpen(false)} />
    </>
  );
};

export default GtiQuestion1;
