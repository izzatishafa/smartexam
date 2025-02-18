"use client";

import { Modal, Typography } from "antd";
const { Text, Title } = Typography;
import React from "react";

const ModalGti5 = ({ open, onCancel }) => {
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
            Petunjuk:
          </Title>
        }
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <div>
          <ul style={{ listStyleType: "decimal", marginLeft: "-24px" }}>
            <li>Pilihlah angka tertinggi dan terendah dari setiap kelompok bilangan yang terdiri dari 3 angka.</li>
            <li>Hilangkan angka tertinggi dan terendah tersebut.</li>
            <li>Dari angka yang tersisa di tengah, tentukan angka yang memiliki selisih terbesar dengan angka tertinggi atau terendah (bukan dari angka tertinggi atau terendah).</li>
          </ul>
          <p style={{ fontWeight: "bold" }}>Contoh:</p>
          <ul>
            <li>
              <Text>Jika angkanya adalah 8, 7, dan 13:</Text>
            </li>
            <li>
              <Text>Angka 7 adalah yang terendah.</Text>
            </li>
            <li>
              <Text>Angka 13 adalah yang tertinggi.</Text>
            </li>
            <li>
              <Text>Maka angka yang tersisa adalah 8.</Text>
            </li>
            <li>
              <Text>Tentukan letak angka yang memiliki selisih terbesar.</Text>
            </li>
          </ul>
          <Text>
            ✨<b>Tips:</b> Pastikan untuk fokus pada huruf di tengah dan pilih huruf yang paling tepat untuk menyelesaikan urutan!
            <br />
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: "18px" }}>Semoga sukses! 💡</Text>
        </div>
      </Modal>
    </>
  );
};

export default ModalGti5;
