"use client";

import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;

const ModalDelete = ({ onOk, onCancel }) => {
  confirm({
    title: "Apakah anda yakin ingin menghapus data ini?",
    icon: <ExclamationCircleFilled />,
    content: "Tindakan ini akan menghapus data secara permanen",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk,
    onCancel,
  });
};

export default ModalDelete;
