"use client";

import { Modal, Typography } from "antd";
const { Text, Title } = Typography;
import React from "react";

const ModalGti3 = ({ open, onCancel }) => {
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
            Uji Ingatan Hurufmu!
          </Title>
        }
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <div>
          <p>
            Selamat datang di Subtest 3, bagian penting dari latihan kognitif yang akan mengasah daya ingatmu terhadap urutan huruf.
            <br />
            Tantanganmu adalah mengingat urutan dan memilih huruf yang tepat sesuai aturan berikut:
          </p>
          <ul style={{ listStyleType: "decimal" , marginLeft:"-24px"}}>
            <li>
              <Text>Perhatikan: Setiap kotak berisi tiga huruf acak.</Text>
            </li>
            <li>
              <Text>Ingat urutannya: Susun huruf-huruf tersebut sesuai dengan urutan alfabet.</Text>
            </li>
            <li>
              <Text>Tentukan pilihan: Pilih huruf dengan selisih terjauh dari huruf di tengah.</Text>
            </li>
          </ul>
          <Text>
            ✨<b>Tips:</b> Pastikan untuk fokus pada huruf di tengah dan pilih huruf yang paling tepat untuk menyelesaikan urutan!<br/>
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: "18px" }}>Semoga sukses! 💡</Text>
        </div>
      </Modal>
    </>
  );
};

export default ModalGti3;
