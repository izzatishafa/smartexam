"use client";

import React, { useState } from "react";
import { Row, Col, Table, Input, Drawer, Space, Button, Form, Select, DatePicker, Switch, InputNumber } from "antd";
import { DeleteButton, AddButton } from "@/components/ui/Buttons";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { createStyles } from "antd-style";
const { Search } = Input;
const { Option } = Select;

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
    title: "Generated",
    dataIndex: "generated",
    key: "generated",
    width: 70,
    fixed: "left",
  },
  {
    title: "Berdasarkan",
    dataIndex: "berdasarkan",
    key: "berdasarkan",
    width: 150,
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    width: 150,
  },
  {
    title: "Excel",
    dataIndex: "excel",
    key: "excel",
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
          <DeleteButton />
        </Col>
      </Row>
    ),
  },
];

const dataSource = [
  {
    key: 1,
    generated: "2024-09-20 16:11:58",
    berdasarkan: "formasi_code",
    code: "wiratek_admin",
    excel: "download",
  },
];

const GeneratePage = () => {
  const { styles } = useStyle();
  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }} justify="end">
        <Col style={{ textAlign: "right" }}>
          <AddButton text="Generate"  />
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

export default GeneratePage;
