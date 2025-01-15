"use client";

import { Button, Col, Drawer, Form, Input, InputNumber, Row, Select, Space, Switch } from "antd";
import React from "react";
const { Option } = Select;
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const QuizForm = ({ title, open, onClose }) => {
  return (
    <>
      <Drawer
        title={title}
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
              {title === "Tambah Quiz" ? "Tambah" : "Edit"}
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="code"
                label="Code"
                rules={[
                  {
                    required: true,
                    message: "Please enter quiz code",
                  },
                ]}
              >
                <Input placeholder="Masukan kode kuis" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="label"
                label="Label"
                rules={[
                  {
                    required: true,
                    message: "Please enter quiz label",
                  },
                ]}
              >
                <Input placeholder="Masukkan judul kuis" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="libraryCode"
                label="Library Code"
                rules={[
                  {
                    required: true,
                    message: "Please select an Library Code",
                  },
                ]}
              >
                <Select placeholder="Pilih Library Code">
                  <Option value="competency">Competency</Option>
                  <Option value="disc">Disc</Option>
                  <Option value="essay">Essay</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="groupQuizCode"
                label="Group Quiz Code"
                rules={[
                  {
                    required: true,
                    message: "Please select an Group Quiz Code",
                  },
                ]}
              >
                <Select placeholder="Pilih Library Code">
                  <Option value="campuran_library">Campuran_library</Option>
                  <Option value="div_junior_adm">Div_junior_adm</Option>
                  <Option value="english_university">English_university</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="isShow" label="Is Show">
                <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="seconds" label="Seconds">
                <Space>
                  <InputNumber min={0} placeholder="0" />
                  <Form.Item name="isActive" noStyle>
                    <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
                  </Form.Item>
                  <Form.Item name="allowRestart" noStyle>
                    <Switch checkedChildren="Allow Restart" unCheckedChildren="No Restart" />
                  </Form.Item>
                </Space>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter quiz description",
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Tulis deskripsi kuis disini" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default QuizForm;
