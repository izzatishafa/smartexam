// HexacoCard.js
"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Button, Row } from "antd";
import ModalHexaco from "./ModalHexaco";

const { Title } = Typography;

const HexacoCard = ({ question, choices, questionNumber, selectedOption, onSelectOption }) => {
  const [hoveredOption, setHoveredOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button type="default" variant="outlined" color="green" onClick={() => setIsModalOpen(true)} style={{ margin: "16px 0px" }}>
          Panduan
        </Button>
      </Row>

      <Card
        style={{
          margin: "0px 40px 16px",
          boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
          border: "none",
        }}
        bodyStyle={{ padding: "16px 32px 24px" }}
      >
        <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
          {questionNumber}. {question}
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
            {choices.map((choice) => (
              <li
                key={choice.key}
                onClick={() => onSelectOption(choice.key)}
                onMouseEnter={() => setHoveredOption(choice.key)}
                onMouseLeave={() => setHoveredOption(null)}
                style={{
                  color: selectedOption === choice.key ? "white" : "black",
                  backgroundColor: selectedOption === choice.key ? "#2D7CC1" : hoveredOption === choice.key ? "#96BDE0" : "white",
                  padding: "8px 15px",
                  borderRadius: "7px",
                  margin: "0px 20px 10px 0",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  border: "0.5px solid black",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "ABeeZee, sans-serif",
                  }}
                >
                  {choice.label}
                </p>
              </li>
            ))}
          </ol>
        </Space>
      </Card>

      <ModalHexaco open={isModalOpen} onCancel={() => setIsModalOpen(false)} />
    </>
  );
};

export default HexacoCard;
