"use client";

import React from "react";
import { Button, Col, Row, Typography } from "antd";
const { Title } = Typography;
import { LoginOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const QuizBankCard = ({ title, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route); // Menggunakan route yang diterima sebagai prop
  };

  return (
    <Row
      style={{
        height: "240px",
        backgroundColor: "white",
        border: "4px solid orange",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
      }}
    >
      <Col
        span={12}
        style={{
          height: "100%",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <Title level={5} style={{ marginTop: "0" }}>
          {title}
        </Title>
        <Button
          style={{ width: "fit-content" }}
          type="primary"
          color="orange"
          icon={<LoginOutlined />}
          onClick={handleClick}
        >
          Open
        </Button>
      </Col>
      <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
        <img src="/assets/exam-boy.jpg" alt="image" width={180} height={180} />
      </Col>
    </Row>
  );
};

export default QuizBankCard;
