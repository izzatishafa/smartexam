"use client";

import React from "react";
import { Col, Row, Typography } from "antd";

const { Title, Text } = Typography;

const HeaderContent = ({ judul, subJudul, hours, minutes, seconds }) => {
  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <Row style={{ width: "100%", justifyContent: "space-between" }}>
      <Col xs={24} sm={18} lg={18}>
        <Row
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#1b3042",
          }}
          justify="center"
          align="middle"
        >
          <Col>
            <Title level={4} style={{ color: "white", margin: 0 }}>
              {judul}
            </Title>
          </Col>
        </Row>
        <Row style={{ width: "100%", height: "65px", padding: "0px 30px" }}>
          <Col
            style={{
              width: "100%",
              height: "100%",
              borderBottom: "1px solid #AAAAAA",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Title level={4} style={{ color: "black", margin: 0 }}>
              {subJudul}
            </Title>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={6} lg={6} style={{ borderLeft: "1px solid #E0E0E0" }}>
        <Row
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#1b3042",
          }}
          justify="center"
          align="middle"
        >
          <Col>
            <Title level={4} style={{ color: "white", margin: 0 }}>
              Waktu
            </Title>
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            height: "65px",
            borderBottom: "1px solid #AAAAAA",
          }}
          align="middle"
        >
          <Col
            span={24}
            style={{
              backgroundColor: "white",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Timer Numbers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr auto 1fr",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  gridColumn: "1",
                }}
              >
                {formatNumber(hours)}
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "0 10px",
                }}
              >
                :
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  gridColumn: "3",
                }}
              >
                {formatNumber(minutes)}
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "0 10px",
                }}
              >
                :
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  gridColumn: "5",
                }}
              >
                {formatNumber(seconds)}
              </span>
            </div>

            {/* Timer Labels */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr auto 1fr",
                justifyItems: "center",
                alignItems: "center",
                marginTop: "-15px",
                marginBottom: "20px",
              }}
            >
              <Text
                style={{
                  color: "#666",
                  gridColumn: "1",
                  fontSize: "12px",
                }}
              >
                Hours
              </Text>
              <span style={{ width: "20px" }}></span>
              <Text
                style={{
                  color: "#666",
                  gridColumn: "3",
                  fontSize: "12px",
                }}
              >
                Minutes
              </Text>
              <span style={{ width: "20px" }}></span>
              <Text
                style={{
                  color: "#666",
                  gridColumn: "5",
                  fontSize: "12px",
                }}
              >
                Seconds
              </Text>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderContent;
