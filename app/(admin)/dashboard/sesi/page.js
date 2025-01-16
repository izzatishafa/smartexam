"use client";

import { AddButton } from "@/components/ui/Buttons";
import CardsList from "@/components/ui/CardList";
import { Col, Pagination, Row, Input } from "antd";
const { Search } = Input;
import React, { useState } from "react";
import SessionAddForm from "./components/SessionAddForm";
import SessionEditForm from "./components/SessionEditForm";
import ModalDelete from "@/components/ui/ModalDelete";


const SesiPage = () => {
  const [open, setOpen] = useState(false); 
  const [openEdit, setOpenEdit] = useState(false);
  const handleEdit = () => {
    setOpenEdit(true);
  } 
  const handleClose = () => {
    setOpenEdit(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const data = [
    {
      id: 1,
      title: "Sesi 1",
      dateRange: "12 Januari 2025 - 14 Januari 2026",
      duration: "7306 Hari",
      days: "Kamis - Senin",
      time: "04:00 - 22:00 WIB",
      participants: 6,
      onEdit: handleEdit,
      onDelete: ModalDelete,
    },
    {
      id: 2,
      title: "Sesi 2",
      dateRange: "13 Juli 2023 - 30 Juni 2022",
      duration: "3276 Hari",
      days: "Kamis - Rabu",
      time: "03:31 - 15:31 WIB",
      participants: 7,
      onEdit: handleEdit,
      onDelete: ModalDelete,
    },
    {
      id: 3,
      title: "Sesi 3",
      dateRange: "12 Januari 2025 - 14 Januari 2027",
      duration: "7306 Hari",
      days: "Kamis - Senin",
      time: "04:00 - 22:00 WIB",
      participants: 6,
      onEdit: handleEdit,
      onDelete: ModalDelete,
    },
    {
      id: 4,
      title: "Sesi 4",
      dateRange: "12 Januari 2024 - 14 Januari 2024",
      duration: "7306 Hari",
      days: "Kamis - Senin",
      time: "04:00 - 22:00 WIB",
      participants: 6,
      onEdit: handleEdit,
      onDelete: ModalDelete,
    },
  ];

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }} justify="end">
        <Col style={{ textAlign: "right" }}>
          <AddButton text="Tambah Sesi" onClick={() => setOpen(true)} />
        </Col>
      </Row>
      <CardsList data={data} />
      <SessionAddForm title="Tambah Sesi" open={open} onClose={onClose} />
      <SessionEditForm title="Edit Sesi" open={openEdit} onClose={handleClose} />
      <Row justify="end" style={{ marginTop: "10px" }}>
        <Pagination simple defaultCurrent={2} total={50} />
      </Row>
    </>
  );
};

export default SesiPage;
