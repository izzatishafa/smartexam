"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Table, Radio } from "antd";

const { Title, Text } = Typography;

export default function DiscCard() {
  const [selectedOption, setSelectedOption] = useState({});

  const handleOptionChange = (key, type) => {
    setSelectedOption((prev) => ({
      ...prev,
      [key]: {
        most: type === "most" ? "most" : null,
        least: type === "least" ? "least" : null,
      },
    }));
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const dataSource = [
    { key: "1", pref: "A. Planning the work ahead" },
    { key: "2", pref: "B. Blablabla" },
    { key: "3", pref: "C. Another Choice" },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "pref",
      key: "pref",
      render: (text) => {
        const [firstLetter, ...restText] = text.split(" ");
        return (
          <span>
            <span
              style={{
                fontWeight: "bold",
                color: "#1890ff",
                backgroundColor: "#e6f7ff",
                borderRadius: "8px",
                padding: "4px 8px",
                marginRight: "8px",
                display: "inline-block",
              }}
            >
              {firstLetter}
            </span>
            <Text>{restText.join(" ")}</Text>
          </span>
        ); // <--- Add this missing closing bracket
      },
    },
    {
      title: "Most",
      dataIndex: "most",
      key: "most",
      render: (_, record) => (
        <Radio.Group
          onChange={(e) => handleOptionChange(record.key, "most", e.target.value)}
          value={selectedOption[record.key]?.most || null}
        >
          <Radio value="most"></Radio>
        </Radio.Group>
      ),
    },
    {
      title: "Least",
      dataIndex: "least",
      key: "least",
      render: (_, record) => (
        <Radio.Group
          onChange={(e) => handleOptionChange(record.key, "least", e.target.value)}
          value={selectedOption[record.key]?.least || null}
        >
          <Radio value="least"></Radio>
        </Radio.Group>
      ),
    },
  ];

  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
        marginBottom: "100px",
        paddingBottom: "50px",
      }}
      onCopy={handleCopy}
    >
      <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        Pilihlah opsi yang sesuai dengan kriteria Anda!
      </Title>
      <Space style={{ paddingLeft: "30px" }} direction="vertical">
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered={true}
          pagination={false}
          rowHoverable={false}
          style={{ minWidth: "600px" }}
        />
      </Space>
    </Card>
  );
}
