"use client";

import { Descriptions, Drawer } from "antd";
import React from "react";

const items = [
  {
    key: "1",
    label: "Nomor",
    children: "1",
  },
  {
    key: "2",
    label: "Soal",
    children: "qwertyUIO",
  },
  {
    key: "3",
    label: "Jawaban",
    span: 2,
    children: "gti_pci",
  },
  {
    key: "4",
    label: "Quis Code",
    children: "Subtest 1",
  },
  {
    key: "5",
    label: "Is Tutorial",
    children: "Ada",
  },
  {
    key: "6",
    label: "Display",
    children: "123",
  },
];

const GtiDetail = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Detail Gti"
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

export default GtiDetail;
