"use client"

import { Modal, Typography } from 'antd';
import React from 'react'

const { Text, Title } = Typography;

const ModalHexaco = ({open, onCancel}) => {
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
          Petunjuk Pengerjaan Hexaco 🧠 :
        </Title>
      }
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <div>
        <ol>
          <li>
            <Text>Setiap soal terdiri dari 1 pernyataan dengan 5 pilihan jawaban yaitu Seperti contoh di bawah ini.</Text>
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
          </li>
          <li>
            <Text>Pilih jawaban yang paling sesuai dan menggambarkan Anda</Text>
          </li>
          <li>
            <Text>Jawablah secara jujur dan spontan dengan klik salah satu jawaban yang tepat</Text>
          </li>
          <li>
            <Text>Perhatikan waktu pengerjaan karena waktunya terbatas</Text>
          </li>

          <li>
            <Text>Selamat mengerjakan dan semoga sukses!</Text>
          </li>
        </ol>
      </div>
    </Modal>
  );
}

export default ModalHexaco
