"use client";

import React from "react";
import { Card, Input, Switch, Upload, Button, Space, Typography, Breadcrumb, Checkbox, Row, Table } from "antd";
import { createStyles } from "antd-style";
import { SearchOutlined, UploadOutlined, TagOutlined } from "@ant-design/icons";

const { Title } = Typography;

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

export default function UploadUsers() {
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
          <Checkbox value="checkbox" />
        </Row>
      ),
    },
  ];

  const quizData = [
    { code: "gti_pci", label: "Subtest 1", group: false },
    { code: "gti_penalaran", label: "Subtest 2", group: false },
    { code: "gti_jh", label: "Subtest 3", group: false },
    { code: "gti_kka", label: "Subtest 4", group: false },
    { code: "gti_orientasi", label: "Subtest 5", group: false },
    { code: "hexaco", label: "Hexaco", group: false },
    { code: "gti_group", label: "GTI Group", group: true },
    { code: "wpt_taxand", label: "WPT", group: false },
    { code: "english_taxand", label: "Bahasa Inggris", group: false },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quiz Selection Card */}
        <Card title="Pilih Quiz" extra={<Input prefix={<SearchOutlined />} placeholder="Cari quiz..." style={{ width: 200 }} />}>
          <Table
            className={styles.customTable}
            columns={columns}
            dataSource={dataSource}
            scroll={{
              x: "max-content",
              y: 55 * 5,
            }}
          />
        </Card>

        {/* Upload Card */}
        <Card title="Upload Data" style={{ marginTop: 24 }}>
          <Upload.Dragger name="file" multiple={false} action="/api/upload" accept=".csv" style={{ marginBottom: 24 }}>
            <p className="text-4xl mb-4">
              <UploadOutlined />
            </p>
            <p className="text-gray-600">Klik atau drag file CSV ke area ini</p>
            <p className="text-sm text-gray-500">Hanya mendukung file CSV</p>
          </Upload.Dragger>

          <Button type="primary" icon={<UploadOutlined />} size="large" block>
            Upload
          </Button>

          <div className="mt-4 text-sm text-gray-500">
            <Button type="link" size="small">
              Download Sample CSV
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
