"use client";
import React, { useState } from "react";
import { Typography, Card, Row, Col, Space, Button, Flex } from "antd";

const { Title, Text } = Typography;

export default function GtiCard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
        marginBottom: "100px",
        paddingBottom: "30px",
      }}
      onCopy={handleCopy}
    >
      <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        5. Berapa jumlah pasangan huruf yang memiliki kesamaan?
      </Title>
      <Row style={{ margin: "20px 0px 10px 40px", gap: "45px" }}>
        <Col
          span={3}
          style={{
            border: "1px solid lightgray",
            textAlign: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: "5rem",
              }}
            >
              Q
            </Text>
            <Text
              style={{
                fontSize: "2rem",
                color: "white",
                backgroundColor: "gray",
                padding: "4px 0px 4px 0px",
              }}
            >
              r
            </Text>
          </div>
        </Col>
        <Col
          span={3}
          style={{
            border: "1px solid lightgray",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: "5rem",
              }}
            >
              T
            </Text>
            <Text
              style={{
                fontSize: "2rem",
                color: "white",
                backgroundColor: "gray",
                padding: "4px 0px 4px 0px",
              }}
            >
              n
            </Text>
          </div>
        </Col>
        <Col
          span={3}
          style={{
            border: "1px solid lightgray",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: "5rem",
              }}
            >
              H
            </Text>
            <Text
              style={{
                fontSize: "2rem",
                color: "white",
                backgroundColor: "gray",
                padding: "4px 0px 4px 0px",
              }}
            >
              b
            </Text>
          </div>
        </Col>
        <Col
          span={3}
          style={{
            border: "1px solid lightgray",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: "5rem",
              }}
            >
              E
            </Text>
            <Text
              style={{
                fontSize: "2rem",
                color: "white",
                backgroundColor: "gray",
                padding: "4px 0px 4px 0px",
              }}
            >
              a
            </Text>
          </div>
        </Col>
      </Row>
      <Row style={{ margin: "0px 0px 10px 40px", gap: "50px" }}>
        <Col span={2} style={{ margin: "40px 0px 10px 0px", gap: "60px" }}>
          <Button
            style={{
              padding: "20px 50px 20px 50px",
              fontSize: "2rem",
            }}
          >
            0
          </Button>
        </Col>
        <Col span={2} style={{ margin: "40px 0px 10px 0px", gap: "60px" }}>
          <Button
            style={{
              padding: "20px 50px 20px 50px",
              fontSize: "2rem",
            }}
          >
            1
          </Button>
        </Col>
        <Col span={2} style={{ margin: "40px 0px 10px 0px", gap: "60px" }}>
          <Button
            style={{
              padding: "20px 50px 20px 50px",
              fontSize: "2rem",
            }}
          >
            2
          </Button>
        </Col>
        <Col span={2} style={{ margin: "40px 0px 10px 0px", gap: "60px" }}>
          <Button
            style={{
              padding: "20px 50px 20px 50px",
              fontSize: "2rem",
            }}
          >
            3
          </Button>
        </Col>
        <Col span={2} style={{ margin: "40px 0px 10px 0px", gap: "60px" }}>
          <Button
            style={{
              padding: "20px 50px 20px 50px",
              fontSize: "2rem",
            }}
          >
            4
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
