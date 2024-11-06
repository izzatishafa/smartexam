"use client";
import React from "react";
import {
  Layout,
  Divider,
  Flex,
  Typography,
  Space,
  Dropdown,
  Button,
  theme,
} from "antd";
import "../../app/globals.css";

const { Header } = Layout;
const { Text } = Typography;

const items = [
  {
    key: "1",
    label: "Username: Jhon Doe",
  },
  {
    key: "2",
    label: "Kode: 12345678",
  },
  {
    key: "3",
    label: "Waktu Ujian: sekian - sekian",
  },
];

export default function HeaderComponent() {
  const { useToken } = theme;
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle = {
    boxShadow: "none",
  };
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        border: 1,
        borderBottom: "black",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid lightgray",
        height: 80,
      }}
    >
      <Space direction="row" style={{ marginTop: "20px" }}>
        <Flex
          style={{
            margin: 0,
            padding: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
          vertical
        >
          <Flex
            style={{
              alignItems: "center",
              gap: "10px",
            }}
            horizontal="true"
          >
            <img
              src="/assets/logo-smartexam.png"
              alt="logo"
              style={{ width: 35 }}
            />
            <Text
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                fontWeight: "bold",
                color: "#1B3042",
              }}
            >
              SMARTEXAM
            </Text>
          </Flex>
        </Flex>
        <Flex horizontal="true" style={{ marginLeft: "1210px" }}>
          <Dropdown
            menu={{
              items,
            }}
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu, {
                  style: menuStyle,
                })}
                <Divider
                  style={{
                    margin: 0,
                  }}
                />
                <Space
                  style={{
                    padding: 8,
                  }}
                >
                  <Button danger>Log Out</Button>
                </Space>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()} style={{ color: "gray" }}>
              <img
                src="/assets/profile-pict.png"
                alt="profile picture"
                style={{ width: 40 }}
              />
            </a>
          </Dropdown>
        </Flex>
      </Space>
    </Header>
  );
}
