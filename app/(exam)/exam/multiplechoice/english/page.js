"use client";
import React, { useEffect } from "react";
const { Content } = Layout;
import { Layout } from "antd";
import EnglishCard from "./components/EnglishCard";

const EnglishUniversity = () => {
  return (
    <>
      <Content style={{ margin: "20px" }}>
        <EnglishCard />
      </Content>
    </>
  );
};

export default EnglishUniversity;
