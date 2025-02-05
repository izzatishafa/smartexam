"use client";

import { Card, Row, Typography, Col, Button } from "antd";
const { Text } = Typography;
import React from "react";
import styles from "../styles/style.module.css";
import { useRouter } from "next/navigation";

const data = {
  name: ["Doni", "Toni", "Roni", "Boni"],
  options: [0, 1, 2, 3],
};

const GtiTutorialIntro2 = () => {
  const router = useRouter();

  const NumberOption = ({ number, name }) => {
    return (
      <Button className={styles["user-button"]}>
        <div className={styles.avatar}>{number}</div>
        <span className={styles.name}>{name}</span>
      </Button>
    );
  };

  return (
    <>
      <Card style={{ margin: "32px 64px 32px" }}>
        <Row style={{ width: "100%", marginBottom: "16px" }}>
          <Text style={{ fontSize: 20 }}>Perhatikan soal berikut !</Text>
        </Row>
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ flexDirection: "column", display: "flex", marginBottom: "8px" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Doni lebih cepat dari Toni</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Toni lebih cepat dari Roni</Text>
          </div>
          <div>
            <Text style={{ fontSize: 20 }}>Siapa yang tercepat?</Text>
          </div>
          <Row gutter={54} style={{ marginTop: "16px" }}>
            {data.options.map((number, index) => (
              <Col key={number}>
                <NumberOption number={number} name={data.name[index]} />
              </Col>
            ))}
          </Row>
        </Row>
      </Card>
      <Row style={{ margin: "0px 64px" }}>
        <div>
          <p style={{ padding: "0", margin: "0", marginBottom: "16px", fontSize: "20px" }}>Tips</p>
          <ul style={{ padding: "0px 24px 0px", margin: "0", fontSize: "20px" }}>
            <li>F - f ✓ (sama)</li>
            <li>G - c ✗ (tidak sama)</li>
            <li>R - r ✓ (sama)</li>
            <li>S - s ✓ (sama)</li>
          </ul>
        </div>
      </Row>
      <Row style={{ width: "100%" }} justify="center">
        <Button size="large" style={{ backgroundColor: "#1b3042", color: "white", width: "400px" }} onClick={() => router.push("/exam/gti/subtest2/tutorial")}>
          Mulai Tutorial
        </Button>
      </Row>
    </>
  );
};

export default GtiTutorialIntro2;
