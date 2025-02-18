"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Divider } from "antd";
import MultipleChoice from "../../../app/(exam)/exam/multiplechoice/accounting_junior/components/MultipleChoice";

const { Title, Text } = Typography;

export default function AccountingSeniorCard() {
  const handleCopy = (e) => {
    e.preventDefault();
  };

  const choices = [
    { label: "A", value: "Pegunungan" },
    { label: "B", value: "Hutan" },
    { label: "C", value: "Pohon" },
    { label: "D", value: "Hijau" },
    { label: "E", value: "Tinggi" },
  ];

  return (
    <Card
      style={{
        width: "100%",
        userSelect: "none",
      }}
      onCopy={handleCopy}
    >
      <Title level={4} style={{ fontWeight: "normal", paddingLeft: "10px" }}>
        5. Pilihlah pasangan kata yang mempunyai kesesuaian dengan pola soal.
      </Title>
      <Divider />

      <Space style={{ paddingLeft: "30px" }} direction="vertical">
        <Text style={{ fontSize: "17px" }}>PT A melakukan perjanjian dengan PT B untuk menjual Mesin atas nama PT B. Skema pembayaran dan penerimaan kas dalam perjanjian tersebut adalah sebagai berikut:</Text>
        <ul className="list-disc" style={{ fontSize: "17px" }}>
          <li>Pelanggan akhir membayar Rp 1 juta ke PT A untuk tiap unit Mesin</li>
          <li>Pelanggan akhir membayar Rp 1 juta ke PT A untuk tiap unit Mesin PT A menyerahkan Rp 900 ribu ke PT B untuk tiap unit mesin yang dijual (menahan Rp 100 ribu sebagai komisi penjualan)</li>
          <li>PT A memberi insentif sebesar Rp 5 ribu ke pelanggan akhir sebagai insentif untuk membeli mesin</li>
        </ul>
        <Text style={{ fontSize: "17px" }}>Manakah jawaban yang sesuai?</Text>
        <MultipleChoice />
      </Space>
    </Card>
  );
}
