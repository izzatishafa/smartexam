"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Table, Radio, Tag, Flex, Row, Button } from "antd";
import ModalDisc from "./ModalDisc";

const { Title, Text } = Typography;

export default function DiscCard({ data }) {
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
      if (type === "most" && prev.least === key) {
        return { ...prev, most: key, least: null };
      }
      if (type === "least" && prev.most === key) {
        return { ...prev, most: null, least: key };
      }

      return {
        ...prev,
        [type]: prev[type] === key ? null : key,
      };
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

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button variant="outlined" color="green" onClick={showModal} style={{ margin: "16px 0px" }}>
          Panduan
        </Button>
      </Row>
      <Card style={{ margin: "0px 40px 16px", boxShadow: "0 0 4px 0 rgba(27, 48, 66, 0.3)", border: "none" }} bodyStyle={{ padding: "16px 32px 24px" }}>
        <Title level={5} style={{ fontWeight: "normal", marginTop: "0", marginBottom: "1rem" }}>
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
      </Card>
      <ModalDisc open={isModalOpen} close={handleClose} />
    </>
  );
}
