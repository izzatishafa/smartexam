"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Table, Radio, Tag } from "antd";

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

<<<<<<< HEAD
=======
  const dataSource = [
    { key: "1", pref: "A Planning the work ahead" },
    { key: "2", pref: "B Planning the work ahead" },
    { key: "3", pref: "C Planning the work ahead" },
    { key: "4", pref: "D Planning the work ahead" },
  ];

>>>>>>> e2fa345 (fix: Perbaiki tampilan data dengan mengaktifkan dummy data)
  const columns = [
    {
      title: "Pernyataan",
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
        style: { backgroundColor: "lightgray", textAlign: "center" },
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
        style: { backgroundColor: "lightgray", textAlign: "center" },
      }),
    },
    {
      title: "Least",
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
        style: { backgroundColor: "lightgray", textAlign: "center" },
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
      <Title level={5} style={{ fontWeight: "normal" }}>
        Pilihlah opsi yang sesuai dengan kriteria Anda!
      </Title>
      <Space direction="vertical">
        <Table
<<<<<<< HEAD
          dataSource={data}
=======
          dataSource={dataSource}
>>>>>>> e2fa345 (fix: Perbaiki tampilan data dengan mengaktifkan dummy data)
          columns={columns}
          bordered={true}
          size="small"
          pagination={false}
          rowHoverable={false}
          style={{ minWidth: "550px" }}
        />
      </Space>
    </Card>
  );
}
