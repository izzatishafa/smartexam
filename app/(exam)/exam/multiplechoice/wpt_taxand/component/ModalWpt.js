"use client"

import { Modal, Typography } from 'antd';
import React from 'react'
const { Text, Title } = Typography;

const ModalWpt = ({open, onCancel}) => {
  return (
    <>
      <Modal
        width={800}
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
            Petunjuk Pengerjaan WPT 🧠 :
          </Title>
        }
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <div>
          <ol style={{ listStyleType: "ordinal" }}>
            <li>
              <Text>Pilih jawaban yang paling tepat untuk setiap soal — ikuti naluri dan logika Anda!</Text>
            </li>
            <li>
              <Text>Bacalah setiap soal dengan cermat, perhatikan pola, dan jangan lupa untuk tetap fokus.</Text>
            </li>
            <li>
              <Text>Kelola waktu dengan bijak. Ingat, fokus dan tenang adalah kunci!</Text>
            </li>
            <div style={{ marginTop: "0.75rem" }}>
              <b>Total:</b> 50 soal{" "}
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              ✨ <b>Siap?</b> Ayo taklukkan tantangan ini dan tunjukkan yang terbaik! 🚀{" "}
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
    </>
  );
};

export default ModalWpt
