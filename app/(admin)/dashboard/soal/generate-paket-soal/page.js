"use client";

import React from "react";
import { Row, Col, Table, Input, Button } from "antd";
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
    title: "Quiz Label",
    dataIndex: "quizLabel",
    key: "quizLabel",
    width: 200,
  },
  {
    title: "Paket Soal Quiz",
    dataIndex: "paketSoalQuiz",
    key: "paketSoalQuiz",
    width: 150,
  },
  {
    title: "Paket Soal Tutorial",
    dataIndex: "paketSoalTutorial",
    key: "paketSoalTutorial",
    width: 150,
  },
  {
    title: "Generate",
    key: "generate",
    fixed: "right",
    width: 150,
    render: (_, record) => <Button type="primary">Generate</Button>,
  },
];

// const dataSource = [
//   {
//     key: "1",
//     quizCode: "3A",
//     quizLabel: "Subtest 6 - 3A",
//     paketSoalQuiz: 6,
//     paketSoalTutorial: 0,
//   },
//   {
//     key: "2",
//     quizCode: "accounting_staf_level_junior",
//     quizLabel: "Accounting Staf Junior",
//     paketSoalQuiz: 12,
//     paketSoalTutorial: 0,
//   },
//   {
//     key: "3",
//     quizCode: "accounting_staf_level_senior",
//     quizLabel: "Accounting Staf Senior",
//     paketSoalQuiz: 10,
//     paketSoalTutorial: 0,
//   },
//   {
//     key: "4",
//     quizCode: "competency",
//     quizLabel: "Competency",
//     paketSoalQuiz: 0,
//     paketSoalTutorial: 0,
//   },
//   {
//     key: "5",
//     quizCode: "competency_group",
//     quizLabel: "Competency",
//     paketSoalQuiz: 0,
//     paketSoalTutorial: 0,
//   },
//   {
//     key: "6",
//     quizCode: "cti",
//     quizLabel: "CTI",
//     paketSoalQuiz: 0,
//     paketSoalTutorial: 0,
//   },
//   {
//     key: "7",
//     quizCode: "d3ad",
//     quizLabel: "D3AD",
//     paketSoalQuiz: 0,
//     paketSoalTutorial: 0,
//   },
//   {
//     key: "8",
//     quizCode: "deletequiz",
//     quizLabel: "Deletequiz",
//     paketSoalQuiz: 0,
//     paketSoalTutorial: 0,
//   },
//   {
//     key: "9",
//     quizCode: "disc1",
//     quizLabel: "DISC",
//     paketSoalQuiz: 4,
//     paketSoalTutorial: 0,
//   },
// ];


const GeneratePaketSoalPage = () => {
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
      </Row>

      <Table
        className={styles.customTable}
        columns={columns}
        // dataSource={dataSource}
        scroll={{
          x: "max-content",
          y: 55 * 5,
        }}
      />
    </>
  );
};

export default GeneratePaketSoalPage;
