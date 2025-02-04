"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Flex, Typography, Button, Form, Input, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Page() {
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    const username = form.getFieldValue("username");
    const password = form.getFieldValue("password");

    if (!isChecked) {
      message.error("You must accept the terms and conditions.");
      return;
    }

    if (!username || !password) {
      message.error("Username and password cannot be empty.");
      return;
    }

    try {
      const response = await apiService.post("/api/auth/login", {
        username,
        password,
      });
      message.success("Logged in successfully!");
      router.push("/guidelines");
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Login failed!";
      message.error(errorMsg);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Flex
      className="login-page"
      style={{
        height: "100vh",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {/* Bagian Kiri - Intro */}
      <Flex
        className="left-panel"
        vertical
        style={{
          flex: 1,
          width: "50%",
          padding: "20px",
          backgroundImage: 'url("/assets/white-texture-bg.png")',
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Flex
          style={{
            //
            flexDirection: "row",
            alignItems: "center",
          }}
          horizontal
        >
          <img
            src="/assets/logo-smartexam.png"
            alt="logo"
            style={{ width: 40 }}
          />
          <Text
            style={{
              marginLeft: "16px",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1B3042",
            }}
          >
            SMARTEXAM
          </Text>
        </Flex>
        <Flex
          className="panel-content"
          style={{
            border: "1px solid #1B3042",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <Flex style={{ flexDirection: "column", width: "100%" }} vertical>
            <Title
              className="title"
              level={1}
              style={{
                marginTop: 0,
                color: "#1B3042",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Welcome ...
            </Title>
            <Title
              level={4}
              style={{
                color: "#1B3042",
                marginTop: "0",
                textAlign: "left",
              }}
            >
              Di platform online test{" "}
              <span style={{ fontWeight: "bold" }}>SMARTEXAM</span> oleh{" "}
              <span style={{ fontWeight: "bold", color: "#E3C72A" }}>
                PB TAXAND
              </span>
              !
            </Title>
          </Flex>
          <img
            src="/assets/mobile-testing.png"
            style={{
              width: "100%",
              maxWidth: "400px",
              marginTop: "20px",
              alignSelf: "center",
            }}
            alt="Mobile Testing"
          />
        </Flex>
        <div />
      </Flex>

      {/* Bagian Kanan - Login */}
      <Flex
        className="right-panel"
        style={{
          flex: 1,
          width: "50%",
          padding: "80px",
          height: "100%",
          backgroundColor: "#1b3042",
          justifyContent: "center",
          alignItems: "center",
        }}
        vertical
      >
        <Flex
          vertical
          style={{
            width: "100%",
            maxWidth: "430px",
            // border: "1px solid white",
          }}
        >
          <Title level={1} style={{ color: "white" }}>
            Login
          </Title>
          <Text
            style={{
              fontSize: "16px",
              color: "white",
              marginBottom: "30px",
            }}
          >
            Silakan log in terlebih dahulu untuk melakukan test online
          </Text>
          <Form
            form={form}
            autoComplete="off"
            layout="vertical"
            labelAlign="left"
            colon={false}
          >
            <Form.Item
              name="username"
              label={
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Username
                </Text>
              }
              rules={[
                { required: true, message: "This field is required" },
                {
                  pattern: /^[^\s]+$/,
                  message: "Username cannot contain spaces",
                },
              ]}
            >
              <Input
                placeholder="Masukkan username Anda"
                style={{ padding: "9px" }}
                prefix={
                  <UserOutlined
                    style={{ color: "#003366", paddingRight: "10px" }}
                  />
                }
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Password
                </Text>
              }
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            >
              <Input.Password
                placeholder="Masukkan password Anda"
                style={{ padding: "9px" }}
                prefix={
                  <LockOutlined
                    style={{ color: "#003366", paddingRight: "10px" }}
                  />
                }
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox
                onChange={handleCheckboxChange}
                style={{ color: "white", fontSize: "14px" }}
              >
                Accept All Terms & Conditions
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                onClick={handleLogin}
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  width: "100%",
                  padding: "15px",
                }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Flex>

        {/* CSS Responsif */}
        <style jsx>{`
          .login-page {
            height: 100vh;
            width: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: stretch;
          }
          .left-panel {
            width: 50%;
            padding: 20px;
          }
          .right-panel {
            width: 50%;
            color: white;
            padding: 20px;
            justify-content: center;
            align-items: center;
          }
          @media (max-width: 768px) {
            .login-page {
              flex-direction: column;
            }
            .left-panel,
            .right-panel {
              border: 2px solid red;
              width: 100%;
            }
            .left-panel {
              text-align: center;
              padding: 10px;
              .panel-content {
                padding: 10px;
              }
              }
            }

            .right-panel {
              padding: 30px;
            }
          }
        `}</style>
      </Flex>
    </Flex>
  );
}
