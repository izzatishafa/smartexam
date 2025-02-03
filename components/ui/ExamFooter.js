"use client";
import React from "react";
import { Layout, Button, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Footer } = Layout;

const ExamFooter = () => {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: "10px 20px",
    borderTop: "1px solid #e8e8e8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  };

  const bulletPointStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const legendItems = [
    { text: "Answered", color: "#1B3042" },
    { text: "Not answered", color: "#D9D9D9" },
    // { text: "Confused", color: "#E3C72A" },
  ];

  return (
    <Footer style={footerStyle}>
      <Space size={20}>
        {legendItems.map((item, index) => (
          <div key={index} style={bulletPointStyle}>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: item.color,
              }}
            />
            <span style={{ color: "#000" }}>{item.text}</span>
          </div>
        ))}
      </Space>

      <Space>
        <Button type="primary" icon={<LeftOutlined />} style={{ marginRight: "8px", backgroundColor: "#1677ff" }}>
          Previous
        </Button>
        {/* <Button
          className="mark-confused"
          style={{
            marginRight: "8px",
            backgroundColor: "#E3C72A",
            color: "#000",
            border: "none",
          }}
        >
          Mark confused
        </Button> */}
        <Button type="primary" icon={<RightOutlined />} style={{ backgroundColor: "#1677ff" }}>
          Next
        </Button>
      </Space>
    </Footer>
  );
};

export default ExamFooter;
