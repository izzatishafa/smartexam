"use client";

import React from "react";
import { Card, Button, Row, Col, Typography } from "antd";

const { Text, Title } = Typography;

// Fungsi untuk menentukan status berdasarkan rentang tanggal
const determineStatus = (dateRange) => {
  const [startDateStr, endDateStr] = dateRange.split(" - ");
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const currentDate = new Date();

  // Periksa apakah tanggal sekarang berada dalam rentang
  if (currentDate >= startDate && currentDate <= endDate) {
    return "Aktif"; 
  }
  return "Tidak Aktif";  
};

const CardComponent = ({ title, dateRange, duration, days, time, participants, onEdit, onDelete }) => {
  const status = determineStatus(dateRange);

  return (
    <Card
      title={<Title level={5}>{title}</Title>}
      style={{
        backgroundColor: status === "Aktif" ? "#E3F2FD" : "#ECEFF1", // Warna tergantung status
        borderRadius: "8px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
      extra={
        <Text strong type={status === "Aktif" ? "success" : "secondary"}>
          {status}
        </Text>
      }
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text strong>{duration}</Text>
        </Col>
        <Col span={24}>
          <Text>{`${days} ${time}`}</Text>
        </Col>
        <Col span={24}>
          <Text>{dateRange}</Text>
        </Col>
        <Col span={24}>
          <Button type="primary" style={{ backgroundColor: "#13c2c2", color: "white" }}>{`${participants} Peserta`}</Button>
        </Col>
        <Col span={12}>
          <Button type="primary" block onClick={onEdit}>
            Edit
          </Button>
        </Col>
        <Col span={12}>
          <Button type="primary" danger block onClick={onDelete}>
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

// Contoh render banyak card
const CardsList = ({ data }) => {
  return (
    <div style={{ height: "calc(100vh - 350px)", overflowX: "hidden", overflowY: "auto" }}>
      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <CardComponent
              title={item.title}
              dateRange={item.dateRange}
              duration={item.duration}
              days={item.days}
              time={item.time}
              participants={item.participants}
              onEdit={() => item.onEdit(item.id)}
              onDelete={() => item.onDelete(item.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsList;
