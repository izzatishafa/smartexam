"use client";

import React from "react";
import { Tabs } from "antd";
import DivisiTab from "../components/DivisiTab";
import LevelTab from "../components/LevelTab";



const LevelDivisi = ({ levelData, divisiData }) => {
  const onChange = (key) => {
    console.log(key);
  };

  // Pindahkan items ke dalam komponen dan gunakan levelData
  const items = [
    {
      key: "1",
      label: "Level",
      children: <LevelTab levelData={levelData} />, // Teruskan levelData sebagai prop
    },
    {
      key: "2",
      label: "Divisi",
      children: <DivisiTab divisiData={divisiData} />, // Teruskan divisiData juga
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default LevelDivisi;
