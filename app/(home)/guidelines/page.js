"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Typography, Col, Row, Card, Button, Checkbox, Space } from "antd";
const { Title, Text } = Typography;

const Guidelines = () => {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const handleCheckboxChange = (e, item) => {
    setCheckedItems({
      ...checkedItems,
      [item]: e.target.checked,
    });
  };

  const handleSelectAll = () => {
    const allChecked = Object.values(checkedItems).every(Boolean);
    const newCheckedState = !allChecked;

    setCheckedItems({
      item1: newCheckedState,
      item2: newCheckedState,
      item3: newCheckedState,
      item4: newCheckedState,
    });
  };

  const handleStart = () => {
    router.push("./exam");
  }
  return (
    <>
      <Typography style={{ textAlign: "center" }}>
        <Title level={1} style={{ color: "#1B3042" }}>
          Selamat Datang
        </Title>
        <Text
          style={{
            marginTop: "-20px",
            color: "#1B3042",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Di platform tes online SMARTEXAM oleh PB Taxand!
        </Text>
      </Typography>
      <Row
        style={{
          alignItems: "start",
          justifyContent: "center",
          padding: 80,
          gap: "20px",
        }}
      >
        <Col span={11}>
          <Card
            title="Petunjuk & Penggunaan"
            headStyle={{ backgroundColor: "#1B3042", color: "white" }}
          >
            <ul
              style={{
                color: "#000",
                listStyleType: "disc",
                paddingLeft: "20px",
                fontSize: "15px",
              }}
            >
              <li style={{ color: "#1B3042" }}>
                <p>
                  Pengerjaan test online menggunakan laptop atau tablet. Tidak
                  dapat menggunakan Handphone/Smartphone.
                </p>
              </li>
              <li style={{ color: "#1B3042" }}>
                <p>
                  Web browser yang dapat digunakan adalah Google Chrome dan
                  Mozila Firefox.
                </p>
              </li>
              <li style={{ color: "#1B3042" }}>
                <p>
                  Anda hanya bisa melakukan tes sesuai dengan jadwal yang telah
                  ditentukan
                </p>
              </li>
              <li style={{ color: "#1B3042" }}>
                <p>
                  Pastikan login dengan username dan password yang telah
                  terkirim ke email Anda.
                </p>
              </li>
              <li style={{ color: "#1B3042" }}>
                <p>
                  Tidak diperbolehkan melakukan perubahan/perpindahan ke browser
                  lain selama test berlangsung.
                </p>
              </li>
              <li style={{ color: "#1B3042" }}>
                <p>
                  Pastikan jaringan internet stabil dan kondisi lingkungan
                  kondusif selama tes berlangsung
                </p>
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={11}>
          <Card
            title="Pernyataan"
            headStyle={{ backgroundColor: "#E3C72A", color: "white" }}
          >
            <Checkbox
              onChange={(e) => handleCheckboxChange(e, "item1")}
              checked={checkedItems.item1}
              style={{ color: "#1B3042" }}
            >
              <p>
                Mengerjakan tes online secara mandiri, tanpa diwakili/ dibantu
                orang lain
              </p>
            </Checkbox>
            <Checkbox
              onChange={(e) => handleCheckboxChange(e, "item2")}
              checked={checkedItems.item2}
              style={{ color: "#1B3042" }}
            >
              <p>
                Mengikuti dan menyetujui semua petunjuk dan ketentuan yang ada
              </p>
            </Checkbox>
            <Checkbox
              onChange={(e) => handleCheckboxChange(e, "item3")}
              checked={checkedItems.item3}
              style={{ color: "#1B3042" }}
            >
              <p>
                Tidak melakukan pelanggaran/kecurangan selama tes berlangsung
              </p>
            </Checkbox>
            <Checkbox
              onChange={(e) => handleCheckboxChange(e, "item4")}
              checked={checkedItems.item4}
              style={{ color: "#1B3042" }}
            >
              <p>
                Setiap bentuk tindak kecurangan selama tes online ini memiliki
                konsekuensi sanksi seperti gagal tes dan masuk dalam daftar
                hitam perusahaan
              </p>
            </Checkbox>
            <Button
              onClick={handleSelectAll}
              style={{
                fontSize: "16px",
                padding: "16px",
              }}
            >
              Accept All
            </Button>
          </Card>
          <Space style={{width: "100%", justifyContent: "center"}}>
          <Button
            htmlType="submit"
            type="primary"
            onClick={handleStart}
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              width: "500px",
              padding: "17px",
              marginTop: "17px",
            }}
          >
            Start Test
          </Button>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Guidelines;
