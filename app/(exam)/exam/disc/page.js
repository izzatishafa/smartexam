"use client";
import React, { useState } from "react";
import { Typography, Space, Modal, Card, Button } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import DiscRadioQuestion from "@/components/ui/DiscRadioQuestion";
import DiscCard from "@/components/ui/card/DiscCard";

const Disc = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const dataSource = [
    {
      key: "1",
      pref: "Mudah bergaul, menyenangkan.",
    },
    {
      key: "2",
      pref: "Mudah percaya kepada orang lain.",
    },
    {
      key: "3",
      pref: "Penuh toleransi, menghormati orang lain.",
    },
    {
      key: "4",
      pref: "Suka berpetualangan, pengambil risiko.",
    },
  ];

  const data = [
    {
      key: "1",
      pref: "Mudah bergaul, menyenangkan.",
      most: false,
      least: false,
    },
    {
      key: "2",
      pref: "Mudah percaya kepada orang lain.",
      most: false,
      least: false,
    },
    {
      key: "3",
      pref: "Penuh toleransi, menghormati orang lain.",
      most: false,
      least: false,
    },
    {
      key: "4",
      pref: "Suka berpetualangan, pengambil risiko.",
      most: false,
      least: false,
    },
  ];

  return (
    <>
      <QuizHeader
        title="Online Test - DISC (Dominance, Influence, Steadiness, Conscientiousness)"
        onGuideClick={showModal}
        hideGuideButton={showInstructions}
      >
        <Countdown />
      </QuizHeader>
      <Content style={{ margin: "20px" }}>
        {showInstructions ? (
          <Card>
            <Title
              level={5}
              style={{
                color: "#2F2F2F",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Petunjuk Pengerjaan
            </Title>
            <ol
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <li>
                <Text>
                  Saat mengerjakan, bayangkan Anda berada dalam situasi kerja
                </Text>
              </li>
              <li>
                <Text>
                  Dalam setiap persoalan terdapat 4 (empat) pernyataan
                </Text>
              </li>
              <li>
                <Text>
                  Tugas Anda adalah memilih pernyataan yang dianggap{" "}
                  <b>Paling Menggambarkan </b> diri Anda dengan memberi tanda
                  pada kolom &quot;<b>M</b>&quot; (MOST) dan memilih 1 (satu)
                  pernyataan yang dianggap<b> Paling Tidak Menggambarkan </b>{" "}
                  diri Anda dengan memberi tanda pada kolom &quot;<b>L</b>
                  &quot; (LEAST)
                </Text>
              </li>
              <li>
                <Text>
                  jadi untuk setiap pernyataan terdapat 1 (satu) buah pilihan
                  &quot;<b>M</b>&quot; (MOST) dan 1 (satu) buah pilihan &quot;
                  <b>L</b>&quot; (LEAST).
                </Text>
              </li>
              <Text>Contoh Soal :</Text>
              <DiscRadioQuestion
                defaultMost="1"
                defaultLeast="3"
                dataSource={dataSource}
              />
              <Button
                type="primary"
                style={{ marginTop: "1rem", width: "12rem" }}
                onClick={() => setShowInstructions(false)}
              >
                Mulai Pengerjaan
              </Button>
            </ol>
          </Card>
        ) : (
          <DiscCard data={data}></DiscCard>
        )}
        {/* </Modal> */}
      </Content>
      <Modal
        width={1000}
        style={{
          top: 20,
        }}
        title={
          <Title
            level={5}
            style={{
              color: "#2F2F2F",
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
              margin: 2,
            }}
          >
            Petunjuk Pengerjaan
          </Title>
        }
        open={isModalOpen}
        onCancel={handleClose}
        footer={null}
      >
        <Card>
          <ol
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <li>
              <Text>
                Saat mengerjakan, bayangkan Anda berada dalam situasi kerja
              </Text>
            </li>
            <li>
              <Text>Dalam setiap persoalan terdapat 4 (empat) pernyataan</Text>
            </li>
            <li>
              <Text>
                Tugas Anda adalah memilih pernyataan yang dianggap{" "}
                <b>Paling Menggambarkan </b> diri Anda dengan memberi tanda pada
                kolom &quot;<b>M</b>&quot; (MOST) dan memilih 1 (satu)
                pernyataan yang dianggap<b> Paling Tidak Menggambarkan </b> diri
                Anda dengan memberi tanda pada kolom &quot;<b>L</b>
                &quot; (LEAST)
              </Text>
            </li>
            <li>
              <Text>
                jadi untuk setiap pernyataan terdapat 1 (satu) buah pilihan
                &quot;<b>M</b>&quot; (MOST) dan 1 (satu) buah pilihan &quot;
                <b>L</b>&quot; (LEAST).
              </Text>
            </li>
            <Text>Contoh Soal :</Text>
            <DiscRadioQuestion
              defaultMost="1"
              defaultLeast="3"
              dataSource={dataSource}
            />
          </ol>
        </Card>
      </Modal>
    </>
  );
};

export default Disc;
