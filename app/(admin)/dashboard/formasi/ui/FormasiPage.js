"use client";

import React, { useState } from "react";
import { Row, Col, Table, Input } from "antd";
import { DetailButton, EditButton, DeleteButton, AddButton } from "@/components/ui/Buttons";
import { createStyles } from "antd-style";
import FormasiAddForm from "../components/FormasiAddForm";
import FormasiEditForm from "../components/FormasiEditForm";
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



const FormasiPage = ({ initialData = [], metadata }) => {
  const { styles } = useStyle();
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleAdd = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  };

  const handleEdit = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
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
      title: "Sesi",
      dataIndex: "sesi",
      key: "sesi",
      width: 200,
    },
    {
      title: "Divisi",
      dataIndex: "divisi",
      key: "divisi",
      width: 150,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
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
            <EditButton onClick={() => handleEdit()} />
          </Col>
          <Col>
            <DeleteButton />
          </Col>
        </Row>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching sessions</div>;
  
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
      <FormasiAddForm open={openAdd} onClose={handleAddClose} />
      <FormasiEditForm open={openEdit} onClose={handleEditClose} />

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

export default FormasiPage;
