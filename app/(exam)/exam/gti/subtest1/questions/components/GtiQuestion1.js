"use client";

import { Col, Row, Typography, Card, Button, Modal } from "antd";
import React, { useState } from "react";
const { Text } = Typography;

const LetterCard = ({ upperLetter, lowerLetter, isHighlighted }) => (
  <Card
    style={{
      width: 220,
      padding: 0,
      border: isHighlighted ? "2px solid #1890ff" : "1px solid #d9d9d9",
      borderRadius: 2,
    }}
    bodyStyle={{ padding: 0 }}
  >
    <div
      style={{
        height: 130,
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
        backgroundColor: "#bfbfbf",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: 30,
      }}
    >
      {lowerLetter}
    </div>
  </Card>
);

const NumberOption = ({ number, isSelected, onClick }) => (
  <Card
    style={{
      width: 150,
      height: 42,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: isSelected ? "2px solid #1890ff" : "1px solid #d9d9d9",
      borderRadius: 6,
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
    <div style={{ fontSize: 24 }}>{number}</div>
  </Card>
);
const GtiQuestion1 = ({ data, onAnswer, currentAnswer, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const upperLetter = data.question.replace(/[^A-Z]/g, ""); // Ambil huruf besar
  const lowerLetter = data.question.replace(/[^a-z]/g, ""); // Ambil huruf kecil

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
      <Button variant="outlined" size="small" color="green" onClick={showModal} style={{ margin: "16px 0px" }}>
        Panduan
      </Button>
      <Card style={{ margin: "0px 24px 0px 24px" }}>
        <Text style={{ fontSize: 24 }}>{index} Berapa jumlah pasangan huruf yang memiliki kesamaan?</Text>
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
              <NumberOption number={number} isSelected={currentAnswer === number} onClick={() => onAnswer(data.id, number)} />
            </Col>
          ))}
        </Row>
      </Card>
      <Modal title="Basic Modal" onCancel={handleClose}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};


export default GtiQuestion1;
