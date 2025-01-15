"use client"

import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
const { confirm } = Modal;

const ModalDelete = () => {
  confirm({
    title: "Apakah anda yakin ingin menghapus data ini?",
    icon: <ExclamationCircleFilled />,
    content: "Tindakan ini akan menghapus data secara permanen",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

export default ModalDelete;

