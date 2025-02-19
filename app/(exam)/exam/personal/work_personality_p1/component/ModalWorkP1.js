"use client";

import { Modal, Typography } from "antd";
import React from "react";

const { Text, Title } = Typography;

const ModalWorkP1 = ({ open, onCancel }) => {
  return (
    <Modal
      width={700}
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
          Petunjuk Pengerjaan Work Personality (P1) 🧠 :
        </Title>
      }
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <div>
        <ol>
          <Text>
            Setiap soal terdiri dari 1 pernyataan dengan 5 pilihan jawaban yaitu
            Seperti contoh di bawah ini.
          </Text>
          <ul>
            <li>
              <Text>Sangat Setuju.</Text>
            </li>
            <li>
              <Text>Setuju</Text>
            </li>
            <li>
              <Text>Netral</Text>
            </li>
            <li>
              <Text>Tidak Setuju</Text>
            </li>
            <li>
              <Text>Sangat Tidak Setuju.</Text>
            </li>
          </ul>
          <div style={{ marginTop: "0.75rem" }}>
            ✨ <b>Tips</b> Fokus pada hubungan antara kata pertama dan kedua,
            lalu pilih pasangan kata yang memiliki hubungan serupa.{" "}
          </div>
          <div
            style={{
              marginTop: "0.75rem",
              fontWeight: "bold",
              fontSize: "1.25rem",
            }}
          >
            Semoga sukses! 💡
          </div>
        </ol>
      </div>
    </Modal>
  );
};

export default ModalWorkP1;
