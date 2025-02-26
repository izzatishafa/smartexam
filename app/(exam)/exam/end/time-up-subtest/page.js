"use client";
import React, { useEffect, useState } from "react";
import { Button, Flex, Typography, Spin } from "antd";
const { Title, Text } = Typography;
import { useRouter } from "next/navigation";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const TimeUpSubtest = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { currentSubtest, currentExamType, isUsingAPI, getNextGTITutorialRoute, getSubtestMap, initializeExamAPI, initializeExam, resetFullState } = useExamStore();

  useEffect(() => {
    // Cek apakah data penting tersedia
    if (!currentSubtest || !currentExamType) {
      // Jika data hilang, coba ambil dari localStorage sebagai backup
      const storedState = localStorage.getItem("exam-storage");
      if (storedState) {
        try {
          const parsedState = JSON.parse(storedState);
          console.log("Recovering state from localStorage:", parsedState);

          // Atur state global atau gunakan data lokal
          // (Ini tidak diperlukan jika menggunakan zustand/persist)
        } catch (error) {
          console.error("Error parsing stored state:", error);
        }
      }
    }

    // Setelah memastikan state sudah dipulihkan
    setIsLoading(false);
  }, [currentSubtest, currentExamType]);

  console.log("currentSubtest:", currentSubtest);
  console.log("currentExamType:", currentExamType);

  const handleClickSubtest = () => {
    if (currentExamType === "gti") {
      const nextRoute = getNextGTITutorialRoute(currentSubtest);
      const nextSubtestGti = getSubtestMap(currentSubtest);

      if (nextRoute === "/") {
        // Jika ini adalah subtest terakhir (orientasi)
        resetFullState();
        router.push("/");
      } else {
        // Tentukan metode inisialisasi berdasarkan status API
        if (isUsingAPI) {
          initializeExamAPI(currentExamType, nextSubtestGti.split("/")[3]);
        } else {
          initializeExam(currentExamType, nextSubtestGti.split("/")[3]);
        }
        router.push(nextRoute);
      }
    } else {
      // Handling untuk jenis ujian lain tetap sama
      resetFullState();
      router.push("/");
    }
  };

  if (isLoading) {
    return (
      <Flex
        style={{
          width: "100%",
          height: "90vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" tip="Memuat data..." />
      </Flex>
    );
  }

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
        disabled={!currentSubtest || !currentExamType}
      >
        Lanjutkan
      </Button>
      {(!currentSubtest || !currentExamType) && (
        <Text type="danger" style={{ marginTop: "10px" }}>
          Terjadi kesalahan saat memuat data. Silahkan kembali ke halaman utama.
        </Text>
      )}
    </Flex>
  );
};

export default TimeUpSubtest;
