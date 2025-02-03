"use client";
import React, { useState, useEffect } from "react";
import { Layout, Divider, Flex, Typography, Space, Dropdown, Button, theme, Row, Col } from "antd";
import { CaretDownFilled } from "@ant-design/icons";
import "../../app/globals.css";

const { Header } = Layout;
const { Text } = Typography;

const items = [
  {
    key: "1",
    label: "Username: Jhon Doe",
  },
  {
    key: "2",
    label: "Kode: 12345678",
  },
  {
    key: "3",
    label: "Waktu Ujian: sekian - sekian",
  },
];

export default function HeaderComponent() {
  const { useToken } = theme;
  const { token } = useToken();
  const [examTitle, setExamTitle] = useState("Online Test - Bahasa Inggris University");
  const [timeLeft, setTimeLeft] = useState("Timer Left"); // Ini bisa diubah menjadi perhitungan waktu yang sebenarnya
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(58);
  const [seconds, setSeconds] = useState(49);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle = {
    boxShadow: "none",
  };

  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: "auto",
          padding: "0",
        }}
      >
        <Row style={{ width: "100%" }}>
          <Row justify="space-between" style={{ width: "100%", padding: "15px 20px" }}>
            <Row>
              <Row
                style={{
                  alignItems: "center",
                  gap: "10px",
                }}
                horizontal="true"
              >
                <img src="/assets/logo-smartexam.png" alt="logo" style={{ width: 35 }} />
                <Text
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "#1B3042",
                  }}
                >
                  SMARTEXAM
                </Text>
              </Row>
            </Row>
            <Row>
              <Dropdown
                menu={{
                  items,
                }}
                dropdownRender={(menu) => (
                  <div className="no-hover" style={contentStyle}>
                    {React.cloneElement(menu, {
                      style: menuStyle,
                    })}
                    <Divider style={{ margin: 0 }} />
                    <Space style={{ padding: 8 }}>
                      <Button danger>Log Out</Button>
                    </Space>
                  </div>
                )}
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  style={{
                    display: "flex",
                    color: "gray",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src="/assets/profile-pict.png" alt="profile picture" style={{ width: 40 }} />
                  <CaretDownFilled />
                </a>
              </Dropdown>
            </Row>
          </Row>
          <Row style={{ width: "100%", height: "60px" }}>
            <Row
              style={{
                backgroundColor: "#1B3042",
                color: "white",
                width: "100%",
              }}
            >
              <Col flex={5} style={{ height: 50, borderRight: "1px solid #a9a9a9" }}></Col>
              <Col flex={1.66} style={{ height: 50 }}></Col>
            </Row>
            <Row align="middle" style={{ height: "60px", width: "100%" }}>
              <Col
                flex={8}
                style={{
                  backgroundColor: "white",
                  borderBottom: "1px solid #E0E0E0",
                  padding: "20px",
                  margin: "0 38px",
                  height: "100%", // Pastikan tinggi mengikuti Row
                  display: "flex",
                  alignItems: "center", // Pusatkan konten secara vertikal
                }}
              >
                title
              </Col>
              {/* Timer Section */}
              <Col
                style={{
                  backgroundColor: "white",
                  borderBottom: "1px solid #E0E0E0",
                  borderLeft: "1px solid #E0E0E0",
                  height: "100%", // Pastikan tinggi mengikuti Row
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Pusatkan timer secara vertikal
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
                  <span style={{ fontSize: "18px", fontWeight: "500", gridColumn: "1" }}>{formatNumber(hours)}</span>
                  <span style={{ fontSize: "18px", fontWeight: "500", margin: "0 10px" }}>:</span>
                  <span style={{ fontSize: "18px", fontWeight: "500", gridColumn: "3" }}>{formatNumber(minutes)}</span>
                  <span style={{ fontSize: "18px", fontWeight: "500", margin: "0 10px" }}>:</span>
                  <span style={{ fontSize: "18px", fontWeight: "500", gridColumn: "5" }}>{formatNumber(seconds)}</span>
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
                  <Text style={{ color: "#666", gridColumn: "1", fontSize: "12px" }}>Hours</Text>
                  <span style={{ width: "20px" }}></span>
                  <Text style={{ color: "#666", gridColumn: "3", fontSize: "12px" }}>Minutes</Text>
                  <span style={{ width: "20px" }}></span>
                  <Text style={{ color: "#666", gridColumn: "5", fontSize: "12px" }}>Seconds</Text>
                </div>
              </Col>
            </Row>
          </Row>
        </Row>
      </Header>
    </>
  );
}
