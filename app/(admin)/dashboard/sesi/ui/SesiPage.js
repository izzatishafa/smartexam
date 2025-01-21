"use client";
import { AddButton } from "@/components/ui/Buttons";
import CardsList from "@/components/ui/CardList";
import { Col, Pagination, Row } from "antd";
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import SessionAddForm from "../components/SessionAddForm";
import SessionEditForm from "../components/SessionEditForm";
import { calculateDuration, getDayRange } from "../utils/dateHelpers";
import ModalDelete from "@/components/ui/ModalDelete";

const fetchSessions = async (page) => {
  const res = await fetch(`http://localhost:8001/api/v1/company/sesi?page=${page}&total=3`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch sessions");
  return res.json();
};

const SesiPage = ({ initialData = [], metadata }) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(parseInt(metadata?.page || 1));
  const [editItem, setEditItem] = useState(null); // Data item yang sedang diedit

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  // Fetching data with React Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sessions", currentPage],
    queryFn: () => fetchSessions(currentPage),
    initialData: {
      data: {
        list: initialData,
        metadata,
      },
    },
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
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }} justify="end">
        <Col style={{ textAlign: "right" }}>
          <AddButton text="Tambah Sesi" onClick={() => setOpen(true)} />
        </Col>
      </Row>

      {/* Pastikan data tidak undefined sebelum memanggil map */}
      {data.data.list.length > 0 ? (
        <CardsList
          data={data.data.list.map((item) => ({
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
          }))}
        />
      ) : (
        <div>Tidak ada data sesi</div>
      )}

      <SessionAddForm title="Tambah Sesi" open={open} onClose={onClose} onSubmit={handleAdd} />

      <SessionEditForm title="Edit Sesi" open={openEdit} onClose={handleCloseEdit} initialValues={editItem} onSubmit={handleEdit} />

      <Row justify="end" style={{ marginTop: "10px" }}>
        <Pagination simple current={currentPage} total={parseInt(data.data.metadata.total_pages || 1) * 3} pageSize={parseInt(data.data.metadata.per_page || 3)} onChange={handlePageChange} />
      </Row>
    </>
  );
};

export default SesiPage;
