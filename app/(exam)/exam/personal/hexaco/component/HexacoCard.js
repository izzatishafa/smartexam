"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Flex, Button, Row } from "antd";
import ModalHexaco from "./ModalHexaco";

const { Title, Text } = Typography;

export default function HexacoCard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const choices = [{ value: "Sangat Setuju" }, { value: "Setuju" }, { value: "Netral" }, { value: "Tidak Setuju" }, { value: "Sangat Tidak Setuju" }];

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button variant="outlined" color="green" onClick={showModal} style={{ margin: "16px 0px" }}>
          Panduan
        </Button>
      </Row>
      <ModalHexaco open={isModalOpen} close={handleClose} />
      <Card style={{ margin: "0px 40px 16px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }} bodyStyle={{ padding: "16px 32px 24px" }}>
        <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
          5. Saya lebih memilih untuk tidak mengambil keuntungan dari orang lain, bahkan jika kesempatan itu ada.
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
                onMouseOver={() => setHoveredOption(choice.value)}
                onMouseLeave={() => setHoveredOption(null)}
                style={{
                  color: selectedOption === choice.value ? "white" : "black",
                  backgroundColor: selectedOption === choice.value ? "#2D7CC1" : hoveredOption === choice.value ? "#96BDE0" : "white",
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
                    fontFamily: ["ABeeZee", "sans-serif"],
                  }}
                >
                  {choice.value}
                </p>
              </li>
            ))}
          </ol>
        </Space>
      </Card>
    </>
  );
}
