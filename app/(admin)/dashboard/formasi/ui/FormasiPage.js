"use client";

import React, { useState } from "react";
import { Row, Col, Table, Input } from "antd";
import { DetailButton, EditButton, DeleteButton, AddButton } from "@/components/ui/Buttons";
import { createStyles } from "antd-style";
import FormasiAddForm from "../components/FormasiAddForm";
import FormasiEditForm from "../components/FormasiEditForm";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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

const fetchFormation = async (page, keyword = "") => {
  const res = await fetch(`http://localhost:8001/api/v1/company/formasi?page=${page}&total=3&search=${keyword}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch sessions");
  return res.json();
};

// Tambahkan fungsi untuk fetch data referensi
const fetchReferenceData = async () => {
  const [divisiRes, levelRes, sesiRes] = await Promise.all([
    fetch("http://localhost:8001/api/v1/company/divisi/opts"),
    fetch("http://localhost:8001/api/v1/company/level/dropdown"),
    fetch("http://localhost:8001/api/v1/company/sesi/dropdown/formasi")
  ]);

  const [divisi, level, sesi] = await Promise.all([
    divisiRes.json(),
    levelRes.json(),
    sesiRes.json()
  ]);
return {
    divisi: divisi.data || [],
    level: level.data || [],
    sesi: sesi.data || []
  };
}


const FormasiPage = ({ initialData = [], metadata }) => {
  const { styles } = useStyle();
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const queryClient = useQueryClient();
  const [openAddForm, setOpenAddForm] = useState(false);

  const { data: referenceData } = useQuery({
    queryKey: ["reference-data"],
    queryFn: fetchReferenceData,
    initialData: { divisi: [], level: [], sesi: [] }
  });

  const handleAddClose = () => {
    setOpenAddForm(false);
  };

  const handleEdit = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleAdd = (values) => {
    addMutation.mutate(values);
  };


  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  // Fetching data with React Query
  const { data, isLoading } = useQuery({
    queryKey: ["formasi", searchKeyword],
    queryFn: () => fetchFormation(searchKeyword),
    initialData: {
      data: {
        list: initialData,
        metadata,
      },
    },
  });

  // Mutation untuk tambah formasi
    const addMutation = useMutation({
      mutationFn: (newFormation) =>
        fetch("http://localhost:8001/api/v1/company/formasi/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newFormation),
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["formation"] });
        setOpenAddForm(false);
        message.success("formasi berhasil ditambahkan");
      },
      onError: () => {
        message.error("Gagal menambahkan formasi");
      },
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
      render: (sesiId) => {
        const sesiItem = referenceData.sesi.find((s) => s.id === sesiId);
        return sesiItem ? sesiItem.label : sesiId;
      },
    },
    {
      title: "Divisi",
      dataIndex: "posisi",
      key: "divisi",
      width: 150,
      render: (divisiId) => {
        const divisiItem = referenceData.divisi.find((d) => d.id === divisiId);
        return divisiItem ? divisiItem.label : divisiId;
      },
    },
    {
      title: "Level",
      dataIndex: "tingkatan",
      key: "level",
      width: 150,
      render: (levelId) => {
        const levelItem = referenceData.level.find((l) => l.id === levelId);
        return levelItem ? levelItem.label : levelId;
      },
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

  const dataSource =
    data?.data?.list?.map((item, index) => ({
      key: item.id,
      no: index + 1,
      label: item.label,
      code: item.code,
      posisi: item.posisi,
      tingkatan: item.tingkatan,
      sesi: item.sesi_code,
    })) || [];

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }} justify="space-between">
        <Col>
          <Search placeholder="Cari..." allowClear enterButton="Search" size="large" onSearch={onSearch} />
        </Col>
        <Col style={{ textAlign: "right" }}>
          <AddButton onClick={() => setOpenAddForm(true)} />
        </Col>
      </Row>
      <FormasiAddForm open={openAddForm} onClose={handleAddClose} onSubmit={handleAdd} loading={addMutation.isLoading} />
      <FormasiEditForm open={openEdit} onClose={handleEditClose} />

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

export default FormasiPage;
