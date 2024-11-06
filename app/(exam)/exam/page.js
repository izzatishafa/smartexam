"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Typography, Col, Row, Card, Button, Checkbox, Space } from "antd";
const { Title, Text } = Typography;

const Exam = () => {
  return (
    <>
      <Typography style={{ textAlign: "center" }}>
        <Title level={1} style={{ color: "#1B3042" }}>
          Exam Page
        </Title>
      </Typography>
    </>
  );
};

export default Exam;
