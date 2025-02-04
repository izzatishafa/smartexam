"use client";

import React from "react";
import { Col, Layout, Row, theme, Progress } from "antd";
import HeaderExam from "./components-layout/HeaderExam";
import FooterExam from "./components-layout/FooterExam";
import SiderExam from "./components-layout/SiderExam";
import { ExamProvider } from "./contexts/ExamContext";

const { Content, Sider } = Layout;

const ExamLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ExamProvider>
        <HeaderExam />
        <Layout>
          <Layout>
            <Content
              style={{
                padding: 32,
                borderRadius: borderRadiusLG,
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                  border: "1px solid #E0E0E0",
                }}
              >
                {children}
              </div>
            </Content>
            <FooterExam />
          </Layout>
          <SiderExam />
        </Layout>
      </ExamProvider>
    </Layout>
  );
};

export default ExamLayout;
