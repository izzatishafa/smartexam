"use client";
import React, { useState } from "react";
import { Typography, Card, Space, Table, Row, Button } from "antd";
import MultipleChoice from "@/app/(exam)/components/MultipleChoice";
import ModalTable from "./ModalTable";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const { Title, Text } = Typography;

export default function TableTestCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getCurrentQuestion, currentQuestion } = useExamStore();

  const currentQuestionData = getCurrentQuestion();

  if (!currentQuestionData) return <div>Loading...</div>;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCopy = (e) => {
    e.preventDefault();
  };

  const dataSource = [
    {
      key: "1",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget neque ac felis cursus congue volutpat a lorem. Cras hendrerit posuere mauris. Vivamus vel diam maximus, pharetra nibh eget, convallis ligula. Vestibulum nec felis consectetur, sagittis purus sit amet, dapibus felis. Vestibulum vehicula vestibulum lectus in tincidunt. Nunc finibus sodales pulvinar. Curabitur bibendum urna urna, quis tincidunt lorem accumsan quis.",
      content2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget neque ac felis cursus congue volutpat a lorem. Cras hendrerit posuere mauris. Vivamus vel diam maximus, pharetra nibh eget, convallis ligula. Vestibulum nec felis consectetur, sagittis purus sit amet, dapibus felis. Vestibulum vehicula vestibulum lectus in tincidunt. Nunc finibus sodales pulvinar. Curabitur bibendum urna urna, quis tincidunt lorem accumsan quis.",
    },
  ];

  const options = [
    "Ini adalah contoh pilihan ganda dari quiz",
    "Ini adalah contoh pilihan ganda dari quiz",
  ];

  const columns = [
    {
      title: (
        <p style={{ fontSize: "16px", color: "white", textAlign: "center" }}>
          Header 1
        </p>
      ),
      dataIndex: "content1",
      key: "content1",
      onHeaderCell: () => ({
        style: { backgroundColor: "#8D97A0", border: "none" },
      }),
    },
    {
      title: (
        <p style={{ fontSize: "16px", color: "white", textAlign: "center" }}>
          Header 2
        </p>
      ),
      dataIndex: "content2",
      key: "content2",
      onHeaderCell: () => ({
        style: { backgroundColor: "#8D97A0", border: "none" },
      }),
    },
  ];

  return (
    <>
      <Row style={{ width: "100%", paddingRight: "24px" }} justify="end">
        <Button
          variant="outlined"
          size="middle"
          color="green"
          onClick={showModal}
          style={{ margin: "16px 0px" }}
        >
          Panduan
        </Button>
      </Row>
      <Card
        style={{
          height: "300px",
          overflowY: "auto",
          width: "100%",
          userSelect: "none",
          marginBottom: "70px",
          padding: "0px 0px 10px 10px",
        }}
        onCopy={handleCopy}
      >
        <Title
          level={5}
          style={{
            margin: 0,
            fontWeight: "normal",
            padding: "0px 0px 15px 5px",
          }}
        >
          Perhatikan data pada tabel berikut untuk menjawab soal nomor 5-10 !
        </Title>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered={true}
          pagination={false}
          rowHoverable={false}
          style={{
            minWidth: "550px",
            maxWidth: "1200px",
            marginBottom: "20px",
            paddingRight: "50px",
          }}
        />
        <Space style={{ paddingLeft: "0px" }} direction="vertical">
          <Text style={{ margin: 0, fontSize: "17px" }}>
            Dari data tabel tersebut manakah yang blablabla ?
          </Text>
          <MultipleChoice
            options={options}
            questionId={currentQuestionData.id}
          />
        </Space>
        <ModalTable open={isModalOpen} onCancle={() => setIsModalOpen(false)} />
      </Card>
    </>
  );
}
