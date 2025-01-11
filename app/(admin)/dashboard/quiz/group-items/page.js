"use client";

import React from "react";
import { Row, Col, Table, Button, Input, Select } from "antd";
import { createStyles } from "antd-style";
import { SearchOutlined } from "@ant-design/icons";
import { AddButton, DeleteButton, DetailButton, EditButton } from "@/components/ui/Buttons";
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
    dataIndex: "no",
    key: "no",
    width: 70,
    fixed: "left",
  },
  {
    title: "Group Quiz Code",
    dataIndex: "group-quiz-code",
    key: "group-quiz-code",
    width: 150,
  },
  {
    title: "Quiz Code",
    dataIndex: "quiz-code",
    key: "quiz-code",
    width: 150,
  },
  {
    title: "Order",
    dataIndex: "order",
    key: "order",
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
          <EditButton />
        </Col>
        <Col>
          <DeleteButton />
        </Col>
      </Row>
    ),
  },
];

const dataSource = [
  { key: 1, no: 1, "group-quiz-code": "baru", "quiz-code": "gti_penalaran", order: 0 },
  { key: 2, no: 2, "group-quiz-code": "baru", "quiz-code": "gti_jh", order: 1 },
  { key: 3, no: 3, "group-quiz-code": "campuran-library", "quiz-code": "P1v2", order: 0 },
  { key: 4, no: 4, "group-quiz-code": "campuran-library", "quiz-code": "gti_jh_r", order: 1 },
  { key: 5, no: 5, "group-quiz-code": "campuran-library", "quiz-code": "gti_kka_r", order: 2 },
  { key: 6, no: 6, "group-quiz-code": "campuran-library", "quiz-code": "ist_fa", order: 3 },
  { key: 7, no: 7, "group-quiz-code": "campuran-library", "quiz-code": "english", order: 4 },
  { key: 8, no: 8, "group-quiz-code": "competency", "quiz-code": "socdes", order: 0 },
  { key: 9, no: 9, "group-quiz-code": "competency", "quiz-code": "competency", order: 1 },
  { key: 10, no: 10, "group-quiz-code": "deletequiz", "quiz-code": "deletequiz", order: 0 },
  { key: 11, no: 11, "group-quiz-code": "deletequiz", "quiz-code": "tkd", order: 1 },
];


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
            <AddButton text="Tambah Item" />
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
