"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Radio } from "antd";

const { Title, Text } = Typography;

export default function EssayCard() {
  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
      }}
    >
      <Title level={5} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        1. Lorem Ipsum Dolor si Amet minimal 5.
      </Title>
      <Space
        style={{ width: "100%", paddingLeft: "30px", marginTop: "1rem" }}
        direction="vertical"
      ></Space>
      <Title level={5}>Answer :</Title>
    </Card>
  );
}
