"use client";
import { Button, Drawer, Form, Input, Space } from "antd";
import React from "react";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("@/components/ui/TextEditor"), { ssr: false });

const MchoiceAddForm = ({ open, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values);
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  return (
    <>
      <Drawer
        title="Tambah Multiple Choice"
        width={1080}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Batal</Button>
            <Button onClick={handleSubmit} type="primary">
              Tambah
            </Button>
          </Space>
        }
      >
        <Form form={form} hideRequiredMark layout="vertical">
          <Form.Item
            name="jenisSoal"
            label="Jenis Soal"
            rules={[
              {
                required: true,
                message: "Please input type of question",
              },
            ]}
          >
            <Input placeholder="Masukan jenis soal" />
          </Form.Item>
          <Form.Item
            name="sulit"
            label="Sulit"
            rules={[
              {
                required: true,
                message: "Please input type of difficulty",
              },
            ]}
          >
            <Input placeholder="Masukan tipe kesulitan" />
          </Form.Item>
          <Form.Item
            name="nomor"
            label="Nomor"
            rules={[
              {
                required: true,
                message: "Please input the number",
              },
            ]}
          >
            <Input placeholder="Masukan nomor soal" />
          </Form.Item>
          <Form.Item name="question" label="Question">
            <TextEditor />
          </Form.Item>
          <Form.Item
            name="parentNomor"
            label="Parent nomor"
            rules={[
              {
                required: false,
                message: "Please input the parent number",
              },
            ]}
          >
            <Input placeholder="Masukan nomor parent" />
          </Form.Item>
          <Form.Item
            name="multiplechoiceImgCode"
            label="Multiplechoice img code"
            rules={[
              {
                required: false,
                message: "Please input the img code",
              },
            ]}
            getValueFromEvent={(e) => {
              const value = e.target.value.trim();
              return value === "" ? null : value; // Konversi ke null jika kosong
            }}
          >
            <Input placeholder="Masukan kode gambar" />
          </Form.Item>
          <Form.Item
            name="answer"
            label="Jawaban"
            rules={[
              {
                required: true,
                message: "Please input the answer",
              },
            ]}
          >
            <Input placeholder="Masukan jawaban soal" />
          </Form.Item>
          <Form.Item name="postQuestion" label="Post Question">
            <TextEditor />
          </Form.Item>
          <Form.Item
            name="multiplechoiceStoryCode"
            label="Multiplechoice story code"
            rules={[
              {
                required: false,
              },
            ]}
            getValueFromEvent={(e) => (e.target.value.trim() === "" ? null : e.target.value)}
          >
            <Button type="primary">Edit Story</Button>
          </Form.Item>
          <Form.Item
            name=" group_name"
            label=" Group name"
            rules={[
              {
                required: true,
                message: "Please input group name",
              },
            ]}
          >
            <Input placeholder="Masukan nama group" />
          </Form.Item>
          <Form.Item
            name="refKesulitanId"
            label="Ref kesulitan id"
            rules={[
              {
                required: false,
                message: "Please input the id difficulty",
              },
            ]}
          >
            <Input placeholder="Masukan id kesulitan" />
          </Form.Item>
          <Form.Item
            name="multiplechoiceQuestionCategoryId"
            label="Multiplechoice question category id"
            rules={[
              {
                required: false,
                message: "Please input id question category",
              },
            ]}
            getValueFromEvent={(e) => (e.target.value.trim() === "" ? null : e.target.value)}
          >
            <Input placeholder="Masukan id kategori soal" />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default MchoiceAddForm;
