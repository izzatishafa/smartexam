"use client";

import { Button, Drawer, Form, Input, Select, Space } from "antd";
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fungsi untuk fetch data level
const fetchLevels = async () => {
  const res = await fetch("http://localhost:8001/api/v1/company/level/dropdown", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch levels");
  return res.json();
};

// Fungsi untuk fetch data divisi
const fetchDivisi = async () => {
  const res = await fetch("http://localhost:8001/api/v1/company/divisi/opts", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch divisions");
  return res.json();
};

// Fungsi untuk fetch data sesi
const fetchSessions = async () => {
  const res = await fetch("http://localhost:8001/api/v1/company/sesi/dropdown/formasi", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch sessions");
  return res.json();
};

const FormasiAddForm = ({ onClose, open, onSubmit, loading }) => {
  const [form] = Form.useForm();

  // Query untuk data level
  const { data: levelData, isLoading: isLoadingLevel } = useQuery({
    queryKey: ["levels-dropdown"],
    queryFn: fetchLevels,
  });

  // Query untuk data divisi
  const { data: divisiData, isLoading: isLoadingDivisi } = useQuery({
    queryKey: ["divisi-dropdown"],
    queryFn: fetchDivisi,
  });

  // Query untuk data sesi
  const { data: sesiData, isLoading: isLoadingSesi } = useQuery({
    queryKey: ["sesi-dropdown"],
    queryFn: fetchSessions,
  });


  console.log("sesi", sesiData);// Transform data level untuk options Select
  const levelOptions =
    levelData?.data?.map((level) => ({
      value: level.id,
      label: level.label,
    })) || [];

  // Transform data divisi untuk options Select
  const divisiOptions =
    divisiData?.data?.map((divisi) => ({
      value: divisi.id,
      label: divisi.label,
    })) || [];

  // Transform data sesi untuk options Select
  const sesiOptions =
    sesiData?.data?.map((sesi) => ({
      value: sesi.id,
      label: sesi.label,
      code: sesi.code,
    })) || [];


    

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        // Transformasi values untuk menyertakan sesi_code dari sesi yang dipilih
        const transformedValues = {
          ...values,
          sesi_code: sesiOptions.find((option) => option.value === values.sesi_code)?.code || "",
          posisi: divisiOptions.find((option) => option.value === values.posisi)?.label || "",
          tingkatan: levelOptions.find((option) => option.value === values.tingkatan)?.label || "",
        };

        // Kirim values yang sudah ditransformasi
        console.log("Transformed Values:", transformedValues); // Debug
        onSubmit(transformedValues);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };


  return (
    <>
      <Drawer
        title="Tambah Formasi"
        onClose={onClose}
        open={open}
        width={720}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Batal</Button>
            <Button type="primary" onClick={handleSubmit} loading={loading || isLoadingLevel || isLoadingDivisi || isLoadingSesi}>
              Tambah
            </Button>
          </Space>
        }
      >
        <Form hideRequiredMark layout="vertical" form={form}>
          <Form.Item name="code" label="Code Formasi" rules={[{ required: true, message: "Please enter formation code" }]}>
            <Input type="text" placeholder="Masukkan kode formasi" />
          </Form.Item>
          <Form.Item name="label" label="Label Formasi" rules={[{ required: true, message: "Please enter formation label" }]}>
            <Input type="text" placeholder="Masukkan label formasi" />
          </Form.Item>
          <Form.Item name="sesi_code" label="Sesi" rules={[{ required: true, message: "Please select session" }]}>
            <Select options={sesiOptions} placeholder="Pilih Sesi" loading={isLoadingSesi} />
          </Form.Item>
          <Form.Item name="posisi" label="Divisi" rules={[{ required: true, message: "Please select division" }]}>
            <Select options={divisiOptions} placeholder="Pilih Divisi" loading={isLoadingDivisi} />
          </Form.Item>
          <Form.Item name="tingkatan" label="Level" rules={[{ required: true, message: "Please select level" }]}>
            <Select options={levelOptions} placeholder="Pilih Level" loading={isLoadingLevel} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default FormasiAddForm;
