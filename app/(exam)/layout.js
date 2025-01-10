"use client";
import React, { useState, useEffect } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/components/ui/Header.js";
import Sider from "@/components/ui/Sider.js";
import "../globals.css";

import { Layout, Spin } from "antd";
const { Content, Footer } = Layout;

const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#D9D9D9",
  position: "sticky",
  bottom: 0,
  zIndex: 1000,
};

const data = [
  { text: "Answered", bulletColor: "#1B3042", bulletSize: "10px" },
  { text: "Not Answered", bulletColor: "#c0c0c0", bulletSize: "10px" },
  { text: "Confused", bulletColor: "#E3C72A", bulletSize: "10px" },
];

export default function ExamLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  // simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Spin size="large" />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <html lang="en">
      <body>
        <Header />
        <Layout>
          <Layout>
            <Content style={{ backgroundColor: "white" }}>
              <AntdRegistry>{children}</AntdRegistry>
            </Content>
            <Footer style={footerStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  gap: "20px",
                }}
              >
                {data.map((item, index) => (
                  <div key={index} style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: item.bulletSize,
                        height: item.bulletSize,
                        backgroundColor: item.bulletColor,
                        borderRadius: "50%",
                        marginRight: "8px",
                      }}
                    ></span>
                    <span style={{ color: "#000" }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <button
                  style={{
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "#E3C72A",
                    padding: "15px",
                    borderRadius: "25px",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Mark Confused
                </button>
                <button
                  style={{
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "#2D7CC1",
                    padding: "15px",
                    borderRadius: "25px 0px 0px 25px",
                    color: "white",
                    fontWeight: "bold",
                    width: "80px",
                    cursor: "pointer",
                  }}
                >
                  Previous
                </button>
                <button
                  style={{
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "#2D7CC1",
                    padding: "15px",
                    borderRadius: "0px 25px 25px 0px",
                    color: "white",
                    fontWeight: "bold",
                    width: "80px",
                    cursor: "pointer",
                  }}
                >
                  Next
                </button>
              </div>
            </Footer>
          </Layout>
          <Sider />
        </Layout>
      </body>
    </html>
  );
}
