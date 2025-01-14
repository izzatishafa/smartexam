"use client";

import React, { useState } from "react";
import { DashboardOutlined, QuestionCircleOutlined, FileTextOutlined, ClockCircleOutlined, GroupOutlined, SolutionOutlined, BarChartOutlined, ControlOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Sider } = Layout;
const formatBreadcrumb = (text) => {
  return text
    .split("-") // Pisahkan berdasarkan tanda '-'
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Kapitalisasi kata pertama
    .join(" "); // Gabungkan dengan spasi
};

const breadcrumbNameMap = {
  "/dashboard": "Dashboard",
  "/quiz": "Quiz",
  "/quiz/group": "Quiz Group",
  "/quiz/group-items": "Group Items",
  "/soal": "Soal",
  "/sesi": "Sesi",
  "/formasi": "Formasi",
  "/user": "User Setting",
  "/report": "Report",
  "/system": "System",
};

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label: path ? <Link href={path}>{label}</Link> : label,
    path,
  };
}

const items = [
  getItem("Dashboard", "1", <DashboardOutlined />, null, "/dashboard"),

  getItem("Quiz", "2", <QuestionCircleOutlined />, [
    getItem("Quiz", "sub2-1", null, null, "/dashboard/quiz/quiz"),
    getItem("Quiz Group", "sub2-2", null, null, "/dashboard/quiz/group"),
    getItem("Group Items", "sub2-3", null, null, "/dashboard/quiz/group-items"),
  ]),

  getItem("Soal", "3", <FileTextOutlined />, [
    getItem("GTI", "sub3-1", null, null, "/dashboard/soal/gti"),
    getItem("Multiplechoice", "sub3-2", null, null, "/dashboard/soal/multiplechoice"),
    getItem("Preview", "sub3-3", null, null, "/dashboard/soal/preview"),
    getItem("Generate Paket Soal", "sub3-4", null, null, "/dashboard/soal/generate-paket-soal"),
    getItem("Generate Exam", "sub3-5", null, null, "/dashboard/soal/generate-exam"),
  ]),

  getItem("Sesi", "3", <ClockCircleOutlined />, null, "/dashboard/sesi"),

  getItem("Formasi", "4", <GroupOutlined />, null, "/dashboard/formasi"),

  getItem("User Setting", "5", <SolutionOutlined />, [getItem("Users", "sub5-1", null, null, "/dashboard/user-setting/users"), getItem("Active Session", "sub5-2", null, null, "/dashboard/user-setting/active-session")]),

  getItem("Report", "6", <BarChartOutlined />, [getItem("Generate", "sub6-1", null, null, "/dashboard/report/generate"), getItem("Psychogram", "sub6-2", null, null, "/dashboard/report/psychogram")]),

  getItem("System", "7", <ControlOutlined />, [
    getItem("Custom Reports", "sub7-1", null, null, "/dashboard/system/custom-reports"),
    getItem("Settings", "sub7-2", null, null, "/dashboard/system/settings"),
    getItem("Email Job", "sub7-3", null, null, "/dashboard/system/email-job"),
    getItem("Upload Users", "sub7-4", null, null, "/dashboard/system/upload-users"),
    getItem("Users Quiz Terjadwal", "sub7-5", null, null, "/dashboard/system/users-quiz-terjadwal"),
  ]),
];

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <AntdRegistry>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div
            className="demo-logo-vertical"
            style={{
              height: "32px",
              margin: "16px",
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "6px",
            }}
          />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              {pathSegments.map((segment, index) => {
                const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
                return <Breadcrumb.Item key={url}>{breadcrumbNameMap[url] || formatBreadcrumb(segment)}</Breadcrumb.Item>;
              })}
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </AntdRegistry>
  );
};

export default DashboardLayout;
