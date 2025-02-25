"use client";
import React from "react";
import { Button, Flex, Typography } from "antd";
const { Title, Text } = Typography;
import { useRouter } from "next/navigation";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const TimeUp = () => {
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
      <Title level={2} style={{ marginTop: 0 }}>
        Waktu Mengerjakan Tes Sudah Habis
      </Title>
      <Text style={{ marginTop: "1rem", fontSize: "1.1rem" }}>Jawaban yang telah Anda isi akan otomatis tersimpan.</Text>
      <Text
        style={{
          marginTop: "1rem",
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        Terima kasih atas partisipasi Anda! Silakan tunggu hasilnya <br />
        atau hubungi tim kami jika ada pertanyaan. 😊
      </Text>
      <Button
        style={{
          backgroundColor: "#1b3042",
          color: "white",
          marginTop: "20px",
          width: "300px",
        }}
        onClick={handleClick}
      >
        Akhiri Test
      </Button>
    </Flex>
  );
};

export default TimeUp;
