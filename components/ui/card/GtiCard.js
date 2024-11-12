"use client";
import React, { useState } from "react";
import { Typography, Card, Row, Col, Space, Button, Flex } from "antd";

const { Title, Text } = Typography;

export default function GtiCard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const letterPairs = [
    { uppercase: "Q", lowercase: "r" },
    { uppercase: "T", lowercase: "n" },
    { uppercase: "H", lowercase: "b" },
    { uppercase: "E", lowercase: "a" },
  ];

  const choices = [0, 1, 2, 3, 4];

  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
        marginBottom: "100px",
      }}
      onCopy={handleCopy}
    >
      <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        5. Berapa jumlah pasangan huruf yang memiliki kesamaan?
      </Title>
      <Row style={{ margin: "40px 0px 10px 40px", gap: "45px" }}>
        {letterPairs.map((pair, index) => (
          <Col
            key={index}
            span={3}
            style={{
              border: "1px solid lightgray",
              textAlign: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                margin: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text style={{ fontSize: "5rem" }}>{pair.uppercase}</Text>
              <Text
                style={{
                  fontSize: "2rem",
                  color: "white",
                  backgroundColor: "gray",
                  padding: "4px 0px 4px 0px",
                }}
              >
                {pair.lowercase}
              </Text>
            </div>
          </Col>
        ))}
      </Row>
      <Row style={{ margin: "0px 0px 10px 40px", gap: "60px" }}>
        {choices.map((num) => (
          <Col key={num} span={2} style={{ margin: "40px 0px 10px 0px" }}>
            <Button
              style={{
                padding: "20px 50px 20px 50px",
                fontSize: "1.5rem",
                color: selectedOption === num ? "white" : "black",
                backgroundColor:
                  selectedOption === num
                    ? "#2D7CC1"
                    : hoveredOption === num
                    ? "#96BDE0"
                    : "white",
                borderRadius: "7px",
                margin: "0px 20px 10px 0",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                border: "0.5px solid black",
              }}
              onClick={() => handleOptionClick(num)}
              onMouseOver={() => setHoveredOption(num)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              {num}
            </Button>
          </Col>
        ))}
      </Row>
    </Card>
  );
}
