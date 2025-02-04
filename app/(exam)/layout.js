"use client";

import React from "react";
import { Layout, theme } from "antd";
import HeaderExam from "./components-layout/HeaderExam";
import FooterExam from "./components-layout/FooterExam";
import SiderExam from "./components-layout/SiderExam";
import { ExamProvider } from "./contexts/ExamContext";

const { Content, Sider } = Layout;

const ExamLayout = ({ children, hideSidebar = false }) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ExamProvider>
        <HeaderExam />
        <Layout>
          <Layout>
            <Content
              style={{
                padding: "0 10px 20px 10px",
                borderRadius: borderRadiusLG,
                backgroundColor: "white",
              }}
            >
              {children}
            </Content>
            <FooterExam />
          </Layout>
          {!hideSidebar && <SiderExam />}
        </Layout>
      </ExamProvider>
    </Layout>
  );
};

export default ExamLayout;
