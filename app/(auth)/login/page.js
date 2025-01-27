"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Flex, Typography, Button, Form, Input, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginHandle } from "./action";

const { Title, Text } = Typography;

export default function Page() {
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleLogin = async (values) => {
    console.log(values, "values");

    try {
      const res = await loginHandle(values);
      console.log(res, "res");
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Flex style={{ height: "100vh", margin: 0, padding: 0 }} horizontal="true">
      <Flex
        style={{
          backgroundImage: 'url("/assets/white-texture-bg.png")',
          width: "50%",
          padding: 20,
        }}
        vertical
      >
        <Flex
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "70px",
          }}
          horizontal="true"
        >
          <img src="/assets/logo-smartexam.png" alt="logo" style={{ width: 40 }} />
          <Text style={{ fontSize: "22px", fontWeight: "bold", color: "#1B3042" }}>SMARTEXAM</Text>
        </Flex>
        <Flex vertical>
          <Flex style={{ paddingLeft: "120px" }} vertical>
            <Title level={1} style={{ color: "#1B3042", fontWeight: "bold" }}>
              Welcome ...
            </Title>
            <Title level={4} style={{ color: "#1B3042", marginTop: "-10px" }}>
              Di platform online test <span style={{ fontWeight: "bold" }}>SMARTEXAM</span> oleh <span style={{ fontWeight: "bold", color: "#E3C72A" }}>PB TAXAND</span>!
            </Title>
          </Flex>
          <img src="/assets/mobile-testing.png" style={{ width: 500, marginLeft: "120px" }} />
        </Flex>
      </Flex>
      <Flex
        style={{
          width: "50%",
          backgroundColor: "#1B3042",
          color: "white",
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        vertical
      >
        <Flex vertical>
          <Title level={1} style={{ color: "white" }}>
            Login
          </Title>
          <Text
            style={{
              fontSize: "20px",
              color: "white",
              marginTop: "-10px",
              marginBottom: "50px",
            }}
          >
            Silakan log in terlebih dahulu untuk melakukan test online
          </Text>
          <Form form={form} onFinish={handleLogin} autoComplete="off" layout="vertical" labelAlign="left" colon={false}>
            <Form.Item
              name="email"
              label={
                <span
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </span>
              }
              rules={[
                { required: true, message: "This field is required" },
                {
                  pattern: /^[^\s]+$/,
                  message: "Username cannot contain spaces",
                },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
              required={false}
            >
              <Input
                placeholder="Masukkan username Anda"
                style={{ padding: "9px" }}
                prefix={
                  <UserOutlined
                    style={{
                      color: "#003366",
                      paddingRight: "10px",
                      paddingLeft: "5px",
                    }}
                  />
                }
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={
                <span
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Password
                </span>
              }
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
              required={false}
            >
              <Input.Password
                placeholder="Masukkan password Anda"
                style={{ padding: "9px" }}
                prefix={
                  <LockOutlined
                    style={{
                      color: "#003366",
                      paddingRight: "10px",
                      paddingLeft: "5px",
                    }}
                  />
                }
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox onChange={handleCheckboxChange} style={{ color: "white", fontSize: "15px" }}>
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
                  padding: "20px",
                }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  );
}
