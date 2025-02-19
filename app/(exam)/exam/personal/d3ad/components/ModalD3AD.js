"use client";

import { Modal, Typography } from "antd";
const { Text, Title } = Typography;
import React from "react";

const ModalD3AD = ({ open, onCancel }) => {
  return (
    <>
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
            Petunjuk Pengerjaan :
          </Title>
        }
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <div>
          <ol style={{ listStyleType: "ordinal" }}>
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
          <div style={{ marginTop: "0.75rem", marginLeft: 0 }}>
            ✨{" "}
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>Tips:</span>{" "}
            Pastikan untuk fokus pada huruf di tengah dan pilih huruf yang
            paling tepat untuk menyelesaikan urutan! 🚀{" "}
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
        </div>
      </Modal>
    </>
  );
};

export default ModalD3AD;
