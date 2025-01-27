"use client";

import React from "react";
import { Col, Row, Typography } from "antd";
import HeaderComponent from "@/components/ui/Header";
import QuizBankCard from "@/components/ui/card/QuizBankCard";

const { Title, Text } = Typography;

const QuizBankList = [
  { title: "Hexaco", route: "/exam/personal/hexaco" },
  { title: "WPT", route: "/exam/wpt_taxand" },
  { title: "GTI Group", route: "/exam/gti/subtest1/tutorial" },
  { title: "DISC", route: "/exam/disc" },
  { title: "Essay", route: "/exam/essay" },
  { title: "Accounting Junior", route: "/exam/accounting_junior" },
  { title: "Accounting Senior", route: "/exam/accounting_senior" },
  { title: "English University", route: "/exam/english" },
];

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <Row
        style={{
          backgroundColor: "lightgray",
          backgroundImage: "url('/assets/white-texture-bg.png')",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "2rem",
        }}
      >
        <Row
          gutter={[24, 16]} // Horizontal (24px) and Vertical (16px) spacing
          style={{
            width: "90%", // Adjusted for smaller screens
            maxWidth: "1200px", // Prevents too wide on large screens
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap", // Allows wrapping on smaller screens
          }}
        >
          {/* Left Panel (User Info) */}
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={6}
            xl={6}
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "fit-content",
              padding: "1rem",
              border: "4px solid orange",
            }}
          >
            <Col
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <Title
                  level={5}
                  style={{ marginTop: "0.25rem", color: "gray" }}
                >
                  Nama Peserta
                </Title>
                <Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  John Doe
                </Text>
              </div>

              <div>
                <Title
                  level={5}
                  style={{ marginTop: "0.25rem", color: "gray" }}
                >
                  Kode Peserta
                </Title>
                <Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  1101110111
                </Text>
              </div>

              <div>
                <Title
                  level={5}
                  style={{ marginTop: "0.25rem", color: "gray" }}
                >
                  Waktu Ujian
                </Title>
                <Text>9 January 2025, 09:06:00</Text>
                <br />
                <Text style={{ margin: "0.5rem 0" }}>sampai</Text>
                <br />
                <Text>30 January 2025, 09:06:00</Text>
              </div>
            </Col>
          </Col>

          {/* Right Panel (Quiz List) */}
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={17}
            xl={17}
            style={{
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "fit-content",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
              }}
            >
              <Col span={25}>
                <Row
                  style={{
                    height: "fit-content",
                    backgroundColor: "white",
                    border: "4px solid orange",
                    marginBottom: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Title level={4} style={{ marginTop: "0.5rem" }}>
                    Selamat datang di SmartExam
                  </Title>
                </Row>
                {QuizBankList.map((item, key) => (
                  <QuizBankCard
                    key={key}
                    title={item.title}
                    route={item.route}
                  />
                ))}
              </Col>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default HomePage;
