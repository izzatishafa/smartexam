"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Table, Flex } from "antd";
import MultipleChoice from "../../../../../../components/ui/MultipleChoice";

const { Title, Text } = Typography;

export default function StoryTestCard() {
  const handleCopy = (e) => {
    e.preventDefault();
  };

  const dataSource = [
    {
      key: "1",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget neque ac felis cursus congue volutpat a lorem. Cras hendrerit posuere mauris. Vivamus vel diam maximus, pharetra nibh eget, convallis ligula. Vestibulum nec felis consectetur, sagittis purus sit amet, dapibus felis. Vestibulum vehicula vestibulum lectus in tincidunt. Nunc finibus sodales pulvinar. Curabitur bibendum urna urna, quis tincidunt lorem accumsan quis.",
      content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget neque ac felis cursus congue volutpat a lorem. Cras hendrerit posuere mauris. Vivamus vel diam maximus, pharetra nibh eget, ",
    },
  ];

  const choices = [
    { value: "Ini adalah contoh pilihan ganda dari quiz A" },
    { value: "Ini adalah contoh pilihan ganda dari quiz B" },
    { value: "Ini adalah contoh pilihan ganda dari quiz C" },
    { value: "Ini adalah contoh pilihan ganda dari quiz D" },
  ];

  return (
    <Flex
      style={{
        width: "100%",
        flexDirection: "column",
        userSelect: "none",
        // marginBottom: "70px",
        padding: "10px 0px 10px 10px",
      }}
      onCopy={handleCopy}
    >
      <Text style={{ fontWeight: "normal", padding: "0px 0px 15px 5px" }}>Perhatikan data pada tabel berikut untuk menjawab soal nomor 5-10 !</Text>
      <div
        style={{
          padding: "10px 20px",
          width: "100%",
          maxHeight: 320,
          background: "white",
          borderRadius: "1rem",
          border: "1px solid #E0E0E0",
          overflowY: "auto",
          marginBottom: "20px",
        }}
      >
        <Text style={{ fontWeight: "normal" }}>
          Kamu bekerja di sebuah perusahaan yang bergerak di bidang teknologi. Suatu hari, manajermu memberikan tugas penting yang membutuhkan perhatian penuh dan keterampilan tinggi. Tugas tersebut memiliki tenggat waktu yang sangat ketat,
          dan kamu harus menyelesaikannya dalam tiga hari. Jika tugas ini berhasil diselesaikan dengan baik, perusahaan akan mendapatkan kontrak besar, yang tentunya bisa memberi dampak positif bagi tim dan kariermu. Namun, di hari pertama
          mengerjakan tugas ini, kamu merasa tantangan yang diberikan ternyata jauh lebih besar dari yang dibayangkan. Tugas ini membutuhkan banyak penelitian dan analisis mendalam, sehingga kamu merasa tertekan dan khawatir tidak bisa
          menyelesaikannya tepat waktu. Selain itu, teman-teman di timmu sedang sibuk dengan proyek masing-masing, sehingga kamu harus menyelesaikannya sebagian besar secara mandiri.
        </Text>
      </div>
      <Typography>
        <Text style={{ fontSize: "17px" }}>Dari soal tersebut manakah yang blablabla ? </Text>
      </Typography>
      <Space>
        <ol
          style={{
            color: "#000",
            listStyleType: "none",
            paddingLeft: "0px",
            fontSize: "15px",
          }}
        >
          <MultipleChoice choices={choices} layout="vertical"></MultipleChoice>
        </ol>
      </Space>
    </Flex>
  );
}
