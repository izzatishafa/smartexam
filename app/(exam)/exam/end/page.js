"use client";
import React, { useState } from "react";
import { Button, Flex, Typography } from "antd";
const { Title, Text } = Typography;
import { HomeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import useExamStore from "../../stores/useExamStore";

const EndPage = () => {
  const router = useRouter();
  const { endStatus, currentSubtest, currentExamType, resetFullState, getNextSubtestCode, initializeExam } = useExamStore();

  const [status, setStatus] = useState("time-up-subtest");

  

  const handleClick = () => {
    resetFullState(); // Reset state sebelum kembali
    router.push("/");
  };


  const handleClickSubtest = () => {
    router.push(`/exam/${currentExamType}/subtest${currentSubtest + 1}/tutorial-intro`);
  };


  return (
    <Flex style={{ height: "80vh" }} justify="center" align="middle">
      <div
        style={{
          height: "100%",
          padding: "20px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* all-done */}
        {endStatus === "all-done" && (
          <Flex
            style={{
              width: "100%",
              flexDirection: "column",
              height: "fit-content",
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
            <Button style={{ width: "fit-content", marginTop: "1rem" }} type="primary" color="orange" icon={<HomeOutlined />} onClick={handleClick}>
              Ke Beranda
            </Button>
          </Flex>
        )}
        {/* all-done */}

        {/* time-up */}
        {endStatus === "time-up" && (
          <Flex
            style={{
              width: "100%",
              flexDirection: "column",
              height: "fit-content",
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
                marginTop: "2rem",
                width: "fit-content",
                padding: "1rem 8rem",
              }}
              type="primary"
              onClick={handleClick}
            >
              Akhiri Test
            </Button>
          </Flex>
        )}
        {/* time-up */}

        {/* time-up-subtest */}
        {endStatus === "time-up-subtest" && (
          <Flex
            style={{
              width: "100%",
              flexDirection: "column",
              height: "fit-content",
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
                marginTop: "2rem",
                width: "fit-content",
                padding: "1rem 8rem",
                fontSize: "1.1rem",
                backgroundColor: "#1B3042",
              }}
              type="primary"
              color="qhite"
              onClick={handleClickSubtest}
            >
              Lanjutkan
            </Button>
          </Flex>
        )}
        {/* time-up-subtest */}
      </div>
    </Flex>
  );
};

export default EndPage;
