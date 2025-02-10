"use client";
import React, { useState } from "react";
import { Button, Card, Row, Typography, Col } from "antd";
const { Text } = Typography;

const GtiQuestion4 = ({ data, onAnswer, currentAnswer }) => {
  // Memproses string pertanyaan menjadi array huruf
  const letters = data.question.split(",");

  const LetterCard = ({ letter }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Card
        style={{
          width: 140,
          height: 160,
          padding: 0,
          borderRadius: 2,
          background: "#9CA3AF", // warna abu-abu
          marginBottom: 15,
        }}
        bodyStyle={{
          padding: 0,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 80,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {letter}
        </Text>
      </Card>
      <Card
        style={{
          width: 140,
          padding: 0,
          borderRadius: 2,
          background: currentAnswer === letter ? "#F59E0B" : "white",
        }}
        bodyStyle={{
          padding: "1px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => onAnswer(data.id, letter)}
      >
        <Text style={{ fontSize: 20 }}>{letter}</Text>
      </Card>
    </div>
  );

  return (
    <Card style={{ margin: "24px 64px" }}>
      <Row style={{ width: "100%", marginBottom: "24px" }}>
        <Text style={{ fontSize: 20 }}>{data.id}. Pilih jawaban dari teka-teki tersebut dengan tepat !</Text>
      </Row>
      <Row gutter={32} justify="center">
        {letters.map((letter, index) => (
          <Col key={index}>
            <LetterCard letter={letter} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default GtiQuestion4;
