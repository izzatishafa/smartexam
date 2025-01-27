"use client";
import { AddButton } from "@/components/ui/Buttons";
import CardsList from "@/components/ui/CardList";
import { Col, Pagination, Row, Input } from "antd";
import React, { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import SessionAddForm from "../components/SessionAddForm";
import SessionEditForm from "../components/SessionEditForm";
import { calculateDuration, getDayRange } from "../utils/dateHelpers";
import ModalDelete from "@/components/ui/ModalDelete";
const { Search } = Input;

const fetchSessions = async (page, keyword = "") => {
  const res = await fetch(`http://localhost:8001/api/v1/company/sesi?page=${page}&total=3&search=${keyword}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch sessions");
  const data = await res.json();
  return {
    data: {
      list: data.list.sesiRes, // Sesuaikan dengan struktur API
      metadata: data.metadata,
    },
  };
};

const SesiPage = ({ initialData = [], metadata }) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(parseInt(metadata?.page || 1));
  const [editItem, setEditItem] = useState(null); // Data item yang sedang diedit
  const [searchKeyword, setSearchKeyword] = useState("");

  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const [deleteItemId, setDeleteItemId] = useState(null);

  // Search Function
  const onSearch = (value) => {
    setSearchKeyword(value);
    setCurrentPage(1); // Kembalikan ke halaman pertama saat melakukan pencarian
  };

  // Fetching data with React Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sessions", currentPage, searchKeyword],
    queryFn: () => fetchSessions(currentPage, searchKeyword),
    initialData: {
      data: {
        list: initialData,
        metadata,
      },
    },
  });

  const filteredData = useMemo(() => {
    if (!data?.data?.list) return [];
    return data.data.list.filter((item) => (item.label || "").toLowerCase().includes(searchKeyword.toLowerCase()) || (item.code || "").toLowerCase().includes(searchKeyword.toLowerCase()));
  }, [data, searchKeyword]);

  const mapSessionData = (item) => ({
    id: item.id,
    title: item.label,
    dateRange: `${new Date(item.timeFrom).toLocaleDateString()} - ${new Date(item.timeTo).toLocaleDateString()}`,
    duration: calculateDuration(item.timeFrom, item.timeTo),
    days: getDayRange(item.timeFrom, item.timeTo),
    time: `${new Date(item.timeFrom).toLocaleTimeString()} - ${new Date(item.timeTo).toLocaleTimeString()} WIB`,
    participants: 0,
    onEdit: () => {
      setEditItem(item);
      setOpenEdit(true);
    },
    onDelete: () => handleDeleteWithConfirmation(item.id),
  });

  // Mutation for adding a session
  const addMutation = useMutation({
    mutationFn: (newSession) =>
      fetch("http://localhost:8001/api/v1/company/sesi/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSession),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] }); // Refresh data
      setOpen(false);
    },
  });

  // Mutation for editing a session
  const editMutation = useMutation({
    mutationFn: (updatedSession) =>
      fetch(`http://localhost:8001/api/v1/company/sesi/update/${updatedSession.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSession),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
      setOpenEdit(false);
      setEditItem(null);
    },
  });

  // Mutation for deleting a session
  const deleteMutation = useMutation({
    mutationFn: (id) =>
      fetch(`http://localhost:8001/api/v1/company/sesi/delete/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] }); // Refresh data
    },
  });

  const handleAdd = (newSession) => {
    addMutation.mutate(newSession);
  };

  const handleEdit = (updatedSession) => {
    editMutation.mutate(updatedSession);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const handleDeleteWithConfirmation = (id) => {
    ModalDelete({
      onOk: () => handleDelete(id),
      onCancel: () => console.log("Penghapusan dibatalkan"),
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Tambahkan logika untuk memuat data halaman baru
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const onClose = () => {
    setOpen(false);
  };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching sessions</div>;

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }} justify="space-between">
        <Col>
          <Search placeholder="Cari..." allowClear enterButton="Search" size="large" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} onSearch={(value) => setSearchKeyword(value)} />
        </Col>
        <Col style={{ textAlign: "right" }}>
          <AddButton text="Tambah Sesi" onClick={() => setOpen(true)} />
        </Col>
      </Row>

      {/* Pastikan data tidak undefined sebelum memanggil map */}
      {filteredData.length > 0 ? <CardsList data={filteredData.map(mapSessionData)} /> : <div>Tidak ada data sesi</div>}

      <SessionAddForm title="Tambah Sesi" open={open} onClose={onClose} onSubmit={handleAdd} />

      <SessionEditForm title="Edit Sesi" open={openEdit} onClose={handleCloseEdit} initialValues={editItem} onSubmit={handleEdit} />

      <Row justify="end" style={{ marginTop: "10px" }}>
        <Pagination
          simple
          current={currentPage}
          total={parseInt(data?.data?.metadata?.total_pages || metadata?.total_pages || 1) * 3}
          pageSize={parseInt(data?.data?.metadata?.per_page || metadata?.per_page || 3)}
          onChange={handlePageChange}
        />
      </Row>
    </>
  );
};

export default SesiPage;
