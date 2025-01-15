"use client";

import React from "react";
import { Drawer, Button, Space, Form, Row, Col } from "antd";

const GroupItemsForm = ({ title, open, onClose, onSubmit, formItems = [], width = 720, extraButtons = null, mode }) => {
  return (
    <Drawer
      title={title}
      open={open}
      onClose={onClose}
      width={width}
      extra={
        <Space>
          <Button onClick={onClose}>Batal</Button>
          <Button onClick={onClose} type="primary">
            {title === "Tambah Group Item" ? "Tambah" : "Edit"}
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          {formItems.map((item, index) => (
            <Col span={item.span || 24} key={index}>
              <Form.Item name={item.name} label={item.label} rules={item.rules}>
                {item.component}
              </Form.Item>
            </Col>
          ))}
        </Row>
      </Form>
    </Drawer>
  );
};

export default GroupItemsForm;
