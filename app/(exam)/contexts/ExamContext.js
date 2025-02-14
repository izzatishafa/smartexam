"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import questionData from "../dummy/questionData";
import { useRouter, usePathname } from "next/navigation";
import { Modal } from "antd";

const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  // const [confusedQuestions, setConfusedQuestions] = useState([]);
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const examType = pathSegments[2];

  // State for questions
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk waktu
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [endStatus, setEndStatus] = useState("");

  // // State untuk tipe tes dan subtes
  // const [currentExamType, setCurrentExamType] = useState("gti");
  // State for exam type and subtest
  const [currentExamType, setCurrentExamType] = useState("gti");
  const [currentSubtest, setCurrentSubtest] = useState("");
  const [totalSubtest, setTotalSubtest] = useState(1);
  const [isNavigate, setIsNavigate] = useState(false);
  // Main state
  const [examState, setExamState] = useState({
    currentExamType: examType,
    currentSection: null,
    currentSubtest: 1,
    currentQuestion: 1,
    answers: {},
    isNavigating: false,
  });

  // Gunakan function untuk update examState
  const updateExamState = (updates) => {
    setExamState((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  // Modifikasi useEffect initialization
  useEffect(() => {
    const initializeExam = async () => {
      try {
        setIsLoading(true);
        // Initialize timer
        initializeTimer();
        // Load question data
        await getCurrentQuestionData();

        // Simulasi loading untuk memastikan transisi halus
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error initializing exam:", error);
      }
    };

    initializeExam();
  }, [currentSubtest, currentExamType]);

  // Fungsi untuk menginisialisasi timer berdasarkan subtest
  const initializeTimer = () => {
    const subtestData = questionData[examState.currentExamType][`subtest${examState.currentSubtest}`];
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
          handleTimeUp(); // Panggil fungsi handleTimeUp ketika waktu habis
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
  }, [examState.currentSubtest]);

  // Fungsi untuk menangani waktu habis
  const handleTimeUp = () => {
    const totalSubtests = getTotalSubtests();

    if (currentSubtest < totalSubtests) {
      setEndStatus("time-up-subtest");
    } else {
      setEndStatus("time-up");
    }
    router.push("/exam/end");
  };

  // Effect untuk inisialisasi timer saat subtest berubah
  useEffect(() => {
    initializeTimer();
  }, [currentSubtest, currentExamType]);


  // const getCurrentQuestionData = () => {
  //   const currentSubtestData = questionData[currentExamType][`subtest${currentSubtest}`];
  //   console.log("currentSubtest111", currentSubtest);
  //   if (!currentSubtestData) {
  //     console.error(`Subtest ${currentSubtest} tidak ditemukan`);
  //     return [];
  //   }
  //   return currentSubtestData.questions;
  // };

  const getCurrentExamData = () => {
    const { currentExamType } = examState;

    if (currentExamType === "disc") {
      return questionData.disc.disc;
    } else if (currentExamType === "personal") {
      return questionData[currentExamType][examState.currentSection];
    } else if (currentExamType === "gti") {
      return questionData[currentExamType];
    } else if (currentExamType === "multiplechoice") {
      return questionData[currentExamType]["english"];
    } else {
      return questionData[currentExamType];
    }
  };

  const getCurrentQuestionData = () => {
    const examData = getCurrentExamData();

    if (examState.currentExamType === "disc") {
      return examData?.questions || [];
    } else if (examState.currentExamType === "personal") {
      return examData?.questions || [];
    } else if (examState.currentExamType === "gti") {
      return examData[`subtest${examState.currentSubtest}`]?.questions || [];
    } else if (examState.currentExamType === "multiplechoice") {
      return examData?.questions || [];
    } else {
      return examData?.questions || [];
    }
  };

  const getCurrentQuestion = () => {
    const questions = getCurrentQuestionData();
    if (examState.currentExamType === "disc") {
      return questions.find((q) => q.no === currentQuestion);
    } else {
      return questions.find((q) => q.id === currentQuestion);
    }
  };

  const getTotalSubtests = () => {
    const examData = getCurrentExamData();

    if (examState.currentExamType === "gti") {
      return examData.totalSubtests || 1;
    } else {
      return 1;
    }
  };

  const getCurrentSubtestInfo = () => {
    const examData = getCurrentExamData();

    if (examState.currentExamType === "personal") {
      return examData;
    } else if (examState.currentExamType === "gti") {
      return examData[`subtest${examState.currentSubtest}`];
    } else {
      return examData;
    }
  };

  const setAnswer = (questionId, answer) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev, [questionId]: answer };
      console.log("Updated Answers:", newAnswers);
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    const currentQuestionData = getCurrentQuestionData();
    const totalQuestions = currentQuestionData.length;

    if (examState.currentExamType === "disc") {
      const requiredAnswers = totalQuestions * 8; // 4 statements * 2 (most/least) per question
      const answeredQuestions = Object.keys(answers).length;

      if (answeredQuestions < requiredAnswers) {
        Modal.warning({
          title: "Harap isi semua jawaban!",
          content: "Pastikan Anda memilih Most dan Least untuk setiap pernyataan",
          centered: true,
        });
        return;
      }
    } else {
      const answeredQuestions = Object.keys(answers).length;
      if (answeredQuestions < totalQuestions) {
        Modal.warning({
          title: "Harap isi semua jawaban!",
          centered: true,
        });
        return;
      }
    }

    setIsModalOpen(true);
  };

  // Modifikasi fungsi confirmSubmit
  const confirmSubmit = async () => {
    setIsModalOpen(false);
    const subtestTotal = getTotalSubtests();

    if (examState.currentSubtest < subtestTotal) {
      setAnswers({});
      setCurrentQuestion(1);
      updateExamState({
        currentSubtest: examState.currentSubtest + 1,
      });
      setIsNavigate(true);
    } else {
      setEndStatus("all-done");
      router.push("/exam/end");
    }
  };

  useEffect(() => {
    if (isNavigate) {
      router.push(`/exam/${currentExamType}/subtest${examState.currentSubtest}/tutorial-intro`);
    }
  }, [isNavigate, currentExamType, router, examState.currentSubtest]);

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
        answers,
        endStatus,
        timeRemaining,
        currentExamType: examState.currentExamType,
        currentSubtest: examState.currentSubtest,
        isLoading,
        // questionData,
        questionData: getCurrentQuestionData(),
        subtestInfo: getCurrentSubtestInfo(),
        totalSubtests: getTotalSubtests(),
        currentQuestionData: getCurrentQuestion(),
        setAnswer,
        goToNext,
        goToPrevious,
        goToQuestion,
        handleSubmit,
        changeExamType: (type) => updateExamState({ currentExamType: type, currentSubtest: 1 }),
        changeSubtest: (subtestNumber) => updateExamState({ currentSubtest: subtestNumber }),
      }}
    >
      {children}
      <Modal title="Konfirmasi Submit" open={isModalOpen} centered onOk={confirmSubmit} onCancel={() => setIsModalOpen(false)}>
        <p>Apakah Anda yakin ingin mengirim jawaban?</p>
      </Modal>
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
