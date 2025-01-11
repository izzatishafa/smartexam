"use client";

import React from "react";
import { Row, Col, Table, Input } from "antd";
import { DetailButton, AddButton, CloneButton } from "@/components/ui/Buttons";
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
    title: "Quiz Code",
    dataIndex: "quizCode",
    key: "quizCode",
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
    title: "Soal",
    dataIndex: "soal",
    key: "soal",
    width: 200,
  },
  {
    title: "Jawaban",
    dataIndex: "jawaban",
    key: "jawaban",
    width: 150,
  },
  {
    title: "Is Tutorial",
    dataIndex: "isTutorial",
    key: "isTutorial",
    width: 150,
  },
  {
    title: "Action",
    key: "operation",
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
      </Row>
    ),
  },
];

const dataSource = [
  {
    key: "1",
    quizCode: "Subtest 1-gli_pci",
    nomor: 1,
    soal: "qpdtQPDT",
    jawaban: 4,
    isTutorial: "-",
  },
  {
    key: "2",
    quizCode: "Subtest 2-gti penalaran",
    nomor: 1,
    soal: "John lebih lamban daripada Dani. John...",
    jawaban: 0,
    isTutorial: "-",
  },
  {
    key: "3",
    quizCode: "Subtest 3-gli jh",
    nomor: 1,
    soal: "KNP",
    jawaban: 0,
    isTutorial: "-",
  },
  {
    key: "4",
    quizCode: "Subtest 4-gti kka",
    nomor: 1,
    soal: "6,11,17",
    jawaban: 2,
    isTutorial: "-",
  },
  {
    key: "5",
    quizCode: "Subtest 5-gti_orientasi",
    nomor: 1,
    soal: "3,8/2,8 8,3",
    jawaban: 1,
    isTutorial: "-",
  },
  {
    key: "6",
    quizCode: "Subtest 1-gli_pci",
    nomor: 2,
    soal: "mnfqKNFQ",
    jawaban: 3,
    isTutorial: "-",
  },
  {
    key: "7",
    quizCode: "Subtest 2-gti penalaran",
    nomor: 2,
    soal: "Rani Lebih pendek daripada Susi. Rani...",
    jawaban: 1,
    isTutorial: "-",
  },
  {
    key: "8",
    quizCode: "Subtest 3-gli jh",
    nomor: 2,
    soal: "GKN",
    jawaban: 0,
    isTutorial: "-",
  },
  {
    key: "9",
    quizCode: "Subtest 4-gti kka",
    nomor: 2,
    soal: "15,1,7",
    jawaban: 0,
    isTutorial: "-",
  },
  {
    key: "10",
    quizCode: "Subtest 5-gti_orientasi",
    nomor: 2,
    soal: "6,718,7 2,5",
    jawaban: 0,
    isTutorial: "-",
  },
];

const GtiPage = () => {

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
          <AddButton text="Tambah GTI" />
          
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

export default GtiPage;
