"use client";
import React, { useEffect, useState } from "react";
import { Typography, Card, Space, Table, Radio, Tag, Row, Button } from "antd";
import ModalDisc from "./ModalDisc";

const { Title, Text } = Typography;

export default function DiscCard({ data, index, onAnswer, answer }) {
  // console.log("ini adalah daftar statements", data);
  const [selectedOption, setSelectedOption] = useState({
    most: null,
    least: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <Radio
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

  return (
    <Flex
      style={{
        width: "100%",
        flexDirection: "column",
        userSelect: "none",
        // border: "1px solid #1B3042",
      }}
      onCopy={handleCopy}
    >
      <Title
        level={5}
        style={{ fontWeight: "normal", marginTop: "0", marginBottom: "1rem" }}
      >
        Pilihlah opsi yang sesuai dengan kriteria Anda!
      </Title>
      <Space direction="vertical">
        <Table
          dataSource={data}
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
    </Flex>
  );
}
