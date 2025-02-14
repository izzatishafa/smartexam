"use client";
import React, { useEffect, useState } from "react";
import { Typography, Card, Space, Row, Button, Flex } from "antd";
import MultipleChoice from "@/components/ui/MultipleChoice";
import ModalEnglish from "./ModalEnglish";

const { Text } = Typography;

export default function EnglishCard({ data, onAnswer, answered, index }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  // Saat pindah soal, cek apakah sudah ada jawaban sebelumnya
  useEffect(() => {
    setSelectedOption(answered || null);
  }, [index, answered]);

  const handleAnswer = (choice, label) => {
    setSelectedOption(choice);
    onAnswer(index, choice, label); // Kirim dengan index soal
  };

  console.log("ini soal english : ", data);
  // console.log(
  //   "ini soal english : ",
  //   data.answer_choices.map((item) => item.choice)
  // );

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
        <Flex
          direction="column"
          style={{ width: "100%", flexDirection: "column" }}
        >
          <Text
            style={{
              fontWeight: "normal",
              paddingLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <strong>{index}</strong> . Choose the grammatically correct word ord
            phrase to complete the following sentences.
          </Text>
          <Text
            style={{ marginLeft: "2rem", fontSize: "16px", fontWeight: "bold" }}
          >
            {data.question}
          </Text>
        </Flex>
        <Space
          style={{ width: "100%", paddingLeft: "30px", marginTop: "10px" }}
          direction="vertical"
        >
          <MultipleChoice
            data={data.answer_choices}
            onAnswer={handleAnswer}
            currentAnswer={selectedOption}
          />
        </Space>
      </Card>
      <ModalEnglish open={isModalOpen} close={handleClose} />
    </>
  );
}
