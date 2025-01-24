"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Radio } from "antd";
import MultipleChoice from "../MultipleChoice";

const { Title, Text } = Typography;

export default function EnglishCard() {
  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
      }}
    >
      <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        1. Choose the gramatically correct word or pharse to compele the
        following sentence.
        <br /> _______ is the most important meal of the day.
      </Title>
      <Space
        style={{ width: "100%", paddingLeft: "30px", marginTop: "1rem" }}
        direction="vertical"
      >
        <MultipleChoice />
      </Space>
    </Card>
  );
}
