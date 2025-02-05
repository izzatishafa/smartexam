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

const GtiQuestion1 = ({ data, onAnswer, currentAnswer }) => {
  return (
    <>
<<<<<<< HEAD
      <Button
        variant="outlined"
        color="green"
        onClick={showModal}
        style={{ margin: "16px 0px" }}
      >
=======
      <Button variant="outlined" size="small" color="green" onClick={showModal} style={{ margin: "16px 0px" }}>
>>>>>>> 9036de1 (membuat navigasi di tutorial dan questions GTI, membuat halaman tutorial-intro, mengaktifkan fungsi memilih jawaban dan notifikasi, conditional rendering pada header dan footer)
        Panduan
      </Button>
      <Card style={{ margin: "0px 24px 0px 24px" }}>
        <Text style={{ fontSize: 24 }}>
          {data.id}. {data.question}
        </Text>
        <Row gutter={32} style={{ margin: "24px 0px" }} justify="center">
          {data.letters.map((letter, index) => (
            <Col key={index}>
              <LetterCard
                upperLetter={letter.upperLetter}
                lowerLetter={letter.lowerLetter}
              />
            </Col>
          ))}
        </Row>

        <Row gutter={32} justify="center">
          {data.options.map((number) => (
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
      <Modal title="Basic Modal" onCancel={handleClose}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default GtiQuestion1;
