"use client";

import React from "react";
import { Card, Row, Col, Badge, Progress, Typography, Button } from "antd";
import styles from "./dashboard.module.css";

const { Title, Text } = Typography;

const Dashboard = () => {
  const sessionData = [
    {
      status: "Inactive",
      name: "Test_Sekretaris_2Jan",
      code: "Test_Sekretaris_2Jan",
      duration: "153 Hari (02 Januari 2025 - 03 Juni 2025)",
      progress: 7,
      participants: 2,
    },
    {
      status: "Inactive",
      name: "Testing_Upd_9Jan",
      code: "Testing_Upd_9Jan",
      duration: "22 Hari (09 Januari 2025 - 30 Januari 2025)",
      progress: 20,
      participants: 23,
    },
    {
      status: "Inactive",
      name: "Prensentasi Taxand",
      code: "presentasi_taxand",
      duration: "115 Hari (03 Oktober 2024 - 25 Januari 2025)",
      progress: 90,
      participants: 9,
    },
    {
      status: "Inactive",
      name: "test9jan2025",
      code: "test9jan2025",
      duration: "1 Hari (14 Januari 2025 - 14 Januari 2025)",
      progress: 15,
      participants: 6,
    },
    {
      status: "Active",
      name: "test3jan2025",
      code: "test3jan2025",
      duration: "1 Hari (03 Januari 2025 - 03 Januari 2025)",
      progress: 100,
      participants: 52,
    },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
      </div>
      <Row gutter={[16, 16]} className={styles.statsRow}>
        {[
          { label: "USERS", value: "796", color: "#4caf50" },
          { label: "FORMASI", value: "161", color: "#3f51b5" },
          { label: "SESI", value: "73", color: "#ff9800" },
          { label: "SOAL GTI", value: "972", color: "#e91e63" },
          { label: "MULTIPLE", value: "2254", color: "#9c27b0" },
          { label: "QUIZ", value: "33", color: "#00bcd4" },
        ].map((stat, index) => (
          <Col span={4} key={index}>
            <Card className={styles.statCard} style={{ borderColor: stat.color }}>
              <Text className={styles.statLabel}>{stat.label}</Text>
              <Text className={styles.statValue}>{stat.value}</Text>
            </Card>
          </Col>
        ))}
      </Row>
      <div className={styles.sessionContainer}>
        <Title level={4}>Data Sesi</Title>
        {sessionData.map((session, index) => (
          <Card
            key={index}
            className={styles.sessionCard}
            style={{
              borderLeft: `5px solid ${session.status === "Active" ? "#4caf50" : "#f44336"}`,
              marginBottom:"15px"
            }}
          >
            <Row align="middle" justify="space-between">
              <Col>
                <Badge status={session.status === "Active" ? "success" : "error"} text={session.status} />
                <Title level={5} className={styles.sessionTitle}>
                  {session.name}
                </Title>
                <Text code>{`code : ${session.code}`}</Text>
                <br />
                <Text>{session.duration}</Text>
              </Col>
              <Col>
                <Progress percent={session.progress} strokeColor={session.status === "Active" ? "#4caf50" : "#ff9800"} />
              </Col>
              <Col>
                <Text className={styles.participants}>{`${session.participants} Peserta`}</Text>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
