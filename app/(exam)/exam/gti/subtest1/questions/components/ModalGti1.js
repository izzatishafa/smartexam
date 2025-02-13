"use client"

import { Modal, Typography } from 'antd'
const { Text, Title } = Typography;
import React from 'react'

const ModalGti1 = ({ open, onCancel }) => {
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
          <Text>
            Pada setiap soal terdapat empat pasangan huruf yang terletak di dalam kotak dengan huruf-huruf tersebut berada di baris atas dan baris bawah.
            <br />
            Tugas Anda adalah menghitung berapa banyak pasangan huruf yang memiliki kesamaan yaitu ketika huruf di baris atas sama dengan huruf di baris bawah, baik dalam bentuk dasar (huruf kapital) maupun kecil.
            <br />
            <br />
          </Text>
          <Text style={{ fontWeight: "bold" }}>Contoh:</Text>
          <ul>
            <li>
              <Text>Pasangan pertama: F dan f (huruf yang sama)</Text>
            </li>
            <li>
              <Text>Pasangan kedua: G dan c (huruf yang berbeda)</Text>
            </li>
            <li>
              <Text>Pasangan ketiga: R dan r (huruf yang sama)</Text>
            </li>
            <li>
              <Text>Pasangan keempat: S dan s (huruf yang sama)</Text>
            </li>
          </ul>
          <Text>
            Pada contoh ini, terdapat 3 pasangan huruf yang sama. Oleh karena itu, jawaban yang benar adalah 3.
            <br />
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: "18px" }}>Semoga sukses! 💡</Text>
        </div>
      </Modal>
    </>
  );
};

export default ModalGti1