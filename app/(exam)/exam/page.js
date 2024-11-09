"use client";
import React from "react";
import { Typography, Card, Button, Space, Divider } from "antd";
import Countdown from "@/components/ui/Countdown";
import { Layout } from "antd";
const { Content } = Layout;
const { Title, Text } = Typography;

const Exam = () => {
  return (
    <>
      <Typography
        style={{
          width: "100%",
          backgroundColor: "#1B3042",
          paddingBottom: "15px",
          paddingTop: "15px",
          margin: 0,
        }}
      >
        <Title
          level={4}
          style={{ color: "white", textAlign: "center", margin: 0 }}
        >
          Online Test - Bahasa Inggris University
        </Title>
      </Typography>
      <Content style={{ margin: "20px" }}>
        <Space
          direction="horizontal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 0,
          }}
        >
          <Title
            level={4}
            style={{
              paddingLeft: "5px",
              paddingBottom: "5px",
              fontWeight: "normal",
            }}
          >
            Grammar - Question 1
          </Title>
          <Countdown />
        </Space>
        <Divider
          style={{ color: "lightgray", marginTop: "0px", marginBottom: "15px" }}
        />
        <Space
          style={{ width: "100%", justifyContent: "end", marginBottom: "15px" }}
        >
          <Button primary>Panduan</Button>
        </Space>
        <Card
          style={{
            width: "100%",
          }}
        >
          <Title
            level={4}
            style={{ fontWeight: "normal", paddingLeft: "10px" }}
          >
            5. Choose the grammatically correct word or phrase to complete the
            following sentences.
          </Title>
          <Space style={{ paddingLeft: "30px" }} direction="vertical">
            <Text style={{ fontSize: "17px", fontWeight: "bold" }}>
              Abrahan Lincoln insisted that ____ not just on mere opinion but on
              moral purpose.
            </Text>
            <ol
              style={{
                color: "#000",
                listStyleType: "none",
                paddingLeft: "20px",
                fontSize: "15px",
              }}
            >
              {["A", "B", "C", "D"].map((choice, index) => (
                <li
                  key={index}
                  style={{
                    color: "#1B3042",
                    backgroundColor: "#E9F0FC",
                    padding: "8px 15px",
                    borderRadius: "15px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "white",
                      color: "#0A01FF",
                      padding: "5px 10px",
                      borderRadius: "100%",
                      marginRight: "15px",
                    }}
                  >
                    {choice}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: ["ABeeZee", "sans-serif"],
                      fontWeight: "semibold",
                    }}
                  >
                    Ini adalah contoh pilihan ganda dari quiz
                  </p>
                </li>
              ))}
            </ol>
          </Space>
        </Card>
      </Content>
    </>
  );
};

export default Exam;
