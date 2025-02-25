"use client";
import React from "react";
import { Button, Flex, Typography } from "antd";
const { Title, Text } = Typography;
import { HomeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const AllDone = () => {
  const router = useRouter();
  const { resetFullState } = useExamStore();

  const handleClick = () => {
    resetFullState(); // Reset state sebelum kembali
    router.push("/");
  };

  return (
    <Flex
      style={{
        width: "100%",
        flexDirection: "column",
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "white",
      }}
    >
      <Title level={1}>Terima Kasih</Title>
      <Text style={{ textAlign: "center", fontSize: "20px" }}>
        Anda sudah mengerjakan test online <span style={{ fontWeight: "bold" }}>SMARTEXAM</span> oleh <span style={{ fontWeight: "bold", color: "#E3C72A" }}>PB TAXAND </span>
        !
        <br />
        Semoga sukses untuk Anda ! ✨
      </Text>
      <br />
      <Button
        style={{
          backgroundColor: "#1b3042",
          color: "white",
          marginTop: "20px",
          width:"300px"
        }}
        icon={<HomeOutlined />}
        onClick={handleClick}
      >
        Ke Beranda
      </Button>
    </Flex>
  );
};

export default AllDone;
