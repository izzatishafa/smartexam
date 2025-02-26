"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Divider,
  Dropdown,
  Flex,
  Row,
  Space,
  Typography,
  theme,
} from "antd";
import HeaderComponent from "@/components/ui/Header";
import QuizBankCard from "@/components/ui/card/QuizBankCard";
import useExamStore from "./(exam)/stores/useExamStore";
import { useRouter } from "next/navigation";
import {
  AppstoreFilled,
  CaretDownFilled,
  CaretDownOutlined,
  CheckOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import useToken from "antd/es/theme/useToken";

const { Title, Text } = Typography;

const QuizBankList = [
  {
    title: "WPT",
    route: "/exam/multiplechoice/wpt_taxand",
    type: "multipleChoice",
    code: "wpt_taxand",
    isDone: false,
  },
  {
    title: "GTI Group",
    route: "/exam/gti/subtest1/questions",
    type: "gti",
    code: "gti_pci",
  },
  {
    title: "DISC",
    route: "/exam/disc",
    type: "disc",
    code: "disc_test",
  },
  {
    title: "Accounting Junior",
    route: "/exam/multiplechoice/accounting_junior",
    type: "multipleChoice",
    code: "accounting_staf_level_junior",
  },
  {
    title: "Accounting Senior",
    route: "/exam/multiplechoice/accounting_senior",
    type: "multipleChoice",
    code: "accounting_staf_level_senior",
  },
  {
    title: "English University",
    route: "/exam/multiplechoice/english",
    type: "multiplechoice",
    code: "english",
  },
  // {
  //   title: "IST FA (Finden von Analogien)",
  //   route: "/exam/ist/ist_fa",
  //   type: "ist",
  //   code: "ist_fa",
  // },
  // {
  //   title: "IST WU (Wortverständnis)",
  //   route: "/exam/ist/ist_wu",
  //   type: "ist",
  //   code: "ist_wu",
  // },
  // {
  //   title: "IST ZR (Zahlenreihen)",
  //   route: "/exam/ist/ist_zr",
  //   type: "ist",
  //   code: "ist_zr",
  // },
  // {
  //   title: "Work Personality Test (P1)",
  //   route: "/exam/personal/work_personality_p1",
  //   type: "personal",
  //   code: "work_personality_p1",
  // },
  // {
  //   title: "CTI",
  //   route: "/exam/personal/cti",
  //   type: "personal",
  //   code: "cti",
  // },
  // {
  //   title: "D3AD",
  //   route: "/exam/personal/d3ad",
  //   type: "personal",
  //   code: "d3ad",
  // },
  // {
  //   title: "Social Description (SocDes)",
  //   route: "/exam/personal/socdes",
  //   type: "personal",
  //   code: "socdes",
  // },
  // {
  //   title: "Table Test",
  //   route: "/exam/table_test",
  //   type: "tableTest",
  //   code: "table_test",
  // },
  {
    title: "Hexaco",
    route: "/exam/personal/hexaco",
    type: "personal",
    code: "hexaco",
    isDone: true,
  },
  // {
  //   title: "Essay",
  //   route: "/exam/essay",
  //   type: "essay",
  // },
];

const HomePage = () => {
  const router = useRouter();
  console.log("jumlah soal ===> ", QuizBankList.length);
  const initializeExam = useExamStore((state) => state.initializeExam);
  const initializeExamAPI = useExamStore((state) => state.initializeExamAPI);

  const handleQuizSelect = async (route, type, code) => {
    console.log("Selected Quiz:", { route, type, code });
    if (code === "hexaco") {
      await initializeExamAPI(type, code);
    } else {
      await initializeExam(type, code);
    }
    router.push(route);
  };

  const [mode, setMode] = useState("list");

  const items = [
    {
      key: "view_as",
      label: "View as",
    },
    {
      type: "divider",
    },
    {
      key: "list",
      label: (
        <Button
          onClick={() => setMode("list")}
          style={{
            border: "none",
            padding: "0",
            backgroundColor: "transparent",
          }}
        >
          <UnorderedListOutlined style={{ fontSize: 24 }} /> List
          {mode === "list" && (
            <CheckOutlined style={{ color: "black", marginLeft: "2rem" }} />
          )}
        </Button>
      ),
    },
    {
      key: "grid",
      label: (
        <Button
          onClick={() => setMode("grid")}
          style={{
            border: "none",
            padding: "0",
            backgroundColor: "transparent",
          }}
        >
          <AppstoreFilled style={{ fontSize: 24 }} /> Grid
          {mode === "grid" && (
            <CheckOutlined style={{ color: "black", marginLeft: "2rem" }} />
          )}
        </Button>
      ),
    },
  ];

  const [userData, setUserData] = useState(null);
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = localStorage.getItem("user_data");
        const quiz = localStorage.getItem("quiz_data");

        if (user) {
          setUserData(JSON.parse(user));
        }

        if (quiz) {
          setQuizData(JSON.parse(quiz));
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };

    getUserData();
  }, []);

  return (
    <div style={{ maxHeight: "100vh", boxSizing: "content-box" }}>
      <HeaderComponent />
      <Flex
        style={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "content-box",
        }}
      >
        <Row
          style={{
            width: "100%",
            maxWidth: "1360px", // Prevents too wide on large screens
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6rem",
            marginBottom: "2rem",
            border: "1px solid white",
          }}
        >
          <Title level={2} style={{ margin: 0 }}>
            Selamat Datang di Online Test SMARTEXAM
          </Title>
          {/* Toggle Button */}
          <div style={{ marginLeft: "1rem" }}>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button
                type="default"
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  padding: "0.5rem 1rem",
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Space>
                  {mode === "list" ? (
                    <UnorderedListOutlined style={{ fontSize: 24 }} />
                  ) : (
                    <AppstoreFilled style={{ fontSize: 24 }} />
                  )}
                  <CaretDownOutlined style={{ marginLeft: "1rem" }} />
                </Space>
              </Button>
            </Dropdown>
          </div>

          {/* Toggle Button */}
        </Row>
        <Row
          gutter={[24, 16]} // Horizontal (24px) and Vertical (16px) spacing
          style={{
            width: "100%",
            maxWidth: "1360px", // Prevents too wide on large screens
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap", // Allows wrapping on smaller screens
            border: "1px solid white",
          }}
        >
          {/* Left Panel (User Info) */}
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={6}
            xl={6}
            style={{
              height: "330px",
              backgroundColor: "white",
              justifyContent: "space-between",
              alignItems: "end",
              padding: "1rem",
              border: "1px solid #1B3042",
              borderRadius: "10px",
            }}
          >
            <Col
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Perubahan utama untuk sebaran vertikal
                alignItems: "stretch",
                padding: "2rem 0",
              }}
            >
              <div>
                <Title
                  level={5}
                  style={{
                    marginTop: "0.25rem",
                    marginBottom: 0,
                    color: "gray",
                  }}
                >
                  Nama Peserta :
                </Title>
                <Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {userData?.username || "Gwkerenbgt15"}
                </Text>
              </div>

              <div>
                <Title
                  level={5}
                  style={{
                    marginTop: "0.25rem",
                    marginBottom: 0,
                    color: "gray",
                  }}
                >
                  Kode Peserta :
                </Title>
                <Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  0123412
                </Text>
              </div>

              <div>
                <Title
                  level={5}
                  style={{ marginTop: "0.25rem", color: "gray" }}
                >
                  Waktu Ujian
                </Title>
                <Text style={{ fontWeight: "bold" }}>
                  03/02/2025, 07.00 - 09.00 WIB
                </Text>
              </div>
            </Col>
          </Col>

          {/* Right Panel (Quiz List) */}
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={17}
            xl={17}
            style={{
              backgroundColor: "transparent",
              alignItems: "center",
              height: "fit-content",
              border: "1px solid white",
              maxHeight: "75vh",
              maxWidth: "100%",
              overflowY: "auto",
              gap: "2.5rem 2rem",
              padding: "1rem",
              display: mode === "grid" ? "grid" : "flex",
              gridTemplateColumns: mode === "grid" ? "repeat(3, 1fr)" : "none",
              flexDirection: mode === "list" ? "column" : "row",
              flexWrap: mode === "grid" ? "wrap" : "nowrap",
            }}
          >
            {QuizBankList.map((item, key) => (
              <QuizBankCard
                isDone={item.isDone}
                isPackage={false}
                isGrid={mode === "grid"}
                key={key}
                title={item.title}
                route={item.route}
                onClick={() =>
                  handleQuizSelect(item.route, item.type, item.code)
                }
              />
            ))}
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default HomePage;
