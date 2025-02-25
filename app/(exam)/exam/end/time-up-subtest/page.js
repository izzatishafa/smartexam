"use client";
import React from "react";
import { Button, Flex, Typography } from "antd";
const { Title, Text } = Typography;
import { useRouter } from "next/navigation";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const TimeUpSubtest = () => {
  const router = useRouter();
  const { currentSubtest, currentExamType } = useExamStore();

  const handleClickSubtest = () => {
    router.push(`/exam/${currentExamType}/subtest${currentSubtest + 1}/tutorial-intro`);
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
      <Title level={2} style={{ marginTop: 0 }}>
        Waktu Mengerjakan Tes Sudah Habis
      </Title>
      <Text
        style={{
          marginTop: "1rem",
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        Waktu pengerjaan tes sudah habis. <br /> Jawaban yang telah Anda isi akan otomatis tersimpan.
      </Text>
      <Button
        style={{
          backgroundColor: "#1b3042",
          color: "white",
          marginTop: "20px",
          width: "300px",
        }}
        onClick={handleClickSubtest}
      >
        Lanjutkan
      </Button>
    </Flex>
  );
};

export default TimeUpSubtest;
