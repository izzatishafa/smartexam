"use client";

import React from "react";
import { Layout, theme } from "antd";
import HeaderExam from "./components-layout/HeaderExam";
import FooterExam from "./components-layout/FooterExam";
import SiderExam from "./components-layout/SiderExam";
import { ExamProvider } from "./contexts/ExamContext";
import { usePathname } from "next/navigation";

const { Content } = Layout;

const ExamLayout = ({ children}) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname(); // Dapatkan path URL saat ini
  // const hideSidebar = pathname.includes("/exam/gti/subtest1/tutorial");
  // const hideFooter = pathname.includes("/exam/gti/subtest1/tutorial");

  const hideSidebar = () => {
    return pathname.includes("/tutorial") || pathname.includes("/exam/end");
  };


  const hideFooter = () => {
    return pathname.includes("/tutorial") || pathname.includes("/exam/end");
  }

  const hideHeader = () => {
    return pathname.includes("/exam/end");
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ExamProvider>
        {!hideHeader() && <HeaderExam />}
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
            {!hideFooter() && <FooterExam />}
          </Layout>
          {!hideSidebar() && <SiderExam />}
        </Layout>
      </ExamProvider>
    </Layout>
  );
};

export default ExamLayout;
