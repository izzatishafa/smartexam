"use client";

import React, { useState } from "react";
import { Row, Col, Table, Button, Input, Tooltip } from "antd";
import { createStyles } from "antd-style";
import {CheckOutlined } from "@ant-design/icons";
import { AddButton, DeleteButton, DetailButton, EditButton, ExportButton, PrintButton } from "@/components/ui/Buttons";
import GroupFrom from "./components/GroupFrom";
import Link from "next/link";
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

// const dataSource = [
//   { key: 1, no: 1, code: "baru" },
//   { key: 2, no: 2, code: "campuran-library" },
//   { key: 3, no: 3, code: "competency" },
//   { key: 4, no: 4, code: "deletquiz" },
//   { key: 5, no: 5, code: "div_junior_adm" },
//   { key: 6, no: 6, code: "div_junior_professional" },
//   { key: 7, no: 7, code: "div_junior_tech" },
//   { key: 8, no: 8, code: "div_manager_adm" },
//   { key: 9, no: 9, code: "div_manager_prof" },
//   { key: 10, no: 10, code: "div_manager_tech" },
// ];

const QuizGroupPage = () => {
  const { styles } = useStyle();
  const [open, setOpen] = useState(false);
  const [formMode, setFormMode] = useState("add");

  const onClose = () => {
    setOpen(false);
  }

  const handleEdit = () => {
    setFormMode("edit");
    setOpen(true);
  };

  const handleDetail = () => {
    // setSelectedData(record); // Simpan data yang dipilih
    setFormMode("detail"); 
    setOpen(true);
  };

  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  const columns = [
    {
      title: "No",
      width: 70,
      dataIndex: "no",
      key: "no",
      fixed: "left",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
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
            <DetailButton onClick={() => handleDetail()} />
          </Col>
          <Col>
            <EditButton onClick={() => handleEdit()} />
          </Col>
          <Col>
            <DeleteButton />
          </Col>
          <Col>
            <Link href="/dashboard/quiz/group-items">
              <Tooltip title="Set Quiz">
                <Button icon={<CheckOutlined />} type="primary" style={{ backgroundColor: "#FF7A45", color: "white" }} />
              </Tooltip>
            </Link>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }} justify="space-between">
        <Col>
          <Search placeholder="Cari..." allowClear enterButton="Search" size="large" onSearch={onSearch} />
        </Col>
        <Row gutter={[16, 16]}>
          <Col>
            <ExportButton />
          </Col>
          <Col>
            <PrintButton />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <AddButton text="Tambah Grup Quiz" onClick={() => setOpen(true)} />
          </Col>
        </Row>
      </Row>

      <GroupFrom mode={formMode} open={open} onClose={onClose} title={formMode === "add" ? "Tambah Group" : formMode === "edit" ? "Edit Group" : "Detail Group"} />

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

export default QuizGroupPage;
