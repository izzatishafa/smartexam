"use client";

import React from "react";
import { Button, Col, Row, Typography } from "antd";
const { Title } = Typography;
import { useRouter } from "next/navigation";
import StashArrow from "./StashArrow";

const QuizBankCard = ({ title, route, isPackage, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    router.push(route);
  };

  return (
    <Row
      style={{
        position: "relative",
        minHeight: "240px",
        height: "330px",
        backgroundColor: "#FBFBFB",
        borderRadius: "10px",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        flexWrap: "nowrap",
        marginBottom: "0rem",
        boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        style={{
          height: "fit-content",
          width: "fit-content",
          position: "absolute",
          top: "1rem",
          right: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "6rem",
          color: "rgba(255, 0, 0, 1)",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}
      >
        Not Taken
      </div>
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
          style={{
            width: "fit-content",
            height: "fit-content",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem 1rem",
            borderRadius: "6rem",
            backgroundColor: "#1B3042",
            color: "white",
          }}
          variant="solid"
          icon={<StashArrow />}
          onClick={handleClick}
        >
          Start Test
        </Button>
      </Col>

      {/* Bagian Gambar */}
      <Col
        xs={10}
        sm={10}
        md={8}
        lg={6}
        xl={isPackage ? 6 : 6}
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
