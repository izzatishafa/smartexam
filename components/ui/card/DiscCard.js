"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Table, Radio } from "antd";

const { Title, Text } = Typography;

export default function DiscCard() {
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

  // const dataSource = [
  //   { key: "1", pref: "A Planning the work ahead" },
  //   { key: "2", pref: "B Planning the work ahead" },
  //   { key: "3", pref: "C Planning the work ahead" },
  //   { key: "4", pref: "D Planning the work ahead" },
  // ];

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
                color: "#0A01FF",
                backgroundColor: "#e6e7e7",
                borderRadius: "100%",
                padding: "4px 8px",
                margin: "0px 12px 2px 8px",
                display: "inline-block",
              }}
            >
              {firstLetter}
            </span>
            <Text style={{ fontWeight: "bold", fontSize: "15px" }}>
              {restText.join(" ")}
            </Text>
          </span>
        );
      },
      onHeaderCell: () => ({
        style: { backgroundColor: "#8D97A0", border: "none" },
      }),
    },
    {
      title: (
        <p style={{ fontSize: "16px", color: "white", textAlign: "center" }}>
          Most
        </p>
      ),
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
        style: { backgroundColor: "#8D97A0", border: "none" },
      }),
    },
    {
      title: (
        <p style={{ fontSize: "16px", color: "white", textAlign: "center" }}>
          Least
        </p>
      ),
      dataIndex: "least",
      key: "least",
      render: (_, record) => (
        <div style={{ textAlign: "center" }}>
          <Radio
            checked={selectedOption.least === record.key}
            disabled={selectedOption.most === record.key}
            onChange={() => handleOptionChange(record.key, "least")}
          />
        </div>
      ),
      onHeaderCell: () => ({
        style: { backgroundColor: "#8D97A0", border: "none" },
      }),
    },
  ];

  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
        marginBottom: "70px",
        padding: "0px 0px 10px 10px",
      }}
      onCopy={handleCopy}
    >
      <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        Pilihlah opsi yang sesuai dengan kriteria Anda!
      </Title>
      <Space direction="vertical">
        <Table
          // dataSource={dataSource}
          columns={columns}
          bordered={true}
          pagination={false}
          rowHoverable={false}
          style={{ minWidth: "550px" }}
        />
      </Space>
    </Card>
  );
}
