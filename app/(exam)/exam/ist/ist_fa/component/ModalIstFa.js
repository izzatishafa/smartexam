"use client";

import { Modal, Typography } from "antd";
import React from "react";
const { Text, Title } = Typography;

const ModalWpt = ({ open, onCancel }) => {
  return (
    <>
      <Modal
        width={600}
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
            Petunjuk Pengerjaan IST FA (Finden von Analogien) 🧠 :
          </Title>
        }
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Text>Tentukan hubungan kata yang serupa.</Text>
            </li>
            <li>
              <Text>Contoh: Buku : Membaca → Pensil : ...?</Text>
            </li>

            <div style={{ marginTop: "0.75rem" }}>
              <b>Total:</b> 50 soal{" "}
            </div>
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
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default ModalWpt;
