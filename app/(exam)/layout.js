"use client";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/components/ui/Header.js";
import "../globals.css";

export default function ExamLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
