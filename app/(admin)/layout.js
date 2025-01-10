"use client";

import React, { useState } from "react";
import { DashboardOutlined, QuestionCircleOutlined, FileTextOutlined, ClockCircleOutlined, GroupOutlined, SolutionOutlined, BarChartOutlined, ControlOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const breadcrumbNameMap = {
  "/dashboard": "Dashboard",
  "/quiz": "Quiz",
  "/quiz/group": "Quiz Group",
  "/soal": "Soal",
  "/sesi": "Sesi",
  "/formasi": "Formasi",
  "/user": "User Setting",
  "/report": "Report",
  "/system": "System",
};

const items = [
  getItem("Dashboard", "1", <DashboardOutlined />),
  getItem("Quiz", "sub1", <QuestionCircleOutlined />, [getItem("Quiz", "2"), getItem("Quiz Group", "3"), getItem("Group Items", "4")]),
  getItem("Soal", "sub2", <FileTextOutlined />, [getItem("GTI", "5"), getItem("Multiplechoice", "6"), getItem("Preview", "7"), getItem("Generate Paket Soal", "8"), getItem("Generate Exam", "9")]),
  getItem("Sesi", "10", <ClockCircleOutlined />),
  getItem("Formasi", "11", <GroupOutlined />),
  getItem("User Setting", "sub3", <SolutionOutlined />, [getItem("Users", "12"), getItem("Active Session", "13")]),
  getItem("Report", "sub4", <BarChartOutlined />, [getItem("Generate", "14"), getItem("Psychogram", "15")]),
  getItem("System", "sub5", <ControlOutlined />, [getItem("Custom Reports", "16"), getItem("Settings", "17"), getItem("Email Job", "18"), getItem("Upload Users", "19"), getItem("Users Quiz Terjadwal", "20")]),
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
                return <Breadcrumb.Item key={url}>{breadcrumbNameMap[url] || segment}</Breadcrumb.Item>;
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
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </AntdRegistry>
  );
};

export default DashboardLayout;
