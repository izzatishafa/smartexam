"use client";

import React, { useState, useMemo } from "react";
import { Row, Col, Table, Input } from "antd";
import { DetailButton, AddButton, CloneButton, EditButton } from "@/components/ui/Buttons";
import { createStyles } from "antd-style";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import MchoiceDetail from "../components/MchoiceDetail";
import MchoiceEditForm from "../components/MchoiceEditForm";
const { Search } = Input;

const fetchSessions = async (page, keyword = "") => {
  const res = await fetch(`http://localhost:8001/api/v1/company/soal/multiple_choice?page=${page}&total=3&search=${keyword}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch sessions");
  return res.json();
};

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const MultiplechoicePage = ({ initialData = [] }, metadata) => {
  const queryClient = useQueryClient();
  const { styles } = useStyle();
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(parseInt(metadata?.page || 1));
  const [openEdit, setOpenEdit] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // Fetching data with React Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sessions", currentPage, searchKeyword],
    queryFn: () => fetchSessions(currentPage, searchKeyword),
    initialData: {
      data: {
        list: initialData,
        metadata,
      },
    },
  });

  const filteredData = useMemo(() => {
    if (!data?.data?.list) return [];
    return data.data.list.filter((item) => (item.label || "").toLowerCase().includes(searchKeyword.toLowerCase()) || (item.code || "").toLowerCase().includes(searchKeyword.toLowerCase()));
  }, [data, searchKeyword]);

  const mapSessionData = (item) => ({
    id: item.id,
    jenisSoal: item.jenisSoal,
    sulit: item.sulit,
    nomor: item.nomor,
    question: item.question,
    answer: item.answer,
    parentNomor: item.parentNomor,
    postQuestion: item.postQuestion,
    display: item.display,
    groupName: item.groupName,
    refKesulitanId: item.refKesulitanId,
    multiplechoiceStoryCode: item.multiplechoiceStoryCode,
    multipleCHoiceQUestionCategoryId: item.multipleCHoiceQUestionCategoryId,
  });

  // Mutation for adding a session
  const addMutation = useMutation({
    mutationFn: (newSession) =>
      fetch("http://localhost:8001/api/v1/company/soal/multiple_choice/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSession),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] }); // Refresh data
      setOpen(false);
    },
  });

  // Mutation for editing a session
  const editMutation = useMutation({
    mutationFn: (updatedSession) =>
      fetch(`http://localhost:8001/api/v1/company/soal/multiple_choice/update/${updatedSession.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSession),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessions"] });
      setOpenEdit(false);
      setEditItem(null);
    },
  });
  

  const handleAdd = (newSession) => {
    addMutation.mutate(newSession);
  };

  const handleEdit = (updatedSession) => {
    editMutation.mutate(updatedSession);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchSessions(page, searchKeyword);
  };

  const onSearch = (value) => {
    setSearchKeyword(value);
    setCurrentPage(1);
  };

  const onClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  const onCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleDetail = (record) => {
    setOpenDetail(true);
  };

  const handleEditClick = (record) => {
    setEditItem(record);
    setOpenEdit(true);
  };

  const columns = [
    {
      title: "Jenis Soal",
      dataIndex: "jenisSoal",
      key: "jenisSoal",
      width: 150,
      fixed: "left",
    },
    {
      title: "Nomor",
      dataIndex: "nomor",
      key: "nomor",
      width: 150,
    },
    {
      title: "Sulit",
      dataIndex: "sulit",
      key: "sulit",
      width: 200,
    },
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
      width: 150,
    },
    {
      title: "Parent Nomor",
      dataIndex: "parentNomor",
      key: "parentNomor",
      width: 150,
    },
    {
      title: "Multiplechoice Img Code",
      dataIndex: "multiplechoiceImgCode",
      key: "multiplechoiceImgCode",
      width: 150,
    },
    {
      title: "Jawaban",
      dataIndex: "jawaban",
      key: "jawaban",
      width: 150,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 150,
      render: (_, record) => (
        <Row gutter={[8, 8]}>
          <Col>
            <DetailButton onClick={() => handleDetail(record)} />
          </Col>
          <Col>
            <CloneButton />
          </Col>
          <Col>
            <EditButton onClick={() => handleEditClick(record)} />
          </Col>
        </Row>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching sessions</div>;

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }} justify="space-between">
        <Col>
          <Search placeholder="Cari..." allowClear enterButton="Search" size="large" onSearch={onSearch} />
        </Col>
        <Col style={{ textAlign: "right" }}>
          <AddButton text="Tambah Multiplechoice" onClick={() => setOpen(true)} />
        </Col>
      </Row>

      <MchoiceDetail open={openDetail} onClose={onCloseDetail} />
      <MchoiceEditForm open={openEdit} onClose={onClose} initialValues={editItem} onSubmit={handleEdit} />

      <Table
        rowKey="id"
        className={styles.customTable}
        columns={columns}
        dataSource={filteredData}
        scroll={{
          x: "max-content",
          y: 55 * 5,
        }}
        pagination={{
          current: currentPage,
          pageSize: 3,
          total: data?.data?.metadata?.total || 0,
          onChange: handlePageChange,
        }}
      />
    </>
  );
};

export default MultiplechoicePage;
