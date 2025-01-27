"use client";

import React from "react";
import { Button, Col, Row, Typography } from "antd";
const { Title } = Typography;
import { LoginOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const QuizBankCard = ({ title, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <Row
      style={{
        minHeight: "200px", // Tinggi minimum agar tidak terlalu kecil
        height: "auto", // Tinggi mengikuti isi
        backgroundColor: "white",
        border: "4px solid orange",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        flexWrap: "nowrap",
      }}
    >
      {/* Bagian Title & Button */}
      <Col
        xs={14}
        sm={14}
        md={12}
        lg={12}
        xl={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1, // Mengatur agar konten berkembang mengikuti tinggi
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

      {/* Bagian Gambar */}
      <Col
        xs={10}
        sm={10}
        md={6}
        lg={6}
        xl={6}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/exam-boy.jpg"
          alt="image"
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Col>
    </Row>
  );
};

export default QuizBankCard;
