"use client";
import React from "react";
import { Button, Tooltip } from "antd";
import { CopyOutlined, DeleteOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, PrinterOutlined } from "@ant-design/icons";
import ModalDelete from "@/components/ui/ModalDelete";

export const AddButton = ({ text = "Tambah", ...props }) => (
  <Button type="primary" size="large" {...props}>
    {text}
  </Button>
);

export const EditButton = (props) => (
  <Tooltip title="Edit">
    <Button type="primary" style={{ backgroundColor: "#52c41a", color: "white" }} icon={<EditOutlined />} {...props} />
  </Tooltip>
);

export const DeleteButton = (props) => (
  <Tooltip title="Delete">
    <Button type="primary" onClick={ModalDelete} danger icon={<DeleteOutlined />} {...props} />
  </Tooltip>
);

export const DetailButton = (props) => (
  <Tooltip title="Detail" >
    <Button type="primary" icon={<EyeOutlined />} {...props} />
  </Tooltip>
);

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

export const CloneButton = (props) => (
  <Tooltip title="Clone">
    <Button type="primary" icon={<CopyOutlined />} style={{ backgroundColor: "#FADB14", color: "white" }} {...props} />
  </Tooltip>
);
