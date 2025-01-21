"use client";

import React from "react";
import { Row, Col, Table, Button, Input } from "antd";
import { createStyles } from "antd-style";
import { FileExcelOutlined, PrinterOutlined } from "@ant-design/icons";
import { AddButton, DeleteButton, DetailButton, EditButton, ExportButton, PrintButton } from "@/components/ui/Buttons";
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
    title: "No",
    width: 70,
    dataIndex: "no",
    key: "no",
    fixed: "left",
  },
  {
    title: "Sesi Tes",
    dataIndex: "sesiTes",
    key: "sesiTes",
    width: 150,
  },
  {
    title: "Jumlah Peserta",
    dataIndex: "jumlahPeserta",
    key: "jumlahPeserta",
    width: 150,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
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
          <Button>Hexaco</Button>
        </Col>
        <Col>
          <Button>GTI</Button>
        </Col>
        <Col>
          <Button>DISC</Button>
        </Col>
        <Col>
          <Button>Psychogram</Button>
        </Col>
      </Row>
    ),
  },
];

// const dataSource = [
//   { key: 1, no: 1, sesiTes: "TestCase", jumlahPeserta: "10 Peserta", status: "Selesai" },
// ];

const PsychogramPage = () => {
  const { styles } = useStyle();

  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }} justify="space-between">
        <Col>
          <Search placeholder="Cari..." allowClear enterButton="Search" size="large" onSearch={onSearch} />
        </Col>
        <Row gutter={[16, 16]}>
          <Col>
            <Button type="primary" size="large">
              Kembali
            </Button>
          </Col>
        </Row>
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

export default PsychogramPage;
