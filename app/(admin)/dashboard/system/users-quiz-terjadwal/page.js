"use client";

import React, { useState } from "react";
import { Card, Input, Switch, Upload, Button, Space, Typography, Breadcrumb, Checkbox, Row, Table, DatePicker, TimePicker, Col } from "antd";
import { createStyles } from "antd-style";
import { SearchOutlined, UploadOutlined, TagOutlined } from "@ant-design/icons";

const { Title } = Typography;

const dataSource = [
  {
    key: "1",
    code: "gti_pci",
    label: "Subtest 1",
    group: null,
    description: null,
  },
  {
    key: "2",
    code: "gti_penalaran",
    label: "Subtest 2",
    group: null,
    description: null,
  },
  {
    key: "3",
    code: "gti_jh",
    label: "Subtest 3",
    group: null,
    description: null,
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

export default function UsersQuizTerjadwal() {
  const [overwriteStatus, setOverwriteStatus] = useState({});
  const { styles } = useStyle();

  const handleCheckboxChange = (key, checked) => {
    setOverwriteStatus((prevState) => ({
      ...prevState,
      [key]: checked,
    }));
  };

 const columns = [
   {
     title: "Action",
     key: "action",
     fixed: "right",
     width: 350,
     render: (_, record) => (
       <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
         <Checkbox onChange={(e) => handleCheckboxChange(record.key, e.target.checked)}>Overwrite</Checkbox>
         <DatePicker placeholder="Date" style={{ width: "100%" }} disabled={!overwriteStatus[record.key]} />
         <TimePicker placeholder="Time From" style={{ width: "100%" }} disabled={!overwriteStatus[record.key]} />
         <TimePicker placeholder="Time To" style={{ width: "100%" }} disabled={!overwriteStatus[record.key]} />
       </div>
     ),
   },
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
