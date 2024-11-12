"use client";
import React, { useState } from "react";
import { Typography, Card, Space } from "antd";

const { Title, Text } = Typography;

export default function HexacoCard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const choices = [
    { value: "Sangat Setuju" },
    { value: "Setuju" },
    { value: "Netral" },
    { value: "Tidak Setuju" },
    { value: "Sangat Tidak Setuju" },
  ];

  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
      }}
      onCopy={handleCopy}
    >
      <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        5. Saya lebih memilih untuk tidak mengambil keuntungan dari orang lain,
        bahkan jika kesempatan itu ada.
      </Title>
      <Space style={{ paddingLeft: "30px" }} direction="vertical">
        <ol
          style={{
            color: "#000",
            listStyleType: "none",
            paddingLeft: "0px",
            fontSize: "15px",
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {choices.map((choice, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(choice.value)}
              style={{
                color: "#1B3042",
                backgroundColor:
                  selectedOption === choice.value ? "#D6E4FF" : "#E9F0FC",
                padding: "8px 15px",
                borderRadius: "15px",
                marginBottom: "10px",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                border:
                  selectedOption === choice.value
                    ? "2px solid #0A01FF"
                    : "none",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: ["ABeeZee", "sans-serif"],
                  fontWeight: "semibold",
                }}
              >
                {choice.value}
              </p>
            </li>
          ))}
        </ol>
      </Space>
    </Card>
  );
}
