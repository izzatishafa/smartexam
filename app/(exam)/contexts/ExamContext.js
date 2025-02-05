"use client";

import React, { createContext, useContext, useState } from "react";
import { questionData } from "../dummy/questionData";
import { useRouter } from "next/navigation"; // Ganti ini
import { Modal } from "antd";

const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [confusedQuestions, setConfusedQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentExamType, setCurrentExamType] = useState("gti"); // bisa "gti", "wpt", dll.
  const [currentSubtest, setCurrentSubtest] = useState(1);
  const [totalSubtest, setTotalSubtest] = useState(5); // berubah sesuai jenis soal

  // const markConfused = () => {
  //   setConfusedQuestions(prev => {
  //     const isConfused = prev.includes(currentQuestion);
  //     if (isConfused) {
  //       return prev.filter(q => q !== currentQuestion);
  //     } else {
  //       return [...prev, currentQuestion];
  //     }
  //   });
  // };

  const setAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    const totalQuestions = questionData.length;
    const answeredQuestions = Object.keys(answers).length;

    if (answeredQuestions < totalQuestions) {
      Modal.warning({
        title: "Harap isi semua jawaban!",
        centered: true,
      });
      return;
    }

    setIsModalOpen(true); // Tampilkan modal konfirmasi
  };

  const confirmSubmit = () => {
    setIsModalOpen(false);

    // Navigasikan user ke tutorial sebelum soal
    router.push(`/exam/gti/subtest${currentSubtest}/tutorial-intro`);
  };

  const goToNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questionData.length));
  };

  const goToPrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 1));
  };

  const goToQuestion = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };

  return (
    <ExamContext.Provider
      value={{
        currentQuestion,
        // confusedQuestions,
        answers,
        questionData,
        // markConfused,
        setAnswer,
        goToNext,
        goToPrevious,
        goToQuestion,
        handleSubmit,
      }}
    >
      {children}
      {/* Modal Konfirmasi */}
      <Modal title="Konfirmasi Submit" open={isModalOpen} centered onOk={confirmSubmit} onCancel={() => setIsModalOpen(false)}>
        <p>Apakah Anda yakin ingin mengirim jawaban?</p>
      </Modal>
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
