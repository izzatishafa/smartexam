"use client";

import { Button, Col, Descriptions, Drawer, Form, Space, Switch } from "antd";
import React from "react";

const items = [
  {
    key: "1",
    label: "Jenis soal",
    span: 3,
    children: "tkd",
  },
  {
    key: "2",
    label: "Sulit",
    span: 3,
    children: "0.00",
  },
  {
    key: "3",
    label: "Nomor",
    span: 3,
    children: "1",
  },
  {
    key: "4",
    label: "Question",
    span: 3,
    children: "apakah kamu setuju dengan pertanyaan di atas?",
  },
  {
    key: "5",
    label: "Parent nomor",
    span: 3,
    children: "",
  },
  {
    key: "6",
    label: "Multiplechoice img code",
    span: 3,
    children: "",
  },
  {
    key: "7",
    label: "Jawaban",
    span: 3,
    children: "Setuju",
  },
  {
    key: "8",
    label: "Post question",
    span: 3,
    children: "",
  },
  {
    key: "9",
    label: "Multiplechoice story code",
    span: 3,
    children: "tkd_1",
  },
  {
    key: "10",
    label: "Group name",
    span: 3,
    children: "TKD1",
  },
  {
    key: "11",
    label: "Ref kesulitan id",
    span: 3,
    children: "",
  },
  {
    key: "12",
    label: "Multiplechoice question category", 
    span: 3,
    children: "",
  },
];

const MchoiceDetail = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Detail Quiz"
        onClose={onClose}
        open={open}
        width={720}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <Descriptions layout="vertical" bordered items={items} />
      </Drawer>
    </>
  );
};

export default MchoiceDetail;
