"use client";

import React, { useState } from "react";
import { Row, Col, Table, Button, Input, Tooltip } from "antd";
import { createStyles } from "antd-style";
import { CheckOutlined } from "@ant-design/icons";
import { AddButton, DeleteButton, DetailButton, EditButton, ExportButton, PrintButton } from "@/components/ui/Buttons";
// import GroupFrom from "./components/GroupFrom";
import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import LevelAddForm from "./LevelAddForm";
import LevelEditForm from "./LevelEditFrom";
import ModalDelete from "@/components/ui/ModalDelete";
const { Search } = Input;

const fetchLevels = async (keyword = "") => {
  const res = await fetch(`http://localhost:8001/api/v1/company/level?search=${keyword}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch levels");
  return res.json();
};

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

const LevelTab = ({ levelData = [] }) => {
  const { styles } = useStyle();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [editingLevel, setEditingLevel] = useState(null);
  const [formMode, setFormMode] = useState("add");
  const [searchKeyword, setSearchKeyword] = useState("");

  // Query untuk fetch data
  const { data, isLoading } = useQuery({
    queryKey: ["levels", searchKeyword],
    queryFn: () => fetchLevels(searchKeyword),
    initialData: { data: { list: levelData } }, // Sesuaikan dengan struktur API
  });

  // Mutation untuk tambah level
  const addMutation = useMutation({
    mutationFn: (newLevel) =>
      fetch("http://localhost:8001/api/v1/company/level/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLevel),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["levels"] });
      setOpenAddForm(false);
      message.success("Level berhasil ditambahkan");
    },
    onError: () => {
      message.error("Gagal menambahkan level");
    },
  });

  // Mutation untuk edit level
  const editMutation = useMutation({
    mutationFn: (updatedLevel) =>
      fetch(`http://localhost:8001/api/v1/company/level/update/${updatedLevel.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedLevel),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["levels"] });
      setOpenEditForm(false);
      setEditingLevel(null);
      message.success("Level berhasil diupdate");
    },
    onError: () => {
      message.error("Gagal mengupdate level");
    },
  });

  // Mutation untuk hapus level
  const deleteMutation = useMutation({
    mutationFn: (id) =>
      fetch(`http://localhost:8001/api/v1/company/level/delete/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["levels"] });
      message.success("Level berhasil dihapus");
    },
    onError: () => {
      message.error("Gagal menghapus level");
    },
  });

  const onClose = () => {
    setOpen(false);
    setOpenAddForm(false);
    setOpenEditForm(false);
    setEditingLevel(null);
  };

  const handleAdd = (values) => {
    addMutation.mutate(values);
  };

  const handleEdit = (record) => {
    setEditingLevel(record);
    setOpenEditForm(true);
  };

  const handleEditSubmit = (values) => {
    editMutation.mutate({ id: editingLevel.key, ...values });
  };

  const handleDelete = (id) => {
    ModalDelete({
      onOk: () => deleteMutation.mutate(id),
      onCancel: () => console.log("Penghapusan dibatalkan"),
    });
  };
  const onSearch = (value) => {
    setSearchKeyword(value);
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
      title: "Label",
      dataIndex: "label",
      key: "label",
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
            <EditButton onClick={() => handleEdit(record)} />
          </Col>
          <Col>
            <DeleteButton onClick={() => handleDelete(record.key)} />
          </Col>
        </Row>
      ),
    },
  ];

  const dataSource =
    data?.data?.list?.map((item, index) => ({
      key: item.id,
      no: index + 1,
      label: item.label,
    })) ||
    levelData.map((item, index) => ({
      key: item.id,
      no: index + 1,
      label: item.label,
    })) ||
    [];

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }} justify="space-between">
        <Col>
          <Search placeholder="Cari..." allowClear enterButton="Search" size="large" onSearch={onSearch} />
        </Col>
        <Row gutter={[16, 16]}>
          <Col style={{ textAlign: "right" }}>
            <AddButton text="Tambah Level" onClick={() => setOpenAddForm(true)} />
          </Col>
        </Row>
      </Row>

      <LevelAddForm onClose={onClose} open={openAddForm} onSubmit={handleAdd} loading={addMutation.isLoading} />
      <LevelEditForm onClose={onClose} open={openEditForm} onSubmit={handleEditSubmit} initialValues={editingLevel} loading={editMutation.isLoading} />

      <Table
        className={styles.customTable}
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
        scroll={{
          x: "max-content",
          y: 55 * 5,
        }}
      />
    </>
  );
};

export default LevelTab;
