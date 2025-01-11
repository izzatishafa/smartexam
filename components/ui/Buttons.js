"use client";
import React from "react";
import { Button } from "antd";
import { CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, PrinterOutlined } from "@ant-design/icons";

export const AddButton = ({ text = "Tambah", ...props }) => (
  <Button type="primary" size="large" {...props}>
    {text}
  </Button>
);

export const EditButton = (props) => <Button style={{ backgroundColor: "#52c41a", color: "white" }} icon={<EditOutlined />} {...props} />;

export const DeleteButton = (props) => <Button type="primary" danger icon={<DeleteOutlined />} {...props} />;

export const DetailButton = (props) => <Button type="primary" icon={<EyeOutlined />} {...props} />;

export const ExportButton = (props) => (
  <Button icon={<FileExcelOutlined />} size="large" type="primary" {...props}>
    Export
  </Button>
);

export const PrintButton = (props) => (
  <Button icon={<PrinterOutlined />} type="primary" size="large" {...props}>
    Print
  </Button>
);

export const CloneButton = (props) => <Button icon={<CopyOutlined />} style={{ backgroundColor: "#FADB14", color: "white" }} {...props} />;
