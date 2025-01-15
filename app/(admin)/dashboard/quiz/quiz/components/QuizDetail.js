"use client";

import { Button, Col, Descriptions, Drawer, Form, Space, Switch } from "antd";
import React from "react";

const items = [
  {
    key: "1",
    label: "Code",
    children: "gti_pci",
  },
  {
    key: "2",
    label: "Library Code",
    children: "gti",
  },
  {
    key: "3",
    label: "Sub Library Code",
    children: "gti_pci",
  },
  {
    key: "4",
    label: "Label",
    children: "Subtest 1",
  },
  {
    key: "5",
    label: "Seconds",
    span: 2,
    children: (
      <Col>
        <Space>
          <Button color="default" disabled>
            180
          </Button>
          <Form.Item name="isActive" noStyle>
            <Switch checkedChildren="Active" unCheckedChildren="Inactive" disabled defaultChecked/>
          </Form.Item>
          <Form.Item name="allowRestart" noStyle>
            <Switch checkedChildren="Allow Restart" unCheckedChildren="No Restart" disabled />
          </Form.Item>
        </Space>
      </Col>
    ),
  },
  {
    key: "10",
    label: "Description",
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];

const QuizDetail = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Detail Quiz"
        onClose={onClose}
        open={open}
        width={720}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <Descriptions layout="vertical" bordered items={items} />
      </Drawer>
    </>
  );
};

export default QuizDetail;
