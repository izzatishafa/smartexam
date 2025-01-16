"use client";

import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from "antd";
import React from "react";

const UsersAddForm = ({ open, onclose }) => {
  return (
    <>
      <Drawer
        open={open}
        onClose={onclose}
        width={720}
        title="Tambah User"
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onclose}>Batal</Button>
            <Button onClick={onclose} type="primary">
              Tambah
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="username" label="Username" rules={[{ required: true, message: "Please enter username" }]}>
                <Input placeholder="Masukkan username"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="fullname" label="Fullname" rules={[{ required: true, message: "Please enter fullname" }]}>
                <Input placeholder="Masukkan fullname"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter password" }]}>
                <Input placeholder="Masukkan password"></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter email" }]}>
                <Input placeholder="Masukkan email"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
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
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="formasi"
                label="Formasi"
                rules={[
                  {
                    required: true,
                    message: "Please choose the formation",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Pilih Formasi"
                  optionFilterProp="label"
                  style={{ width: "100%" }}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="sesi"
                label="Sesi"
                rules={[
                  {
                    required: true,
                    message: "Please choose the session",
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Pilih Sesi"
                  optionFilterProp="label"
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="baseUrl" label="Base Url" rules={[{ required: true, message: "Please enter base url" }]}>
                <Input placeholder="Masukkan base url"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="active"
                label="Active"
                rules={[
                  {
                    required: true,
                    message: "Please select active",
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Pilih Active"
                  optionFilterProp="label"
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default UsersAddForm;
