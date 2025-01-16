"use client";

import { Button, Drawer, Form, Input, Select, Space } from "antd";
import React from "react";

const FormasiAddForm = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Tambah Formasi"
        onClose={onClose}
        open={open}
        width={720}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Batal</Button>
            <Button onClick={onClose} type="primary">
              Tambah
            </Button>
          </Space>
        }
      >
        <Form hideRequiredMark layout="vertical">
          <Form.Item name="codeFormasi" label="Code Formasi" rules={[{ required: true, message: "Please enter formation code" }]}>
            <Input type="text" placeholder="Masukkan kode formasi" />
          </Form.Item>
          <Form.Item name="labelFormasi" label="Label Formasi" rules={[{ required: true, message: "Please enter formation label" }]}>
            <Input type="text" placeholder="Masukkan label formasi" />
          </Form.Item>
          <Form.Item name="sesi" label="Sesi">
            <Select
              options={[
                {
                  value: "testCase",
                  label: "TestCase(12 September 2024 - 12 Oktober 2025)",
                },
              ]}
              placeholder="Pilih Sesi"
            />
          </Form.Item>
          <Form.Item name="divisi" label="Divisi">
            <Select
              options={[
                {
                  value: "admin",
                  label: "Admin",
                },
              ]}
              placeholder="Pilih Divisi"
            />
          </Form.Item>
          <Form.Item name="level" label="Level">
            <Select
              options={[
                {
                  value: "junior",
                  label: "Junior",
                },
              ]}
              placeholder="Pilih Level"
            />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default FormasiAddForm;
