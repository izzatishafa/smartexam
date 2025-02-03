"use client";
import { Button, Drawer, Form, Input, Space } from "antd";
import React from "react";

const LevelAddForm = ({ onClose, open, onSubmit, loading }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Drawer
      title="Tambah Level"
      open={open}
      onClose={onClose}
      width={720}
      extra={
        <Space>
          <Button onClick={onClose}>Batal</Button>
          <Button type="primary" onClick={handleSubmit} loading={loading}>
            Tambah
          </Button>
        </Space>
      }
    >
      <Form form={form} hideRequiredMark layout="vertical">
        <Form.Item label="Level" name="label" rules={[{ required: true, message: "Please enter level" }]}>
          <Input type="text" />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default LevelAddForm;
