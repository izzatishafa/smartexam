"use client";

import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from "antd";
import React from "react";


const SessionAddForm = ({ title, open, onClose }) => {
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
              Tambah
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
                name="part"
                label="Part"
                rules={[
                  {
                    required: true,
                    message: "Please enter session part",
                  },
                ]}
              >
                <Input placeholder="Masukkan bagian sesi" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: "Please choose the dateTime",
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="greeting"
                label="Greeting"
                rules={[
                  {
                    required: true,
                    message: "please enter the greeting",
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Tulis salam disini" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default SessionAddForm;
