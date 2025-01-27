"use client";
import React, { useState } from "react";
import { Typography, Card, Space } from "antd";

const { Title, Text } = Typography;

export default function WptCard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const choices = [
    { label: "A", value: "Pegunungan" },
    { label: "B", value: "Hutan" },
    { label: "C", value: "Pohon" },
    { label: "D", value: "Hijau" },
    { label: "E", value: "Tinggi" },
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
        5. Pilihlah pasangan kata yang mempunyai kesesuaian dengan pola soal.
      </Title>
      <Space style={{ paddingLeft: "30px" }} direction="vertical">
        <Text style={{ fontSize: "17px", fontWeight: "bold" }}>
          Tropis : Iklim <br />
          Cemara : ...
        </Text>
        <Text style={{ fontSize: "17px" }}>Manakah jawaban yang sesuai?</Text>
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
              onClick={() => handleOptionClick(choice.label)}
              style={{
                color: "#1B3042",
                backgroundColor:
                  selectedOption === choice.label ? "aliceblue" : "transparent",
                padding: "8px 16px",
                borderRadius: "12px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                border:
                  selectedOption === choice.label
                    ? "1px solid cornflowerblue"
                    : "1px solid lightgray",
              }}
            >
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  fontWeight: "bold",
                  border: "1px solid",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  backgroundColor:
                    selectedOption === choice.label ? "cornflowerblue" : "",
                  color: selectedOption === choice.label ? "white" : "gray",
                }}
                color={
                  selectedOption === choice.label ? "cornflowerblue" : "default"
                }
              >
                {choice.label}
              </span>
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
