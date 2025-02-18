"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Flex, Typography, Button, Form, Input, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import asyncLocalStorage from "@/app/utils/async-local-storage";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const { Title, Text } = Typography;

export default function Page() {
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSuccess = async (accessToken, userRole, userId) => {
    try {
      await asyncLocalStorage.setItem("access_token", accessToken);
      console.log("navigate to exam page");
      router.push("/");
    } catch (error) {
      console.error("Error storing access token:", error);
      setAlertMessage(["Failed to store access token. Please try again."]);
    }
  };

  // LoginForm.js (Client Component)
  const handleLogin = async (values) => {
    console.log(values);
    const { email, password } = values;
    if (!isChecked) {
      message.error("You must accept the terms and conditions.");
      return;
    }
    if (!email || !password) {
      message.error("Email and password cannot be empty.");
      return;
    }
    try {
      setLoading(true); // Add loading state
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/participant/auth`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { data, status } = response;
      if (status === 200 || status === 201) {
        const { token, user_data } = data;
        await handleSuccess(token, user_data.role, user_data.id);
        console.log("ini adalah token : ", token);
        message.success("Login successful!");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      message.error(errorMessage);
    } finally {
      setLoading(false);
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
            onFinish={handleLogin}
          >
            <Form.Item
              name="email"
              label={
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Email
                </Text>
              }
              rules={[
                { required: true, message: "This field is required" },
                {
                  pattern: /^[^\s]+$/,
                  message: "email cannot contain spaces",
                },
              ]}
            >
              <Input
                placeholder="Masukkan email Anda"
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
            <Form.Item valuePropName="checked">
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
