"use client";

import { Modal, Typography } from "antd";
import React from "react";

const { Text, Title } = Typography;

const ModalSocDes = ({ open, onCancel }) => {
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
          Petunjuk Pengerjaan Social Description (SocDes) 🧠 :
        </Title>
      }
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <div>
        <ol>
          <ol>
            <li>
              <Text>Bacalah setiap pertanyaan dengan saksama.</Text>
            </li>
            <li>
              <Text>
                Pilih jawaban yang paling sesuai dengan kepribadian dan
                kebiasaan kerja Anda.
              </Text>
            </li>
            <li>
              <Text>
                Tidak ada jawaban benar atau salah, pilihlah dengan jujur.
              </Text>
            </li>
            <li>
              <Text>
                Jawaban Anda akan membantu memahami gaya kerja dan kepribadian
                Anda di lingkungan kerja.
              </Text>
            </li>
          </ol>
          <div style={{ marginTop: "0.75rem" }}>
            ✨ <b>Tips</b> Pastikan untuk fokus pada huruf di tengah dan pilih
            huruf yang paling tepat untuk menyelesaikan urutan!.{" "}
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

export default ModalSocDes;
