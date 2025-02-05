"use client";

import React from "react";
import { Layout, theme } from "antd";
import HeaderExam from "./components-layout/HeaderExam";
import FooterExam from "./components-layout/FooterExam";
import SiderExam from "./components-layout/SiderExam";
import { ExamProvider } from "./contexts/ExamContext";
<<<<<<< HEAD
=======
import { usePathname } from "next/navigation";
>>>>>>> 9036de1 (membuat navigasi di tutorial dan questions GTI, membuat halaman tutorial-intro, mengaktifkan fungsi memilih jawaban dan notifikasi, conditional rendering pada header dan footer)

const { Content, Sider } = Layout;

const ExamLayout = ({ children}) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname(); // Dapatkan path URL saat ini
  const hideSidebar = pathname.includes("/exam/gti/subtest1/tutorial");
  const hideFooter = pathname.includes("/exam/gti/subtest1/tutorial");

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
            {!hideFooter && <FooterExam />}
          </Layout>
          {!hideSidebar && <SiderExam />}
        </Layout>
      </ExamProvider>
    </Layout>
  );
};

export default ExamLayout;
