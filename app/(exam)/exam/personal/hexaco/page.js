"use client";
import React, { useState } from "react";
import { Typography, Flex, Button, Space, Divider, Modal } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import HexacoCard from "@/app/(exam)/exam/personal/hexaco/component/HexacoCard";
import ModalHexaco from "./component/ModalHexaco";

const Hexaco = () => {
  return (
    <>
      <HexacoCard />
    </>
  );
};

export default Hexaco;
