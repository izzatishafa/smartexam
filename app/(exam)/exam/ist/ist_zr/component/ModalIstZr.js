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
            Petunjuk Pengerjaan IST ZR (Zahlenreihen) 🧠 :
          </Title>
        }
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Text>Tentukan angka berikutnya dalam pola.</Text>
            </li>
            <li>
              <Text>Contoh: 3, 6, 9, 12, ...?</Text>
            </li>

            <div style={{ marginTop: "0.75rem" }}>
              <b>Total:</b> 50 soal{" "}
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              ✨ <b>Tips</b> Perhatikan pola angka yang ada, lalu pilih angka
              yang sesuai dengan urutan matematisnya.{" "}
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
