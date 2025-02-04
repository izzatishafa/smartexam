"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Divider, Flex } from "antd";
import MultipleChoice from "../MultipleChoice";

const { Title, Text } = Typography;

export default function AccountingJuniorCard() {
  const handleCopy = (e) => {
    e.preventDefault();
  };

  const choices = [
    { label: "A", value: "Pegunungan" },
    { label: "B", value: "Hutan" },
    { label: "C", value: "Pohon" },
    { label: "D", value: "Hijau" },
    { label: "E", value: "Tinggi" },
  ];

  return (
    <Flex
      style={{
        width: "100%",
        flexDirection: "column",
        userSelect: "none",
      }}
      onCopy={handleCopy}
    >
      <Title level={5} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        5. Pilihlah pasangan kata yang mempunyai kesesuaian dengan pola soal.
      </Title>

      <Space style={{ paddingLeft: "30px" }} direction="vertical">
        <Text style={{ fontSize: "14px" }}>
          PT A melakukan perjanjian dengan PT B untuk menjual Mesin atas nama PT
          B.
        </Text>
        <Text style={{ fontSize: "14px" }}>Manakah jawaban yang sesuai?</Text>
        <MultipleChoice />
      </Space>
    </Flex>
  );
}
