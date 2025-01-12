"use client";

import { AddButton } from "@/components/ui/Buttons";
import CardsList from "@/components/ui/CardList";
import { Col, Pagination, Row, Input } from "antd";
const { Search } = Input;
import React from "react";


const SesiPage = () => {
  const data = [
    {
      id: 1,
      title: "Sesi 1",
      dateRange: "12 Januari 2025 - 14 Januari 2025",
      duration: "7306 Hari",
      days: "Kamis - Senin",
      time: "04:00 - 22:00 WIB",
      participants: 6,
      onEdit: (id) => console.log("Edit", id),
      onDelete: (id) => console.log("Delete", id),
    },
    {
      id: 2,
      title: "Sesi 2",
      dateRange: "13 Juli 2023 - 30 Juni 2022",
      duration: "3276 Hari",
      days: "Kamis - Rabu",
      time: "03:31 - 15:31 WIB",
      participants: 7,
      onEdit: (id) => console.log("Edit", id),
      onDelete: (id) => console.log("Delete", id),
    },
    {
      id: 3,
      title: "Sesi 3",
      dateRange: "12 Januari 2025 - 14 Januari 2025",
      duration: "7306 Hari",
      days: "Kamis - Senin",
      time: "04:00 - 22:00 WIB",
      participants: 6,
      onEdit: (id) => console.log("Edit", id),
      onDelete: (id) => console.log("Delete", id),
    },
    {
      id: 4,
      title: "Sesi 4",
      dateRange: "12 Januari 2024 - 14 Januari 2024",
      duration: "7306 Hari",
      days: "Kamis - Senin",
      time: "04:00 - 22:00 WIB",
      participants: 6,
      onEdit: (id) => console.log("Edit", id),
      onDelete: (id) => console.log("Delete", id),
    },
  ];



  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }} justify="end">
        <Col style={{ textAlign: "right" }}>
          <AddButton text="Tambah Sesi" />
        </Col>
      </Row>
      <CardsList data={data} />
      <Row justify="end" style={{ marginTop: "10px" }}>
        <Pagination simple defaultCurrent={2} total={50} />
      </Row>
    </>
  );
};

export default SesiPage;
