"use client";
import { Button, Drawer, Form, Input, Space } from "antd";
import React, { useEffect } from "react";

const DivisiEditForm = ({ onClose, open, onSubmit, initialValues, loading }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        label: initialValues.label,
      });
    }
  }, [initialValues, form]);

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
      title="Edit Divisi"
      open={open}
      onClose={onClose}
      width={720}
      extra={
        <Space>
          <Button onClick={onClose}>Batal</Button>
          <Button type="primary" onClick={handleSubmit} loading={loading}>
            Simpan
          </Button>
        </Space>
      }
    >
      <Form form={form} hideRequiredMark layout="vertical">
        <Form.Item label="Divisi" name="label" rules={[{ required: true, message: "Please enter Divisi" }]}>
          <Input type="text" />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default DivisiEditForm;
