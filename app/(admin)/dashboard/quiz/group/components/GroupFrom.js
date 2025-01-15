"use client"

import { Button, Descriptions, Drawer, Form, Input, Space } from 'antd'
import React from 'react'

const GroupFrom = ({title, open, onClose, mode}) => {
  const items =[
    {
    key: "1",
    label: "Code",
    children: "gti_pci",
  }
  ]

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
          mode !== "detail" && (
            <Space>
              <Button onClick={onClose}>Batal</Button>
              <Button onClick={onClose} type="primary">
                {title === "Tambah Group" ? "Tambah" : "Edit"}
              </Button>
            </Space>
          )
        }
      >
        {mode === "detail" ? (
          <Descriptions layout="vertical" bordered items={items} />
        ) : (
          <Form layout="vertical" hideRequiredMark>
            <Form.Item
              name="code"
              label="Code"
              rules={[
                {
                  required: true,
                  message: "Please enter group code",
                },
              ]}
            >
              <Input placeholder="Masukan kode group" />
            </Form.Item>
          </Form>
        )}
      </Drawer>
    </>
  );
}

export default GroupFrom
