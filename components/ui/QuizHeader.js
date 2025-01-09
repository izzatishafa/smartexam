import React from "react";
import { Typography, Divider, Space, Button, Flex } from "antd";

const QuizHeader = ({ title, onGuideClick, children }) => {
  return (
    <div>
      <Typography
        style={{
          width: "100%",
          backgroundColor: "#1B3042",
          paddingBottom: "15px",
          paddingTop: "15px",
          margin: 0,
        }}
      >
        <Typography.Title level={4} style={{ color: "white", textAlign: "center", margin: 0 }}>
          {title}
        </Typography.Title>
      </Typography>
      <div style={{ margin: "20px" }}>
        <Flex justify="flex-end">
          {children} {/* Untuk countdown atau elemen lain yang bisa diisi */}
        </Flex>
        <Divider
          style={{
            color: "lightgray",
            marginTop: "0px",
            marginBottom: "15px",
          }}
        />
        <Space style={{ width: "100%", justifyContent: "end", marginBottom: "15px" }} />
        <Flex justify="flex-end">
          <Button type="primary" onClick={onGuideClick}>
            Panduan
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default QuizHeader;
