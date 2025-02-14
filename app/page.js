"use client";

import React from "react";
import { Col, Flex, Row, Typography } from "antd";
import HeaderComponent from "@/components/ui/Header";
import QuizBankCard from "@/components/ui/card/QuizBankCard";

const { Title, Text } = Typography;

const QuizBankList = [
  { title: "Hexaco", route: "/exam/personal/hexaco" },
  { title: "GTI Group", route: "/exam/gti/subtest1/tutorial-intro" },
  { title: "WPT", route: "/exam/multiplechoice/wpt_taxand" },
  {
    title: "Accounting Junior",
    route: "/exam/multiplechoice/accounting_junior",
  },
  {
    title: "Accounting Senior",
    route: "/exam/multiplechoice/accounting_senior",
  },
  { title: "English University", route: "/exam/multiplechoice/english" },
  { title: "Essay", route: "/exam/multiplechoice/essay" },
  { title: "DISC", route: "/exam/disc" },
];

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <Flex
        style={{
          backgroundColor: "white",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <Row
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Title level={2} style={{ marginTop: "0.5rem" }}>
            Selamat Datang di Online Test SMARTEXAM
          </Title>
        </Row>
        <Row
          gutter={[24, 16]} // Horizontal (24px) and Vertical (16px) spacing
          style={{
            width: "90%",
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
              height: "330px",
              backgroundColor: "white",
              justifyContent: "space-between",
              alignItems: "end",
              padding: "1rem",
              border: "1px solid #1B3042",
              borderRadius: "10px",
            }}
          >
            <Col
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                // border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Perubahan utama untuk sebaran vertikal
                alignItems: "stretch",
                padding: "2rem 0",
              }}
            >
              <div>
                <Title
                  level={5}
                  style={{
                    marginTop: "0.25rem",
                    marginBottom: 0,
                    color: "gray",
                  }}
                >
                  Nama Peserta :
                </Title>
                <Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Gwkerenbgt15
                </Text>
              </div>

              <div>
                <Title
                  level={5}
                  style={{
                    marginTop: "0.25rem",
                    marginBottom: 0,
                    color: "gray",
                  }}
                >
                  Kode Peserta :
                </Title>
                <Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  0123412
                </Text>
              </div>

              <div>
                <Title
                  level={5}
                  style={{ marginTop: "0.25rem", color: "gray" }}
                >
                  Waktu Ujian
                </Title>
                <Text style={{ fontWeight: "bold" }}>
                  03/02/2025, 07.00 - 09.00 WIB
                </Text>
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
              padding: "0",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
              }}
            >
              <Col span={25} style={{ rowGap: "2rem" }}>
                {QuizBankList.map((item, key) => (
                  <QuizBankCard
                    isPackage={false}
                    key={key}
                    title={item.title}
                    route={item.route}
                  />
                ))}
              </Col>
            </div>
          </Col>
        </Row>
      </Flex>
    </>
  );
};

export default HomePage;
