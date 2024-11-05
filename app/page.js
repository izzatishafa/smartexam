"use client";
import React from "react";
import { Flex, Typography, Button, Form, Input, Checkbox } from "antd";

const { Title, Text } = Typography;

export default function Page() {
  const [form] = Form.useForm();

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
          <img
            src="/assets/logo-smartexam.png"
            alt="logo"
            style={{ width: 25 }}
          />
          <Text
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1B3042",
            }}
            strong
          >
            SMARTEXAM
          </Text>
        </Flex>
        <Flex vertical>
          <Flex style={{ paddingLeft: "120px" }} vertical>
            <Title level={1} style={{ color: "#1B3042" }}>
              Welcome ...
            </Title>
            <Title level={4} style={{ color: "#1B3042", marginTop: "-10px" }}>
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
            style={{ width: 500, marginLeft: "120px" }}
          />
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
          <Form
            form={form}
            autoComplete="off"
            layout="vertical"
            labelAlign="left"
            colon={false}
            // onFinish={submitHandler}
          >
            <Form.Item
              name="username"
              label={
                <span
                  style={{
                    fontSize: "20px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Username
                </span>
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
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Masukkan password Anda"
                style={{ padding: "9px" }}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox style={{ color: "white", fontSize: "15px" }}>
                Accept All Term & Condition
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" style={{ color: "#1B3042", fontWeight: "bold", fontSize: "16px",  width: "100%", padding: "20px" }}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  );
}
