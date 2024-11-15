"use client";
import React from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;

const endPage = () => {
  return (
      <Typography style={{ textAlign: "center", paddingTop: "100px" }}>
        <Title level={1}>
          Terima Kasih
        </Title>
        <Text style={{ textAlign: "center", fontSize: "20px" }}>
          Anda sudah mengerjakan test online{" "}
          <span style={{ fontWeight: "bold" }}>SMARTEXAM</span> oleh{" "}
          <span style={{ fontWeight: "bold", color: "#E3C72A" }}>
            PB TAXAND{" "}
          </span>
          !
          <br />
          Semoga sukses untuk Anda ! ✨
        </Text>
      </Typography>
  );
};

export default endPage;
