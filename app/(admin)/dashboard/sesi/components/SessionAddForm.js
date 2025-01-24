"use client";

import { Button, Col, DatePicker, Drawer, Form, Input, Row, Space, message } from "antd";
import React from "react";

const SessionAddForm = ({ title, open, onClose, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const [timeFrom, timeTo] = values.dateTime || [];
    const newSession = {
      code: values.code,
      label: values.label,
      part: values.part,
      timeFrom: timeFrom?.toISOString(),
      timeTo: timeTo?.toISOString(),
      greeting: values.greeting,
    };

    onSubmit(newSession);
    form.resetFields();
  };

  return (
    <Drawer
      title={title}
      onClose={onClose}
      open={open}
      width={720}
      extra={
        <Space>
          <Button onClick={onClose}>Batal</Button>
          <Button type="primary" onClick={() => form.submit()}>
            Tambah
          </Button>
        </Space>
      }
    >
      <Form form={form} layout="vertical" onFinish={handleFinish} hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="code" label="Code" rules={[{ required: true, message: "Please enter session code" }]}>
              <Input placeholder="Masukkan kode sesi" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="label" label="Label" rules={[{ required: true, message: "Please enter session label" }]}>
              <Input placeholder="Masukkan judul sesi" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="dateTime" label="DateTime" rules={[{ required: true, message: "Please select the date and time range" }]}>
              <DatePicker.RangePicker
                arrow={"Hide"}
                style={{ width: "100%" }}
                showTime // Tambahkan ini jika ingin menampilkan pemilih waktu
                format="YYYY-MM-DD HH:mm:ss" // Format tampilan
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="part" label="Part" rules={[{ required: true, message: "Please enter session part" }]}>
              <Input placeholder="Masukkan bagian sesi" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="greeting" label="Greeting" rules={[{ required: true, message: "Please enter a greeting" }]}>
              <Input.TextArea rows={4} placeholder="Tulis salam di sini" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default SessionAddForm;
