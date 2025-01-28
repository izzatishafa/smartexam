"use client";

import React, { useState } from "react";
import { Row, Col, Table, Button, Input, Tooltip } from "antd";
import { createStyles } from "antd-style";
import { CheckOutlined } from "@ant-design/icons";
import { AddButton, DeleteButton, DetailButton, EditButton, ExportButton, PrintButton } from "@/components/ui/Buttons";
// import GroupFrom from "./components/GroupFrom";
import Link from "next/link";
import DivisiAddForm from "./DivisiAddForm";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ModalDelete from "@/components/ui/ModalDelete";
import DivisiEditForm from "./DivisiEditForm";
const { Search } = Input;


const fetchDivisi = async (keyword = "") => {
  const res = await fetch(`http://localhost:8001/api/v1/company/divisi?search=${keyword}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch divisi");
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

const DivisiTab = ({ divisiData = []}) => {
  const { styles } = useStyle();
  const [open, setOpen] = useState(false);
  const [opeAddForm, setOpenAddForm ]= useState(false);
  const queryClient = useQueryClient();
  const [openEditForm, setOpenEditForm] = useState(false);
  const [editingDivisi, setEditingDivisi] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [formMode, setFormMode] = useState("add");

  // Query untuk fetch data
    const { data, isLoading } = useQuery({
      queryKey: ["divisi", searchKeyword],
      queryFn: () => fetchDivisi(searchKeyword),
      initialData: { data: { list: divisiData } }, // Sesuaikan dengan struktur API
    });
  
    // Mutation untuk tambah divisi
    const addMutation = useMutation({
      mutationFn: (newDivisi) =>
        fetch("http://localhost:8001/api/v1/company/divisi/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newDivisi),
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["divisi"] });
        setOpenAddForm(false);
        message.success("Divisi berhasil ditambahkan");
      },
      onError: () => {
        message.error("Gagal menambahkan divisi");
      },
    });
  
    // Mutation untuk edit divisi
    const editMutation = useMutation({
      mutationFn: (updatedDivisi) =>
        fetch(`http://localhost:8001/api/v1/company/divisi/update/${updatedDivisi.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedDivisi),
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["divisi"] });
        setOpenEditForm(false);
        setEditingDivisi(null);
        message.success("Divisi berhasil diupdate");
      },
      onError: () => {
        message.error("Gagal mengupdate divisi");
      },
    });
  
    // Mutation untuk hapus divisi
    const deleteMutation = useMutation({
      mutationFn: (id) =>
        fetch(`http://localhost:8001/api/v1/company/divisi/delete/${id}`, {
          method: "DELETE",
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["divisi"] });
        message.success("Divisi berhasil dihapus");
      },
      onError: () => {
        message.error("Gagal menghapus divisi");
      },
    });

  const onClose = () => {
    setOpen(false);
    setOpenAddForm(false);
    setOpenEditForm(false);
    setEditingDivisi(null);
  };

  const handleDelete = (id) => {
    ModalDelete({
      onOk: () => deleteMutation.mutate(id),
      onCancel: () => console.log("Penghapusan dibatalkan"),
    });
  };

  const handleAdd = (values) => {
    addMutation.mutate(values);
  };

  const handleEdit = (record) => {
    setEditingDivisi(record);
    setOpenEditForm(true);
  };

  const handleEditSubmit = (values) => {
    editMutation.mutate({ id: editingDivisi.key, ...values });
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
      dataIndex: "label",
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
    divisiData.map((item, index) => ({
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
            <AddButton text="Tambah Divisi" onClick={() => setOpenAddForm(true)} />
          </Col>
        </Row>
      </Row>

      <DivisiAddForm open={opeAddForm} onClose={onClose} onSubmit={handleAdd} loading={addMutation.isLoading} />
      <DivisiEditForm open={openEditForm} onClose={onClose} onSubmit={handleEditSubmit} initialValues={editingDivisi} loading={editMutation.isLoading} />

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

export default DivisiTab;
