"use client";

import React from "react";
import { Row, Col, Table, Button, Input, Select } from "antd";
import { createStyles } from "antd-style";
import { FileExcelOutlined, PrinterOutlined, SearchOutlined } from "@ant-design/icons";
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
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 150,
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const dataSource = Array.from({
  length: 100,
}).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

const searchIcon = <SearchOutlined style={{ fontSize: "20px" }} />;

const QuizGroupItemsPage = () => {
  const { styles } = useStyle();

  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }} justify="space-between">
        <Row gutter={[16, 16]}>
          <Col>
            <Search placeholder="Cari..." allowClear enterButton="Search" size="large" onSearch={onSearch} />
          </Col>
          <Col>
            <Select
              suffixIcon={searchIcon}
              defaultValue="Search By"
              style={{ width: 180 }}
              size="large"
              options={[
                { value: "1", label: "Group Quiz Code" },
                { value: "2", label: "Quiz Code" },
              ]}
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col style={{ textAlign: "right" }}>
            <Button type="primary" size="large">
              Tambah Item
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

export default QuizGroupItemsPage;
