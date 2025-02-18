"use client";

import { Modal, Typography } from "antd";
const { Text, Title } = Typography;
import React from "react";

const ModalGti2 = ({ open, onCancel }) => {
  return (
    <>
      <Modal
        width={700}
        centered
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
            Petunjuk Pengerjaan:
          </Title>
        }
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <div>
          <ul style={{ listStyleType: "decimal" }}>
            <li>
              <Text>Baca soal dengan teliti.</Text>
            </li>
            <li>
              <Text>Pantau waktu di pojok atas.</Text>
            </li>
            <li>
              <Text>Jawab semua soal dengan teliti.</Text>
            </li>
            <li>
              <Text>Periksa ulang sebelum submit.</Text>
            </li>
            <li>
              <Text>Klik Submit setelah selesai.</Text>
            </li>
          </ul>
          <Text style={{ fontWeight: "bold", fontSize:"18px" }}>Semoga sukses! 💡</Text>
        </div>
      </Modal>
    </>
  );
};

export default ModalGti2;
