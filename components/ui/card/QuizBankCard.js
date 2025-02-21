"use client";

import React from "react";
import { Button, Col, Row, Typography } from "antd";
const { Title } = Typography;
import { useRouter } from "next/navigation";
import StashArrow from "./StashArrow";

const QuizBankCard = ({ title, route, onClick, isGrid, isDone = false }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    router.push(route);
  };

  return (
    <Col
      style={{
        position: "relative",
        minHeight: "320px",
        height: "330px",
        width: "100%",
        backgroundColor: "#FBFBFB",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
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
          color: isDone ? "rgba(144, 211, 106, 1)" : "rgba(255, 0, 0, 1)",
          backgroundColor: isDone ? "rgba(144, 211, 106, 0.2)" : "rgba(255, 0, 0, 0.2)",
        }}
      >
        {isDone ? "Done" : "Not Taken"}
      </div>
      {/* Bagian Title & Button */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: isGrid ? "column-reverse" : "column",
            justifyContent: isGrid ? "center" : "",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "fit-content",
              textAlign: isGrid ? "center" : "left",
            }}
          >
            <Title level={5} style={{ marginTop: "0.5rem" }}>
              {title}
            </Title>
          </div>
          <Row
            style={{
              width: "100%",
              height: "fit-content",
              display: "flex",
              justifyContent: isGrid ? "center" : "flex-end",
              alignItems: "center",
            }}
          >
            <img
              src="/assets/mobile-testing.svg"
              alt="image"
              style={{
                maxWidth: isGrid ? "100px" : "200px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Row>
        </div>
        <div
          style={{
            width: "100%",
            height: "fit-content",
            justifyContent: isGrid ? "center" : "left",
            display: "flex",
          }}
        >
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
        </div>
      </div>
    </Col>
  );
};

export default QuizBankCard;
