"use client";
<<<<<<< HEAD:components/ui/card/DiscCard.js
import React, { useEffect, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> 60f78905c2f0bcb53d11bc75328223e60cbc8026:app/(exam)/exam/disc/components/DiscCard.js
import { Typography, Card, Space, Table, Radio, Tag, Row, Button } from "antd";
import ModalDisc from "./ModalDisc";

const { Title, Text } = Typography;

<<<<<<< HEAD:components/ui/card/DiscCard.js
export default function DiscCard({ data, index, onAnswer, answer }) {
  // console.log("ini adalah daftar statements", data);
=======
export default function DiscCard({ data }) {
  console.log("ini adalah daftar statements", data);
>>>>>>> 60f78905c2f0bcb53d11bc75328223e60cbc8026:app/(exam)/exam/disc/components/DiscCard.js
  const [selectedOption, setSelectedOption] = useState({
    most: null,
    least: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
<<<<<<< HEAD:components/ui/card/DiscCard.js
=======

  const showModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
>>>>>>> 60f78905c2f0bcb53d11bc75328223e60cbc8026:app/(exam)/exam/disc/components/DiscCard.js

  useEffect(() => {
    setSelectedOption({ most: null, least: null });
  }, [data, index]);

  const showModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleOptionChange = (key, type, index) => {
    setSelectedOption((prev) => {
      if (type === "most" && prev.least === key) {
        return { ...prev, most: key, least: null };
      }
      if (type === "least" && prev.most === key) {
        return { ...prev, most: null, least: key };
      }
      return { ...prev, [type]: prev[type] === key ? null : key };
    });
    onAnswer(index, key, type);
  };

  // Konversi `statements` ke `dataSource`
  const dataSource =
    data?.statements?.map((item, index) => ({
      key: index, // Tambahkan key unik
      soal: item.soal,
      most: item.most,
      least: item.least,
    })) || [];

  const columns = [
    {
      title: "",
      dataIndex: "soal",
      key: "soal",
      render: (text) => {
        if (!text) return "";
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
          <input
            type="radio"
            style={{ cursor: "pointer", width: "20px", height: "20px" }}
            checked={selectedOption.most === record.key}
            disabled={selectedOption.least === record.key}
            onChange={() => handleOptionChange(record.key, "most")}
          />
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
          <input
            type="radio"
            style={{ cursor: "pointer", width: "20px", height: "20px" }}
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

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button
          color="green"
          onClick={showModal}
          style={{ margin: "16px 0px" }}
        >
          Panduan
        </Button>
      </Row>
      <Card
        style={{
          margin: "0px 40px 10px",
          boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)",
          border: "none",
        }}
        bodyStyle={{ padding: "16px 28px 24px" }}
      >
        <Title
          level={5}
          style={{ fontWeight: "normal", marginBottom: "2px", marginTop: 0 }}
        >
          Pilihlah opsi yang sesuai dengan kriteria Anda!
        </Title>
        <Space direction="vertical">
          <Table
            dataSource={dataSource}
            columns={columns}
            bordered
            size="large"
            pagination={false}
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
