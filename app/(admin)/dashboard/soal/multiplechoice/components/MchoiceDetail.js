"use client";
import { Button, Col, Descriptions, Drawer, Form, Space, Switch } from "antd";
import React, { useMemo } from "react";

const MchoiceDetail = ({ open, onClose, data }) => {

  const stripHtmlTags = (html) => {
    if (!html) return "";
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };


  const items = useMemo(() => {
    if (!data) return [];

    return [
      {
        key: "1",
        label: "Jenis soal",
        span: 3,
        children: data.jenisSoal || "-",
      },
      {
        key: "2",
        label: "Sulit",
        span: 3,
        children: data.sulit || "-",
      },
      {
        key: "3",
        label: "Nomor",
        span: 3,
        children: data.nomor || "-",
      },
      {
        key: "4",
        label: "Question",
        span: 3,
        children: stripHtmlTags(data.question || "-"),
      },
      {
        key: "5",
        label: "Parent nomor",
        span: 3,
        children: data.parentNomor || "-",
      },
      {
        key: "6",
        label: "Multiplechoice img code",
        span: 3,
        children: data.multiplechoiceImgCode || "-",
      },
      {
        key: "7",
        label: "Jawaban",
        span: 3,
        children: data.answer || "-",
      },
      {
        key: "8",
        label: "Post question",
        span: 3,
        children: stripHtmlTags(data.postQuestion || "-"),
      },
      {
        key: "9",
        label: "Multiplechoice story code",
        span: 3,
        children: data.multiplechoiceStoryCode || "-",
      },
      {
        key: "10",
        label: "Group name",
        span: 3,
        children: data.groupName || "-",
      },
      {
        key: "11",
        label: "Ref kesulitan id",
        span: 3,
        children: data.refKesulitanId || "-",
      },
      {
        key: "12",
        label: "Multiplechoice question category",
        span: 3,
        children: data.multipleCHoiceQUestionCategoryId || "-",
      },
    ];
  }, [data]);

  return (
    <Drawer
      title="Detail Multiplechoice"
      onClose={onClose}
      open={open}
      width={720}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
    >
      {data ? <Descriptions layout="vertical" bordered items={items} /> : <div>Loading...</div>}
    </Drawer>
  );
};

export default MchoiceDetail;
