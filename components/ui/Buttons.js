"use client";
import React from "react";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

export const AddButton = ({ text = "Tambah", ...props }) => (
  <Button type="primary" size="large" {...props}>
    {text}
  </Button>
);

export const EditButton = (props) => <Button  style={{ backgroundColor: "#52c41a", color: "white" }}  icon={<EditOutlined />} {...props} />;

export const DeleteButton = (props) => <Button type="primary" danger icon={<DeleteOutlined />} {...props} />;

export const DetailButton = (props) => <Button type="primary" icon={<EyeOutlined />} {...props} />;
