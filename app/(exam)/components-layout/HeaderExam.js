"use client";

import {
  Button,
  Layout,
  Col,
  Divider,
  Dropdown,
  Row,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  CaretDownFilled,
  LoginOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { useRouter } from "next/navigation";
const { Text } = Typography;
const { Header } = Layout;

const HeaderExam = ({ title }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(58);
  const [seconds, setSeconds] = useState(49);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  const items = [
    {
      key: "1",
      label: (
        <Text>
          <span style={{ fontWeight: "bold" }}>Username:</span> Jhon Doe
        </Text>
      ),
    },
    {
      key: "2",
      label: (
        <Text>
          <span style={{ fontWeight: "bold" }}>Kode:</span> 12345678
        </Text>
      ),
    },
    {
      key: "3",
      label: (
        <Text>
          <span style={{ fontWeight: "bold" }}>Waktu Ujian:</span> sekian -
          sekian
        </Text>
      ),
    },
    {
      key: "4",
      label: (
        <Button
          marginLeft="0"
          style={{ padding: 0 }}
          type="text"
          icon={<QuestionCircleOutlined size={20} />}
          iconPosition="start"
        >
          FAQ
        </Button>
      ),
    },
    {
      key: "5",
      label: <Divider style={{ margin: "0" }} />,
    },
    {
      key: "6",
      label: (
        <Button
          marginLeft="0"
          onClick={handleLogout}
          style={{ padding: 0, color: "red" }}
          type="text"
          icon={<LoginOutlined size={20} />}
          iconPosition="start"
        >
          Logout
        </Button>
      ),
    },
  ];

  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          height: "max-content",
          padding: "0px",
        }}
      >
        <Row style={{ width: "100%" }}>
          <Row
            style={{
              width: "100%",
              justifyContent: "space-between",
              border: "1px solid #E0E0E0",
              padding: "15px 30px",
            }}
          >
            <Col style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/assets/logo-smartexam.png"
                alt="logo"
                style={{ width: 35 }}
              />
              <Text
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#1B3042",
                }}
              >
                SMARTEXAM
              </Text>
            </Col>
            <Col
              style={{
                // border: "1px solid black",
                padding: "6px 12px",
                borderRadius: "5px",
                // boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
              }}
            >
              <Dropdown
                menu={{
                  items,
                }}
                dropdownRender={(menu) => (
                  <div
                    className="hover"
                    style={{
                      padding: "0",
                      minWidth: "260px",
                      height: "fit-content",
                    }}
                  >
                    {React.cloneElement(menu, {
                      style: {
                        borderRadius: "5px",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
                        padding: "8px 0",
                      },
                    })}
                  </div>
                )}
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  style={{
                    display: "flex",
                    color: "gray",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src="/assets/profile-pict.png"
                    alt="profile picture"
                    style={{ width: 40 }}
                  />
                  <CaretDownFilled />
                </a>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ width: "100%", justifyContent: "space-between" }}>
            <Col xs={24} sm={18} lg={18}>
              <Row
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#1b3042",
                }}
                justify="center"
                align="middle"
              >
                <Col>
                  <Title level={4} style={{ color: "white", margin: 0 }}>
                    {title}
                  </Title>
                </Col>
              </Row>
              <Row
                style={{ width: "100%", height: "65px", padding: "0px 30px" }}
              >
                <Col
                  style={{
                    width: "100%",
                    height: "100%",
                    borderBottom: "1px solid #AAAAAA",
                    display: "flex", // Mengaktifkan flexbox
                    alignItems: "center", // Menjadikan teks di tengah vertikal
                  }}
                >
                  <Title level={4} style={{ color: "black", margin: 0 }}>
                    Sub Judul
                  </Title>
                </Col>
              </Row>
            </Col>
            <Col
              xs={24}
              sm={6}
              lg={6}
              style={{ borderLeft: "1px solid #E0E0E0" }}
            >
              <Row
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#1b3042",
                }}
                justify="center"
                align="middle"
              >
                <Col>
                  <Title level={4} style={{ color: "white", margin: 0 }}>
                    Waktu
                  </Title>
                </Col>
              </Row>
              <Row
                style={{
                  width: "100%",
                  height: "65px",
                  borderBottom: "1px solid #AAAAAA",
                }}
                align="middle"
              >
                <Col
                  span={24}
                  style={{
                    backgroundColor: "white",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* Timer Numbers */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto 1fr auto 1fr",
                      justifyItems: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        gridColumn: "1",
                      }}
                    >
                      {formatNumber(hours)}
                    </span>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        margin: "0 10px",
                      }}
                    >
                      :
                    </span>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        gridColumn: "3",
                      }}
                    >
                      {formatNumber(minutes)}
                    </span>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        margin: "0 10px",
                      }}
                    >
                      :
                    </span>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        gridColumn: "5",
                      }}
                    >
                      {formatNumber(seconds)}
                    </span>
                  </div>

                  {/* Timer Labels */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto 1fr auto 1fr",
                      justifyItems: "center",
                      alignItems: "center",
                      marginTop: "-15px",
                      marginBottom: "20px",
                    }}
                  >
                    <Text
                      style={{
                        color: "#666",
                        gridColumn: "1",
                        fontSize: "12px",
                      }}
                    >
                      Hours
                    </Text>
                    <span style={{ width: "20px" }}></span>
                    <Text
                      style={{
                        color: "#666",
                        gridColumn: "3",
                        fontSize: "12px",
                      }}
                    >
                      Minutes
                    </Text>
                    <span style={{ width: "20px" }}></span>
                    <Text
                      style={{
                        color: "#666",
                        gridColumn: "5",
                        fontSize: "12px",
                      }}
                    >
                      Seconds
                    </Text>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Header>
    </>
  );
};

export default HeaderExam;
