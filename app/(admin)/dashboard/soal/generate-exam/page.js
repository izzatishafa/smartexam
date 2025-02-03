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
    title: "Jenis Soal",
    dataIndex: "jenisSoal",
    key: "jenisSoal",
    width: 150,
    fixed: "left",
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 150,
    render: (_, record) => <Button type="primary">Pilih</Button>,
  },
];

const dataSource = [
  {
    key: "1",
    jenisSoal: "English",
  },
  {
    key: "2",
    jenisSoal: "TKD",
  },
  {
    key: "3",
    jenisSoal: "TKA",
  },
  {
    key: "4",
    jenisSoal: "TKD1",
  },
  {
    key: "5",
    jenisSoal: "TKD2",
  },
  {
    key: "6",
    jenisSoal: "WPT Taxand",
  },
  {
    key: "7",
    jenisSoal: "English Taxand",
  },
];

const GenerateExamPage = () => {
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
        dataSource={dataSource}
        scroll={{
          x: "max-content",
          y: 55 * 5,
        }}
      />
    </>
  );
};

export default GenerateExamPage;
