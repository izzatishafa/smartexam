import React from "react";
import { Button, Drawer, Form, Input, Select, Space } from "antd";
import TextEditor from "@/components/ui/TextEditor";
const { Search } = Input;
const { Option } = Select;

const GtiAddForm = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Tambah Soal"
        onClose={onClose}
        open={open}
        width={1080}
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
        <Form layout="vertical" hideRequiredMark>
          <Form.Item
            name="nomor"
            label="Nomor"
            rules={[
              {
                required: true,
                message: "Please enter number quistion",
              },
            ]}
          >
            <Input placeholder="Masukan nomor soal" />
          </Form.Item>
          <Form.Item name="soal" label="Soal">
            <TextEditor />
          </Form.Item>
          <Form.Item
            name="jawaban"
            label="Jawaban"
            rules={[
              {
                required: true,
                message: "Please input quiz code",
              },
            ]}
          >
            <Search
              placeholder="input quiz code"
              allowClear
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="isTutorial"
            label="Is Tutorial"
            rules={[
              {
                required: true,
                message: "Please input quiz code",
              },
            ]}
          >
            <Search
              placeholder="input quiz code"
              allowClear
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="nomor"
            label="Nomor"
            rules={[
              {
                required: true,
                message: "Please enter display",
              },
            ]}
          >
            <Input placeholder="Masukan display" />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default GtiAddForm;
