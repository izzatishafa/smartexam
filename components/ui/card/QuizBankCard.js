"use client";

import React from "react";
import { Button, Col, Row, Typography } from "antd";
const { Title } = Typography;
import { LoginOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const QuizBankCard = ({ title, route, isPackage }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <Row
      style={{
        minHeight: "240px",
        height: isPackage ? "330px" : "240px",
        backgroundColor: "white",
        border: "1px solid #1B3042",
        borderRadius: "10px",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        flexWrap: "nowrap",
        marginBottom: "2rem",
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
          height: "100%",
          minHeight: "120px",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          flexGrow: 1, // Mengatur agar konten berkembang mengikuti tinggi
        }}
      >
        <Title level={5} style={{ marginTop: "0" }}>
          {title}
        </Title>
        <Button
          style={{ width: "fit-content" }}
          color="default"
          variant="solid"
          icon={<LoginOutlined />}
          iconPosition="end"
          onClick={handleClick}
        >
          Start
        </Button>
      </Col>

      {/* Bagian Gambar */}
      <Col
        xs={10}
        sm={10}
        md={8}
        lg={6}
        xl={isPackage ? 8 : 6}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/mobile-testing.svg"
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
