"use client";
import React, { useState, useEffect } from "react";
import { Table, Radio, Tag, Typography } from "antd";
const { Title, Text } = Typography;

const DiscRadioQuestion = ({
  dataSource,
  defaultMost = null,
  defaultLeast = null,
}) => {
  const [selectedMost, setSelectedMost] = useState(defaultMost);
  const [selectedLeast, setSelectedLeast] = useState(defaultLeast);

  // Update nilai jika defaultMost atau defaultLeast berubah
  useEffect(() => {
    setSelectedMost(defaultMost);
    setSelectedLeast(defaultLeast);
  }, [defaultMost, defaultLeast]);

  const handleSelectMost = (key) => {
    if (selectedLeast !== key) {
      setSelectedMost(key);
    }
  };

  const handleSelectLeast = (key) => {
    if (selectedMost !== key) {
      setSelectedLeast(key);
    }
  };

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
    },
    {
      title: "Most",
      key: "most",
      render: (_, record) => (
        <Radio.Group
          onChange={() => handleSelectMost(record.key)}
          value={selectedMost}
        >
          <Radio disabled value={record.key} />
        </Radio.Group>
      ),
    },
    {
      title: "Least",
      key: "least",
      render: (_, record) => (
        <Radio.Group
          onChange={() => handleSelectLeast(record.key)}
          value={selectedLeast}
        >
          <Radio disabled value={record.key} />
        </Radio.Group>
      ),
    },
  ];

  return (
    <Table
      style={{ width: "600px" }}
      columns={columns}
      size="small"
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default DiscRadioQuestion;
