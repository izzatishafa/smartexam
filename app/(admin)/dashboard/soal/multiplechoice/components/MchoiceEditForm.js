"use client";

import dynamic from "next/dynamic";
import { Button, Drawer, Form, Input, Space } from "antd";
import React, { useEffect } from "react";


const TextEditor = dynamic(() => import("@/components/ui/TextEditor"), { ssr: false });
const MchoiceEditForm = ({ open, onClose, initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues); // Sinkronkan nilai form
    }
  }, [initialValues, form]);


  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit({ ...values, id: initialValues.id });
        onClose();
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };


  return (
    <>
      <Drawer
        title="Edit Multiple Choice"
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
              Edit
            </Button>
          </Space>
        }
      >
        <Form hideRequiredMark layout="vertical" form={form} initialValues={initialValues}>
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
            <TextEditor value={form.getFieldValue("question")} />
          </Form.Item>
          <Form.Item
            name="parentNomor"
            label="Parent nomor"
            rules={[
              {
                required: true,
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
          >
            <Button type="primary">Edit Story</Button>
          </Form.Item>
          <Form.Item
            name="groupName"
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
                required: true,
                message: "Please input the id difficulty",
              },
            ]}
          >
            <Input placeholder="Masukan id kesulitan" />
          </Form.Item>
          <Form.Item
            name="multipleCHoiceQUestionCategoryId"
            label="Multiplechoice question category id"
            rules={[
              {
                required: false,
                message: "Please input id question category",
              },
            ]}
          >
            <Input placeholder="Masukan id kategori soal" />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default MchoiceEditForm;
