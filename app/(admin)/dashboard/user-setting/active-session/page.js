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
    title: "User Id",
    dataIndex: "userId",
    key: "userId",
    width: 150,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "usname",
    width: 150,
  },
  {
    title: "Session",
    dataIndex: "session",
    key: "session",
    width: 150,
  },
  {
    title: "Last Login",
    dataIndex: "lastLogin",
    key: "lastLogin",
    width: 150,
  },
  {
    title: "User Urgent",
    dataIndex: "userUrgent",
    key: "userUrgent",
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
          <DeleteButton />
        </Col>
      </Row>
    ),
  },
];

const dataSource = [
  { key: 1, no: 1, username: "baru" },
  { key: 2, no: 2, username: "campuran-library" },
  { key: 3, no: 3, username: "competency" },
  { key: 4, no: 4, username: "deletquiz" },
  { key: 5, no: 5, username: "div_junior_adm" },
  { key: 6, no: 6, username: "div_junior_professional" },
  { key: 7, no: 7, username: "div_junior_tech" },
  { key: 8, no: 8, username: "div_manager_adm" },
  { key: 9, no: 9, username: "div_manager_prof" },
  { key: 10, no: 10, username: "div_manager_tech" },
];

const ActiveSessionPage = () => {
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
        dataSource={dataSource}
        scroll={{
          x: "max-content",
          y: 55 * 5,
        }}
      />
    </>
  );
};

export default ActiveSessionPage;
