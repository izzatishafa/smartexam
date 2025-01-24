"use client"

import React from 'react'
import { Tabs } from "antd";
import DivisiTab from './components/DivisiTab';
import LevelTab from './components/LevelTab';
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Level",
    children: <LevelTab />,
  },
  {
    key: "2",
    label: "Divisi",
    children: <DivisiTab />,
  },
];

const Page = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
}

export default Page
