"use client";

import { Button, Col, Descriptions, Drawer, Form, Space, Switch } from "antd";
import React from "react";

const items = [
  {
    key: "1",
    label: "Username",
    span: 3,
    children: "tester20",
  },
  {
    key: "2",
    label: "Password",
    span: 3,
    children: "123",
  },
  {
    key: "3",
    label: "Fullname",
    span: 3,
    children: "Ray Tsang",
  },
  {
    key: "4",
    label: "Email",
    span: 3,
    children: "test1@apabae.com",
  },
  {
    key: "5",
    label: "Tanggal lahir",
    span: 3,
    children: "",
  },
  {
    key: "6",
    label: "Formasi",
    span: 3,
    children: "Testing_Upd_9JanProf Testing_Upd_9JanProf",
  },
  {
    key: "7",
    label: "Sesi",
    span: 3,
    children: "Testing_Upd_9Jan (Testing_Upd_9Jan)) (2025-01-09 09:06:00 - 2025-01-30 09:06:00)",
  },
  {
    key: "8",
    label: "First login",
    span: 3,
    children: "2018-12-21 09:36:12",
  },
  {
    key: "9",
    label: "Agree code",
    span: 3,
    children: "seTuJU",
  },
  {
    key: "10",
    label: "Agree time",
    span: 3,
    children: "2018-12-26 19:46:17",
  },
  {
    key: "11",
    label: "Email sent",
    span: 3,
    children: "1",
  },
  {
    key: "12",
    label: "Last login",
    span: 3,
    children: "2025-01-09 10:12:19",
  },
  {
    key: "13",
    label: "Last logout",
    span: 3,
    children: "2025-01-09 10:12:19",
  },
  {
    key: "14",
    label: "Last update",
    span: 3,
    children: "2025-01-09 10:12:19",
  },
  {
    key: "15",
    label: "Active",
    span: 3,
    children: "1",
  },
  {
    key: "16",
    label: "Userkey",
    span: 3,
    children: "2212294583_1_5",
  },
  {
    key: "17",
    label: "Competency group code",
    span: 3,
    children: "",
  },
  {
    key: "18",
    label: "Base Url",
    span: 3,
    children: "",
  },
  {
    key: "19",
    label: "Active session id",
    span: 3,
    children: "",
  },
];

const UserDetail = ({ open, onClose }) => {
  return (
    <>
      <Drawer
        title="Detail User"
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

export default UserDetail;
