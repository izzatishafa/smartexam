// app/(exam)/components-layout/LoadingPage.js
import React from "react";
import { Flex, Spin } from "antd";
import styles from "../styles-layout/styles.module.css";

const LoadingPage = () => {
  // console.log("Styles:", styles);
  return (
    <div className={styles.loadingContainer}>
      <Flex align="center" gap="middle">
        <Spin size="large" />
      </Flex>
      <div className={styles.loadingText}>Mempersiapkan soal ujian...</div>
    </div>
  );
};

export default LoadingPage;
