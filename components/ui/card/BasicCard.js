"use client";
import React, { useState } from "react";
import { Typography, Card, Space } from "antd";

const { Title, Text } = Typography;

export default function BasicCard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
      }}
      onCopy={handleCopy}
    >
      <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        5. Choose the grammatically correct word or phrase to complete the
        following sentences.
      </Title>
      <Space style={{ paddingLeft: "30px" }} direction="vertical">
        <Text style={{ fontSize: "17px", fontWeight: "bold" }}>
          Abrahan Lincoln insisted that ____ not just on mere opinion but on
          moral purpose.
        </Text>
        <ol
          style={{
            color: "#000",
            listStyleType: "none",
            paddingLeft: "20px",
            fontSize: "15px",
          }}
        >
          {["A", "B", "C", "D"].map((choice, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(choice)}
              style={{
                color: "#1B3042",
                backgroundColor:
                  selectedOption === choice ? "#D6E4FF" : "#E9F0FC",
                padding: "8px 15px",
                borderRadius: "15px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                border:
                  selectedOption === choice ? "2px solid #0A01FF" : "none",
              }}
            >
              <span
                style={{
                  backgroundColor: "white",
                  color: "#0A01FF",
                  padding: "5px 10px",
                  borderRadius: "100%",
                  marginRight: "15px",
                }}
              >
                {choice}
              </span>
              <p
                style={{
                  margin: 0,
                  fontFamily: ["ABeeZee", "sans-serif"],
                  fontWeight: "semibold",
                }}
              >
                Ini adalah contoh pilihan ganda dari quiz
              </p>
            </li>
          ))}
        </ol>
      </Space>
    </Card>
  );
}
