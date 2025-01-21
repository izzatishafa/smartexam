"use client";

import React, { useState } from "react";
import { Row, Col, Table, Button, Input, Tooltip } from "antd";
import { createStyles } from "antd-style";
import { FileTextOutlined, PictureOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { AddButton, CloneButton, DeleteButton, DetailButton, EditButton, ExportButton, PrintButton } from "@/components/ui/Buttons";
import UsersAddForm from "./components/UsersAddForm";
import UserDetail from "./components/UserDetail";
import UsersEditForm from "./components/UserEditForm";
import UserSetQuiz from "./components/UserSetQuiz";
import UserQuizLog from "./components/UserQuizLog";
const { Search } = Input;

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

// const dataSource = [
//   {
//     key: 1,
//     username: "tester20",
//     fullname: "Ray Tsang",
//     password: "123",
//     email: "test1@gapbaee.com",
//     emailSent: 1,
//     birthDate: null,
//     formasi: "Active",
//     session: 'Testing_Upd_SianProf "Testing_Upd_SianProf"',
//     firstLogin: "2023-01-09 09:36",
//     agreeCode: "setuju",
//     agreeTime: "21/12/2018 13:46",
//     baseUrl: null,
//   },
//   {
//     key: 2,
//     username: "tester21",
//     fullname: "Globe Smith",
//     password: "123",
//     email: "test2@gapbaee.com",
//     emailSent: 1,
//     birthDate: null,
//     formasi: "Active",
//     session: "Testing_Upd_SianProf",
//     firstLogin: "2019-10-07 07:24",
//     agreeCode: "setuju",
//     agreeTime: "28/06/2019 07:35",
//     baseUrl: null,
//   },
//   {
//     key: 3,
//     username: "tester23",
//     fullname: "Lilian Sue",
//     password: "tester23",
//     email: "test3@gapbaee.com",
//     emailSent: 1,
//     birthDate: null,
//     formasi: "Active",
//     session: "Testing_Upd_Sian",
//     firstLogin: "2019-05-28 09:00",
//     agreeCode: "setuju",
//     agreeTime: "28/06/2019 07:35",
//     baseUrl: null,
//   },
//   {
//     key: 4,
//     username: "tester24",
//     fullname: "Ethan Go",
//     password: "tester24",
//     email: "test4@gapbaee.com",
//     emailSent: 1,
//     birthDate: null,
//     formasi: "Active",
//     session: "Testing_Upd_Sian",
//     firstLogin: "2023-05-09 09:00",
//     agreeCode: "setuju",
//     agreeTime: "28/06/2019 07:35",
//     baseUrl: null,
//   },
//   {
//     key: 5,
//     username: "test5",
//     fullname: "Samuel Reechs",
//     password: "test5",
//     email: "test5@gapbaee.com",
//     emailSent: 0,
//     birthDate: null,
//     formasi: 'S2 "S2"',
//     session: '"" ( "" )',
//     firstLogin: "27/01/2023 07:44",
//     agreeCode: "setuju",
//     agreeTime: "27/01/2023 07:44",
//     baseUrl: null,
//   },
//   {
//     key: 6,
//     username: "test6",
//     fullname: "Oliver Dunn",
//     password: "test6",
//     email: "test6@gapbaee.com",
//     emailSent: 0,
//     birthDate: null,
//     formasi: 'S2 "S2"',
//     session: 'Test test "test test"',
//     firstLogin: "07/02/2019 07:57",
//     agreeCode: "setuju",
//     agreeTime: "07/02/2019 07:57",
//     baseUrl: null,
//   },
//   {
//     key: 7,
//     username: "yudha1",
//     fullname: "Yudha 1",
//     password: "AB7578",
//     email: "yudha1@gapbaee.com",
//     emailSent: 0,
//     birthDate: null,
//     formasi: 'Es Em Ah "SMA"',
//     session: 'Test test "test test"',
//     firstLogin: "08/05/2019 18:15",
//     agreeCode: "setuju",
//     agreeTime: "08/05/2019 18:15",
//     baseUrl: null,
//   },
//   {
//     key: 8,
//     username: "yudhaselcampuran_ole2018",
//     fullname: "Yudha Seal Campuran",
//     password: "yudha",
//     email: "yudhaselcampuran@gapbaee.com_ole2018",
//     emailSent: 0,
//     birthDate: null,
//     formasi: 'S1 "S1"',
//     session: null,
//     firstLogin: "19/05/2019 17:47",
//     agreeCode: "setuju",
//     agreeTime: "19/05/2019 17:47",
//     baseUrl: null,
//   },
//   {
//     key: 9,
//     username: "yudha_mei_1",
//     fullname: "Yudha Rachmat Hidayat",
//     password: "yudha",
//     email: "yudha_mei_1@gapbaee.com",
//     emailSent: 0,
//     birthDate: null,
//     formasi: 'S1 "S1"',
//     session: null,
//     firstLogin: "19/05/2019 17:47",
//     agreeCode: "setuju",
//     agreeTime: "19/05/2019 17:47",
//     baseUrl: null,
//   },
//   {
//     key: 10,
//     username: "yudha_gtl_kotak",
//     fullname: "Yudha Rachmat Hidayat",
//     password: "yudha",
//     email: "yudha_gtl_kotak@smartexam.id",
//     emailSent: 0,
//     birthDate: null,
//     formasi: 'S1 "S1"',
//     session: null,
//     firstLogin: "19/05/2019 17:47",
//     agreeCode: "setuju",
//     agreeTime: "19/05/2019 17:47",
//     baseUrl: null,
//   },
// ];


const UsersPage = () => {
  const { styles } = useStyle();
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openSetQuiz, setOpenSetQuiz] = useState(false);
  const [openQuizLog, setOpenQuizLog] = useState(false);

  const handleAdd = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    setOpenAdd(false);
  }

  const handleEdit = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  }

  const handleDetail = () => {
    setOpenDetail(true);
  };

  const handleDetailClose = () => {
    setOpenDetail(false);
  }

  const handleSetQuiz = () => {
    setOpenSetQuiz(true);
  };

  const handleSetQuizClose = () => {
    setOpenSetQuiz(false);
  }

  const onSearch = (value) => {
    console.log("Search value:", value);
  };

  const handleQuizLog = () => {
    setOpenQuizLog(true);
  }

  const handleQuizLogClose = () => {
    setOpenQuizLog(false);
  }

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      fixed: "left",
      width: 150,
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
      width: 150,
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Email Sent",
      dataIndex: "emailSent",
      key: "emailSent",
      width: 80,
    },
    {
      title: "Tgl Lahir",
      dataIndex: "birthDate",
      key: "birthDate",
      width: 80,
    },
    {
      title: "Formasi",
      dataIndex: "formasi",
      key: "formasi",
      width: 100,
    },
    {
      title: "Sesi",
      dataIndex: "session",
      key: "session",
      width: 300,
    },
    {
      title: "First Login",
      dataIndex: "firstLogin",
      key: "firstLogin",
      width: 150,
    },
    {
      title: "Agree Code",
      dataIndex: "agreeCode",
      key: "agreeCode",
      width: 80,
    },
    {
      title: "Agree Time",
      dataIndex: "agreeTime",
      key: "agreeTime",
      width: 150,
    },
    {
      title: "Base URL",
      dataIndex: "baseUrl",
      key: "baseUrl",
      width: 80,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 110,
      render: (_, record) => (
        <Row gutter={[8, 8]}>
          <Col>
              <DetailButton onClick={() => handleDetail()} />
          </Col>
          <Col>
              <EditButton onClick={() => handleEdit()} />
          </Col>
          <Col>
              <DeleteButton />
          </Col>
          <Col>
              <CloneButton />
          </Col>
          <Col>
            <Tooltip title="Set Quiz">
              <Button icon={<SettingOutlined />} type="primary" style={{ backgroundColor: "#2F54EB", color: "white" }}  onClick={() => handleSetQuiz()}/>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title="Photo">
              <Button icon={<PictureOutlined />} type="primary" style={{ backgroundColor: "#FA8C16", color: "white" }} />
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title="Quiz Log">
              <Button icon={<FileTextOutlined />} type="primary" style={{ backgroundColor: "#722ED1", color: "white" }} onClick={() => handleQuizLog()}/>
            </Tooltip> 
          </Col>
          <Col>
            <Tooltip title="User Log">
              <Button icon={<UserOutlined />} type="primary" style={{ backgroundColor: "#13C2C2", color: "white" }} />
            </Tooltip>
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }} justify="space-between">
        <Col>
          <Search placeholder="Cari..." allowClear enterButton="Search" size="large" onSearch={onSearch} />
        </Col>
        <Row gutter={[16, 16]}>
          <Col>
            <ExportButton />
          </Col>
          <Col>
            <PrintButton />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <AddButton text="Tambah Grup Quiz" onClick={handleAdd} />
          </Col>
        </Row>
      </Row>

      <UserDetail open={openDetail} onClose={handleDetailClose}/>
      <UsersAddForm open={openAdd} onclose={handleAddClose}/>
      <UsersEditForm open={openEdit} onclose={handleEditClose}/>
      <UserSetQuiz open={openSetQuiz} onclose={handleSetQuizClose}/>
      <UserQuizLog open={openQuizLog} onclose={handleQuizLogClose}/>
      <Table
        className={styles.customTable}
        columns={columns}
        // dataSource={dataSource}
        scroll={{
          x: "max-content",
          y: 55 * 5,
        }}
      />
    </>
  );
};

export default UsersPage;
