"use client";

import React from "react";
import { useState } from "react";
import { Row, Col, Table, Input } from "antd";
import {DetailButton, EditButton, DeleteButton, AddButton} from "@/components/ui/Buttons";
import { createStyles } from "antd-style";
import QuizForm from "./components/QuizForm";
import QuizDetail from "./components/QuizDetail";
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

const dataSource = [
  {
    key: 1,
    no: 1,
    code: "gti_pci",
    label: "Subtest 1",
    description: "",
    libraryCode: "gti",
    groupQuizCode: "",
    active: 1,
    seconds: 180,
    isShow: 0,
  },
  {
    key: 2,
    no: 2,
    code: "gti_penalaran",
    label: "Subtest 2",
    description: "",
    libraryCode: "gti",
    groupQuizCode: "",
    active: 1,
    seconds: 240,
    isShow: 0,
  },
  {
    key: 3,
    no: 3,
    code: "gti_jh",
    label: "Subtest 3",
    description: "",
    libraryCode: "gti",
    groupQuizCode: "",
    active: 1,
    seconds: 240,
    isShow: 0,
  },
  {
    key: 4,
    no: 4,
    code: "gti_kka",
    label: "Subtest 4",
    description: "",
    libraryCode: "gti",
    groupQuizCode: "",
    active: 1,
    seconds: 240,
    isShow: 0,
  },
  {
    key: 5,
    no: 5,
    code: "gti_orientasi",
    label: "Subtest 5",
    description: "",
    libraryCode: "gti",
    groupQuizCode: "",
    active: 1,
    seconds: 300,
    isShow: 0,
  },
  {
    key: 6,
    no: 6,
    code: "hexaco",
    label: "Hexaco",
    description: "",
    libraryCode: "personal",
    groupQuizCode: "",
    active: 1,
    seconds: 1800,
    isShow: 1,
  },
  {
    key: 7,
    no: 7,
    code: "cti",
    label: "CTI",
    description: "",
    libraryCode: "personal",
    groupQuizCode: "",
    active: 0,
    seconds: 1200,
    isShow: 0,
  },
  {
    key: 8,
    no: 8,
    code: "d3ad",
    label: "D3AD",
    description: "",
    libraryCode: "personal",
    groupQuizCode: "",
    active: 0,
    seconds: 1200,
    isShow: 0,
  },
  {
    key: 9,
    no: 9,
    code: "ist_zr",
    label: "Subtest 6",
    description: "",
    libraryCode: "ist",
    groupQuizCode: "",
    active: 0,
    seconds: 480,
    isShow: 0,
  },
  {
    key: 10,
    no: 10,
    code: "ist_fa",
    label: "Subtest 7",
    description: "",
    libraryCode: "ist",
    groupQuizCode: "",
    active: 0,
    seconds: 480,
    isShow: 0,
  },
];


const QuizPage = () => {
  const { styles } = useStyle();
  const [formMode, setFormMode] = useState("add");
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
    const onClose = () => {
      setOpen(false);
    };

    const onCloseDetail = () => {
      setOpenDetail(false);
    };

    const handleDetail = () => {
      setOpenDetail(true);
    };

    const handleAdd = () => {
      setFormMode("add");
      setOpen(true);
    };

    const handleEdit = () => {
      setFormMode("edit");
      setOpen(true);
    };

  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      width: 70,
      fixed: "left",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      width: 150,
    },
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
      width: 150,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 200,
    },
    {
      title: "Library Code",
      dataIndex: "libraryCode",
      key: "libraryCode",
      width: 150,
    },
    {
      title: "Group Quiz Code",
      dataIndex: "groupQuizCode",
      key: "groupQuizCode",
      width: 150,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      width: 100,
    },
    {
      title: "Seconds",
      dataIndex: "seconds",
      key: "seconds",
      width: 100,
    },
    {
      title: "Is Show",
      dataIndex: "isShow",
      key: "isShow",
      width: 100,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 150,
      render: (_, record) => (
        <Row gutter={[8, 8]}>
          <Col>
            <DetailButton onClick={() => handleDetail()} />
          </Col>
          <Col>
            <EditButton onClick={() => handleEdit()} />
          </Col>
          <Col>
            <DeleteButton />
          </Col>
        </Row>
      ),
    },
  ];


  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }} justify="space-between">
        <Col>
          <Search placeholder="Cari..." allowClear enterButton="Search" size="large" onSearch={onSearch} />
        </Col>
        <Col style={{ textAlign: "right" }}>
          <AddButton onClick={handleAdd} />
        </Col>
      </Row>

      <QuizForm title={formMode === "add" ? "Tambah Quiz" : "Edit Quiz"} open={open} onClose={onClose} />

      <QuizDetail open={openDetail} onClose={onCloseDetail} />

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

export default QuizPage;
