"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Table, Radio, Tag, Flex } from "antd";

const { Title, Text } = Typography;

export default function DiscCard({ data }) {
  const [selectedOption, setSelectedOption] = useState({
    most: null,
    least: null,
  });

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

  const dataSource = [
    { key: "1", pref: "A Planning the work ahead" },
    { key: "2", pref: "B Planning the work ahead" },
    { key: "3", pref: "C Planning the work ahead" },
    { key: "4", pref: "D Planning the work ahead" },
  ];

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
          dataSource={dataSource}
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
