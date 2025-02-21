"use client";
import React, { useState, useEffect } from "react";
import { Typography, Card, Space, Table, Radio, Tag, Flex, Row, Button } from "antd";
import ModalDisc from "./ModalDisc";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const { Title, Text } = Typography;

export default function DiscCard() {
  const { getCurrentQuestion, setAnswer, answers, currentQuestion, currentSubtest, getCurrentQuestionData } = useExamStore();

  const questions = getCurrentQuestionData();

  const [selectedOption, setSelectedOption] = useState({
    most: null,
    least: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOptionChange = (key, type) => {
    setSelectedOption((prev) => {
      const newState = {
        ...prev,
        [type]: prev[type] === key ? null : key,
      };

      // Simpan jawaban ke Zustand store
      setAnswer(currentQuestion, { most: newState.most, least: newState.least });

      return newState;
    });
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const columns = [
    {
      title: "",
      dataIndex: "pref",
      key: "pref",
      render: (text) => {
        if (!text) {
          return "";
        }
        const [firstLetter, ...restText] = text.split(" ");
        return (
          <span>
            <Tag color="blue">{firstLetter}</Tag>
            <Text style={{ fontSize: "15px" }}>{restText.join(" ")}</Text>
          </span>
        );
      },
      onHeaderCell: () => ({
        style: {
          borderRadius: "6px 0 0 0",
          backgroundColor: "#8D97A0",
          color: "white",
          textAlign: "center",
          border: "none",
        },
      }),
    },
    {
      title: "Most",
      dataIndex: "most",
      key: "most",
      render: (_, record) => (
        <div style={{ textAlign: "center" }}>
          <Radio checked={selectedOption.most === record.key} disabled={selectedOption.least === record.key} onChange={() => handleOptionChange(record.key, "most")} />
        </div>
      ),
      onHeaderCell: () => ({
        style: {
          backgroundColor: "#8D97A0",
          color: "white",
          textAlign: "center",
          border: "none",
        },
      }),
    },
    {
      title: "Least",
      dataIndex: "least",
      key: "least",
      render: (_, record) => (
        <div style={{ textAlign: "center" }}>
          <Radio
            size="large"
            style={{
              borderColor: "yellow",
            }}
            checked={selectedOption.least === record.key}
            disabled={selectedOption.most === record.key}
            onChange={() => handleOptionChange(record.key, "least")}
          />
        </div>
      ),
      onHeaderCell: () => ({
        style: {
          borderRadius: "0 6px 0 0",
          backgroundColor: "#8D97A0",
          color: "white",
          textAlign: "center",
          border: "none",
        },
      }),
    },
  ];

  useEffect(() => {
    if (answers[currentQuestion]) {
      setSelectedOption({
        most: answers[currentQuestion].most,
        least: answers[currentQuestion].least,
      });
    } else {
      // Reset selection when moving to new question without answers
      setSelectedOption({
        most: null,
        least: null,
      });
    }
  }, [currentQuestion, answers]);

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button variant="outlined" size="middle" color="green" onClick={showModal} style={{ margin: "16px 0px" }}>
          Panduan
        </Button>
      </Row>
     <Card style={{ margin: "0px 24px 0px 24px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }}>
        <Title level={5} style={{ fontWeight: "normal", marginTop: "0", marginBottom: "0" }}>
          Pilihlah opsi yang sesuai dengan kriteria Anda!
        </Title>
        <Space direction="vertical">
          <Table
            dataSource={questions}
            columns={columns}
            bordered={true}
            size="large"
            pagination={false}
            rowHoverable={false}
            style={{
              minWidth: "500px",
              maxWidth: "800px",
              width: "fit-content",
            }}
          />
        </Space>
      </Card>
      <ModalDisc open={isModalOpen} close={handleClose} />
    </>
  );
}
