"use client";
import React from "react";
import { Button, Typography } from "antd";
const { Title, Text } = Typography;
import { HomeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const EndPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <Typography style={{ textAlign: "center", paddingTop: "80px" }}>
      <Title level={1}>Terima Kasih</Title>
      <Text style={{ textAlign: "center", fontSize: "20px" }}>
        Anda sudah mengerjakan test online{" "}
        <span style={{ fontWeight: "bold" }}>SMARTEXAM</span> oleh{" "}
        <span style={{ fontWeight: "bold", color: "#E3C72A" }}>PB TAXAND </span>
        !
        <br />
        Semoga sukses untuk Anda ! ✨
      </Text>
      <br />
      <Button
        style={{ width: "fit-content", marginTop: "1rem" }}
        type="primary"
        color="orange"
        icon={<HomeOutlined />}
        onClick={handleClick}
      >
        Ke Beranda
      </Button>
    </Typography>
  );
};

export default EndPage;
