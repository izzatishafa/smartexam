"use client";

import { Col, Row, Typography, Card } from "antd";
import React from "react";
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

const GtiQuestion1 = ({ data, onAnswer, currentAnswer }) => {
  
  return (
    <>
      <Text style={{ fontSize: 24 }}>
        {data.id}. {data.question}
      </Text>

      <Row gutter={32} style={{ margin: "24px 0px" }} justify="center">
        {data.letters.map((letter, index) => (
          <Col key={index}>
            <LetterCard upperLetter={letter.upperLetter} lowerLetter={letter.lowerLetter} />
          </Col>
        ))}
      </Row>

      <Row gutter={32} justify="center">
        {data.options.map((number) => (
          <Col key={number}>
            <NumberOption number={number} isSelected={currentAnswer === number} onClick={() => onAnswer(data.id, number)} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GtiQuestion1;
