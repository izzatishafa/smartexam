"use client";

import React from "react";
import { Col, Row, Typography } from "antd";
import HeaderComponent from "@/components/ui/Header";
const { Title, Text } = Typography;
import QuizBankCard from "@/components/ui/card/QuizBankCard";

const QuizBankList = [
  { title: "Hexaco", route: "/exam/personal/hexaco" },
  { title: "GTI Group", route: "/exam/gti/subtest1/tutorial" },
  { title: "DISC", route: "/exam/disc" },
  { title: "Essay", route: "/exam/essay" },
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
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "2rem",
        }}
      >
        <Row
          gutter={[24, 16]} // Menambahkan jarak horizontal (24px) dan vertikal (16px)
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "space-between", // Memastikan jarak antar Col
            rowGap: "1rem", // Opsional: Jarak antar baris
            columnGap: "1rem", // Menambahkan jarak antar Col
          }}
        >
          {/* Bagian Kiri */}
          <Col
            span={6}
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "fit-content",
              padding: "1rem",
              border: "4px solid orange",
              // border: "4px solid darkslategray",
            }}
          >
            <Col
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                border: "1px solid white",
                display: "flex", // Membuat elemen di dalamnya flexbox
                flexDirection: "column", // Mengatur elemen secara vertikal
                gap: "1rem", // Memberikan jarak antar div
              }}
            >
              <div>
                <Title
                  style={{ marginTop: "0.25rem", color: "gray" }}
                  level={5}
                >
                  Nama Peserta
                </Title>
                <Text
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
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
                <Text
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
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
                <Text style={{ marginTop: "0.25rem" }}>
                  9 January 2025, 09:06:00
                </Text>
                <br />
                <Text style={{ margin: "0.5rem 0" }}>sampai</Text>
                <br />
                <Text style={{ marginTop: "0.25rem" }}>
                  30 January 2025, 09:06:00
                </Text>
              </div>
            </Col>
          </Col>

          {/* Bagian Kanan */}
          <Col
            span={16}
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
              {/* Pembungkus untuk kotak-kotak */}
              <Col span={25}>
                <Row
                  style={{
                    height: "fit-content",
                    backgroundColor: "white",
                    border: "4px solid orange",
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "2rem",
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
