"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Table } from "antd";

const { Title, Text } = Typography;

export default function TableTestCard() {
  const [selectedOption, setSelectedOption] = useState({});

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const dataSource = [
    {
      key: "1",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget neque ac felis cursus congue volutpat a lorem. Cras hendrerit posuere mauris. Vivamus vel diam maximus, pharetra nibh eget, convallis ligula. Vestibulum nec felis consectetur, sagittis purus sit amet, dapibus felis. Vestibulum vehicula vestibulum lectus in tincidunt. Nunc finibus sodales pulvinar. Curabitur bibendum urna urna, quis tincidunt lorem accumsan quis.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget neque ac felis cursus congue volutpat a lorem. Cras hendrerit posuere mauris. Vivamus vel diam maximus, pharetra nibh eget, convallis ligula. Vestibulum nec felis consectetur, sagittis purus sit amet, dapibus felis. Vestibulum vehicula vestibulum lectus in tincidunt. Nunc finibus sodales pulvinar. Curabitur bibendum urna urna, quis tincidunt lorem accumsan quis.",
    },
  ];

  const columns = [
    {
      title: (
        <p style={{ fontSize: "16px", color: "white", textAlign: "center" }}>
          Header 1
        </p>
      ),
      dataIndex: "content1",
      key: "content1",
      onHeaderCell: () => ({
        style: { backgroundColor: "#8D97A0", border: "none" },
      }),
    },
    {
      title: (
        <p style={{ fontSize: "16px", color: "white", textAlign: "center" }}>
          Header 2
        </p>
      ),
      dataIndex: "content2",
      key: "content2",
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
      <Title level={4} style={{ fontWeight: "normal", padding: "0px 0px 15px 5px" }}>
        Perhatikan data pada tabel berikut untuk menjawab soal nomor 5-10 !
      </Title>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered={true}
        pagination={false}
        rowHoverable={false}
        style={{
          minWidth: "550px",
          maxWidth: "1200px",
          marginBottom: "30px",
          paddingRight: "50px",
        }}
      />
      <Typography style={{}}>
        <Text style={{ fontSize: "17px" }}>
          Dari data tabel tersebut manakah yang blablabla ?
        </Text>
      </Typography>
      <Space>
        <ol
          style={{
            color: "#000",
            listStyleType: "none",
            paddingLeft: "0px",
            fontSize: "15px",
          }}
        >
          {["A", "B", "C", "D"].map((choice, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(choice)}
              style={{
                color: "#1B3042",
                backgroundColor:
                  selectedOption === choice ? "#D6E4FF" : "#E9F0FC",
                padding: "8px 50px 8px 15px",
                borderRadius: "15px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                border:
                  selectedOption === choice ? "2px solid #0A01FF" : "none",
              }}
            >
              <span
                style={{
                  backgroundColor: "white",
                  color: "#0A01FF",
                  padding: "5px 10px",
                  borderRadius: "100%",
                  marginRight: "15px",
                }}
              >
                {choice}
              </span>
              <p
                style={{
                  margin: 0,
                  fontFamily: ["ABeeZee", "sans-serif"],
                  fontWeight: "semibold",
                }}
              >
                Ini adalah contoh pilihan ganda dari quiz
              </p>
            </li>
          ))}
        </ol>
      </Space>
    </Card>
  );
}
