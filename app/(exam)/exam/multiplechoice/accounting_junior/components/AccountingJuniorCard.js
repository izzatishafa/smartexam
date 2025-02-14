"use client";
import React, { useEffect, useState } from "react";
import { Typography, Card, Space, Divider, Flex, Button, Row } from "antd";
import MultipleChoice from "@/components/ui/MultipleChoice";

const { Title, Text } = Typography;

export default function AccountingJuniorCard({
  data,
  onAnswer,
  answered,
  index,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  useEffect(() => {
    setSelectedOption(answered || null);
  }, [index, answered]);

  const handleAnswer = (choice, label) => {
    setSelectedOption(choice);
    onAnswer(index, choice, label); // Kirim dengan index soal
  };

  console.log("ini soal acc jr : ", data);

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
    <>
      <Row
        style={{
          width: "100%",
          paddingRight: "24px",
        }}
        justify="end"
      >
        <Button
          color="green"
          onClick={showModal}
          style={{ margin: "0 0 16px" }}
        >
          Panduan
        </Button>
      </Row>
      <Card
        style={{
          margin: "0px 14px 10px",
          boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
          border: "none",
          backgroundColor: "#fff",
        }}
      >
        <Title level={5} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
          5. Pilihlah pasangan kata yang mempunyai kesesuaian dengan pola soal.
        </Title>

        <Space style={{ paddingLeft: "30px" }} direction="vertical">
          <Text style={{ fontSize: "14px" }}>
            PT A melakukan perjanjian dengan PT B untuk menjual Mesin atas nama
            PT B.
          </Text>
          <Text style={{ fontSize: "14px" }}>Manakah jawaban yang sesuai?</Text>
          {/* <MultipleChoice
            data={data.answer_choices}
            onAnswer={handleAnswer}
            currentAnswer={selectedOption}
          /> */}
        </Space>
      </Card>
    </>
  );
}
