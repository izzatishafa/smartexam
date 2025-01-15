"use client";

import React from "react";
import { Row, Col, Table, Input } from "antd";
import { DetailButton, AddButton, CloneButton, EditButton } from "@/components/ui/Buttons";
import { createStyles } from "antd-style";
const { Search } = Input;

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const columns = [
  {
    title: "Jenis Soal",
    dataIndex: "jenisSoal",
    key: "jenisSoal",
    width: 150,
    fixed: "left",
  },
  {
    title: "Nomor",
    dataIndex: "nomor",
    key: "nomor",
    width: 150,
  },
  {
    title: "Sulit",
    dataIndex: "sulit",
    key: "sulit",
    width: 200,
  },
  {
    title: "Question",
    dataIndex: "question",
    key: "question",
    width: 150,
  },
  {
    title: "Parent Nomor",
    dataIndex: "parentNomor",
    key: "parentNomor",
    width: 150,
  },
  {
    title: "Multiplechoice Img Code",
    dataIndex: "multiplechoiceImgCode",
    key: "multiplechoiceImgCode",
    width: 150,
  },
  {
    title: "Jawaban",
    dataIndex: "jawaban",
    key: "jawaban",
    width: 150,
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 150,
    render: (_, record) => (
      <Row gutter={[8, 8]}>
        <Col>
          <DetailButton />
        </Col>
        <Col>
          <CloneButton />
        </Col>
        <Col>
          <EditButton />
        </Col>
      </Row>
    ),
  },
];

const dataSource = [
  {
    key: "1",
    jenisSoal: "tkd",
    nomor: 1,
    sulit: "0.00",
    question: "apakah kamu setuju dengan pertanyaan...",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "Setuju",
  },
  {
    key: "2",
    jenisSoal: "tkd1",
    nomor: 1,
    sulit: "0.00",
    question: "misteri",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "D",
  },
  {
    key: "3",
    jenisSoal: "tkd2",
    nomor: 1,
    sulit: "0.00",
    question: "tanpa story",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "C",
  },
  {
    key: "4",
    jenisSoal: "accounting_staf_level_senior",
    nomor: 1,
    sulit: "0.00",
    question: "Pada tanggal 30 Januari, PT Husada...",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "D",
  },
  {
    key: "5",
    jenisSoal: "english_story_taxand",
    nomor: 1,
    sulit: "0.00",
    question: "The word 'conflicting' in line...",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "C",
  },
  {
    key: "6",
    jenisSoal: "accounting_staf_level_junior",
    nomor: 1,
    sulit: "0.00",
    question: "Pada tanggal 28 Maret, PT Sejahtera...",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "A",
  },
  {
    key: "7",
    jenisSoal: "wpt_taxand",
    nomor: 1,
    sulit: "0.00",
    question: "Persamaan kata dari KRITIS :",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "D",
  },
  {
    key: "8",
    jenisSoal: "WPT_TATA",
    nomor: 1,
    sulit: "0.00",
    question: "Persamaan kata dari KRITIS :",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "D",
  },
  {
    key: "9",
    jenisSoal: "tkd1",
    nomor: 1,
    sulit: "0.00",
    question: "misteri",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "D",
  },
  {
    key: "10",
    jenisSoal: "english_taxand",
    nomor: 1,
    sulit: "0.00",
    question: "Choose the grammatically correct...",
    parentNomor: "",
    multiplechoiceImgCode: "",
    jawaban: "D",
  },
];


const MultiplechoicePage = () => {
  const { styles } = useStyle();

  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }} justify="space-between">
        <Col>
          <Search placeholder="Cari..." allowClear enterButton="Search" size="large" onSearch={onSearch} />
        </Col>
        <Col style={{ textAlign: "right" }}>
          <AddButton text="Tambah Multiplechoice" />
        </Col>
      </Row>

      <Table
        className={styles.customTable}
        columns={columns}
        dataSource={dataSource}
        scroll={{
          x: "max-content",
          y: 55 * 5,
        }}
      />
    </>
  );
};

export default MultiplechoicePage;
