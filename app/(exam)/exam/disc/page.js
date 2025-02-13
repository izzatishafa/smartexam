"use client";
import React, { useState } from "react";
import { Typography, Space, Modal, Card, Button, Flex } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import { Layout } from "antd";
// import DiscRadioQuestion from "@/components/ui/DiscRadioQuestion";
import DiscCard from "@/app/(exam)/exam/disc/components/DiscCard";

const DiscPage = ({ title }) => {

  const data = [
    {
      key: "1",
      pref: "Mudah bergaul, menyenangkan. kcsjacasjcnakjsnckascnaksjcnkascnaksj",
      most: false,
      least: false,
    },
    {
      key: "2",
      pref: "Mudah percaya kepada orang lain.",
      most: false,
      least: false,
    },
    {
      key: "3",
      pref: "Penuh toleransi, menghormati orang lain.",
      most: false,
      least: false,
    },
    {
      key: "4",
      pref: "Suka berpetualangan, pengambil risiko.",
      most: false,
      least: false,
    },
  ];

  return (
    <>
      <DiscCard data={data}></DiscCard>
    </>
  );
};

export default DiscPage;
