"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import questionData from "../dummy/questionData";
import { useRouter } from "next/navigation"; // Ganti ini
import { Modal } from "antd";

const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const router = useRouter();
  // const [confusedQuestions, setConfusedQuestions] = useState([]);

  // State untuk soal
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk waktu
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // State untuk tipe tes dan subtes
  const [currentExamType, setCurrentExamType] = useState("gti");
  const [currentSubtest, setCurrentSubtest] = useState(1);
  const [totalSubtest, setTotalSubtest] = useState(5); // berubah sesuai jenis soal
  const [isNavigate, setIsNavigate] = useState(false);
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

  // Fungsi untuk menginisialisasi timer berdasarkan subtest
  const initializeTimer = () => {
    const subtestData = questionData[currentExamType][`subtest${currentSubtest}`];
    if (subtestData && subtestData.timeLimit) {
      setTimeRemaining({
        hours: subtestData.timeLimit.hours,
        minutes: subtestData.timeLimit.minutes,
        seconds: subtestData.timeLimit.seconds,
      });
    }
  };

  // Effect untuk menjalankan timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          handleSubmit(); // Auto submit ketika waktu habis
          return prev;
        }

        let newHours = prev.hours;
        let newMinutes = prev.minutes;
        let newSeconds = prev.seconds;

        if (newSeconds > 0) {
          newSeconds--;
        } else if (newMinutes > 0) {
          newMinutes--;
          newSeconds = 59;
        } else if (newHours > 0) {
          newHours--;
          newMinutes = 59;
          newSeconds = 59;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSubtest]);

  // Effect untuk inisialisasi timer saat subtest berubah
  useEffect(() => {
    initializeTimer();
  }, [currentSubtest, currentExamType]);

  const getCurrentQuestionData = () => {
    const currentSubtestData = questionData[currentExamType][`subtest${currentSubtest}`];
    console.log("currentSubtest111", currentSubtest);
    if (!currentSubtestData) {
      console.error(`Subtest ${currentSubtest} tidak ditemukan`);
      return [];
    }
    return currentSubtestData.questions;
  };

  // Tambahkan fungsi untuk mendapatkan soal saat ini
  const getCurrentQuestion = () => {
    const questions = getCurrentQuestionData();
    const question = questions.find((q) => q.id === currentQuestion);
    console.log("Current Question:", question); // Debugging
    return question;
  };

  const getTotalSubtests = () => {
    return questionData[currentExamType].totalSubtests;
  };

  const getCurrentSubtestInfo = () => {
    return questionData[currentExamType][`subtest${currentSubtest}`];
  };

  const setAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    const currentQuestionData = getCurrentQuestionData();
    const totalQuestions = currentQuestionData.length;
    console.log("Total Questions:", totalQuestions);

    const answeredQuestions = Object.keys(answers).length;

    if (answeredQuestions < totalQuestions) {
      Modal.warning({
        title: "Harap isi semua jawaban!",
        centered: true,
      });
      return;
    }

    setIsModalOpen(true);
  };

  const confirmSubmit = async () => {
    setIsModalOpen(false);
    const subtestTotal = getTotalSubtests();

    if (currentSubtest < subtestTotal) {
      // Reset answers dan currentQuestion sebelum mengubah subtest
      setAnswers({});
      setCurrentQuestion(1);
      // Gunakan callback untuk memastikan state diupdate dengan benar
      setCurrentSubtest((prevSubtest) => {
        const nextSubtest = prevSubtest + 1;
        return nextSubtest;
      });
      setIsNavigate(true);
    } else {
      router.push("/");
    }
    console.log("current Subtest444", currentSubtest);
  };
  console.log(isNavigate, "ini navigate");
  useEffect(() => {
    if (isNavigate) {
      router.push(`/exam/${currentExamType}/subtest${currentSubtest}/tutorial-intro`);
    }
  }, [isNavigate, currentExamType, router, currentSubtest]);

  const changeExamType = (type) => {
    setCurrentExamType(type);
    setCurrentSubtest(1);
    setCurrentQuestion(1);
    setAnswers({});
  };

  const changeSubtest = (subtestNumber) => {
    setCurrentSubtest(subtestNumber);
    setCurrentQuestion(1);
    setAnswers({});
    initializeTimer();
  };

  const goToNext = () => {
    const currentQuestions = getCurrentQuestionData();
    setCurrentQuestion((prev) => Math.min(prev + 1, currentQuestions.length));
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
        timeRemaining,
        currentExamType,
        currentSubtest,
        // questionData,
        questionData: getCurrentQuestionData(),
        subtestInfo: getCurrentSubtestInfo(),
        totalSubtests: getTotalSubtests(),
        currentQuestionData: getCurrentQuestion(),
        // markConfused,
        setAnswer,
        goToNext,
        goToPrevious,
        goToQuestion,
        handleSubmit,
        changeExamType,
        changeSubtest,
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
