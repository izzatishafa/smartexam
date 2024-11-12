"use client";
import React, { useState } from "react";
import "../../app/globals.css";

import {
  Layout,
  Progress,
  Flex,
  Space,
  Typography,
  Row,
  Col,
  Button,
} from "antd";

const { Sider } = Layout;
const { Title } = Typography;

const questions = Array.from({ length: 50 }, (_, index) => `${index + 1}`);

export default function SiderComponent() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      width="25%"
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      style={{
        padding: 0,
        marginLeft: 0,
        color: "white",
        backgroundColor: "#1B3042",
        borderLeft: "1px solid #ccc",
        overflow: "hidden",
      }}
    >
      {!collapsed && (
        <>
          <Flex
            vertical
            style={{
              width: 396,
              marginTop: "58px",
              padding: "20px 40px",
              backgroundColor: "white",
            }}
          >
            <Progress percent={40} size="large" showInfo={false} />
          </Flex>
          <Typography>
            <Title
              level={4}
              style={{
                margin: 0,
                padding: 15,
                textAlign: "center",
                color: "white",
              }}
            >
              List Question
            </Title>
          </Typography>
          <Space
            style={{
              backgroundColor: "white",
              minHeight: "520px",
              minWidth: "395px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ maxWidth: "380px", margin: "15px 0 60px 0" }}>
              {Array.from({ length: Math.ceil(questions.length / 6) }).map(
                (_, rowIndex) => (
                  <Row
                    gutter={[16]}
                    style={{ marginBottom: "16px" }}
                    key={`row-${rowIndex}`}
                  >
                    {questions
                      .slice(rowIndex * 6, rowIndex * 6 + 6)
                      .map((question, colIndex) => (
                        <Col
                          className="gutter-row"
                          span={4}
                          key={`col-${colIndex}`}
                        >
                          <div
                            style={{
                              padding: "12px",
                              backgroundColor: "#f0f0f0",
                              textAlign: "center",
                              borderRadius: "8px",
                            }}
                          >
                            {question}
                          </div>
                        </Col>
                      ))}
                  </Row>
                )
              )}
              <Button
                type="primary"
                style={{
                  borderRadius: "30px",
                  marginLeft: "115px",
                  top: "-3.3rem",
                }}
              >
                Submit Quiz
              </Button>
            </div>
          </Space>
        </>
      )}
    </Sider>
  );
}
