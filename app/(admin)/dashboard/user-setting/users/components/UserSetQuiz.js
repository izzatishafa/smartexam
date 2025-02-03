"use client";

import { Button, Checkbox, Drawer, Radio, Row, Space, Table } from "antd";
import React from "react";
import { createStyles } from "antd-style";

const dataSource = [
  {
    key: "1",
    code: "hexaco",
    label: "Hexaco",
    group: null,
    description: null,
    jadwal: null,
  },
  {
    key: "2",
    code: "gti_group",
    label: "GTI Group",
    group: "Ya",
    description: null,
    jadwal: null,
  },
  {
    key: "3",
    code: "wpt_taxand",
    label: "WPT",
    group: null,
    description: null,
    jadwal: null,
  },
  {
    key: "4",
    code: "accounting_staf_level_senior",
    label: "Accounting Staf Senior",
    group: null,
    description: null,
    jadwal: null,
  },
  {
    key: "5",
    code: "accounting_staf_level_junior",
    label: "Accounting Staf Junior",
    group: null,
    description: null,
    jadwal: null,
  },
  {
    key: "6",
    code: "disc1",
    label: "DISC",
    group: null,
    description: null,
    jadwal: null,
  },
  {
    key: "7",
    code: "english_university",
    label: "Bahasa Inggris University",
    group: "Ya",
    description: null,
    jadwal: null,
  },
  {
    key: "8",
    code: "Test26Jan2024",
    label: "Test 26 Jan 2024",
    group: "Ya",
    description: null,
    jadwal: null,
  },
  {
    key: "9",
    code: "div_junior_professional",
    label: "Tes Junior Professional",
    group: "Ya",
    description: null,
    jadwal: null,
  },
  {
    key: "10",
    code: "div_senior_professional",
    label: "Tes Senior Professional",
    group: "Ya",
    description: null,
    jadwal: null,
  },
  {
    key: "11",
    code: "div_spv_professional",
    label: "Tes Supervisor Professional",
    group: "Ya",
    description: null,
    jadwal: null,
  },
  {
    key: "12",
    code: "div_manager_prof",
    label: "Tes Manager Professional",
    group: "Ya",
    description: null,
    jadwal: null,
  },
  {
    key: "13",
    code: "div_junior_adm",
    label: "Tes Junior Admin",
    group: "Ya",
    description: null,
    jadwal: null,
  },
];

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
const UserSetQuiz = ({ open, onclose }) => {
  const { styles } = useStyle();

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      fixed: "left",
      width: 150,
    },
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
      width: 150,
    },
    {
      title: "Group?",
      dataIndex: "group",
      key: "group",
      width: 150,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 200,
    },
    {
      title: "Jadwal",
      dataIndex: "jadwal",
      key: "jadwal",
      width: 100,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 110,
      render: (_, record) => (
        <Row>
          <Checkbox value="checkbox"/>
        </Row>
      ),
    },
  ];
  return (
    <>
      <Drawer
        title="Set Quiz"
        open={open}
        onClose={onclose}
        width={1080}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onclose}>Cancel</Button>
            <Button type="primary">Save</Button>
          </Space>
        }
      >
        <Table
          className={styles.customTable}
          columns={columns}
          dataSource={dataSource}
          scroll={{
            x: "max-content",
            y: 55 * 8,
          }}
        />
      </Drawer>
    </>
  );
};

export default UserSetQuiz;
