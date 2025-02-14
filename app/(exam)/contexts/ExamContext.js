"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import questionData from "../dummy/questionData";
import { useRouter, usePathname } from "next/navigation";
import { Modal } from "antd";

const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const examType = pathSegments[2];

  // State for questions
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for exam type and subtest
  const [currentExamType, setCurrentExamType] = useState("");
  const [currentSubtest, setCurrentSubtest] = useState(1);
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

  const setAnswer = (questionId, type, statementIndex, answer) => {
    if (examState.currentExamType === "disc") {
      setAnswers((prev) => ({
        ...prev,
        [`${questionId}-${statementIndex}-${type}`]: answer,
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: answer,
      }));
    }
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
          content:
            "Pastikan Anda memilih Most dan Least untuk setiap pernyataan",
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

  const confirmSubmit = async () => {
    setIsModalOpen(false);
    const subtestTotal = getTotalSubtests();

    if (currentSubtest < subtestTotal) {
      setAnswers({});
      setCurrentQuestion(1);
      setCurrentSubtest((prevSubtest) => prevSubtest + 1);
      setIsNavigate(true);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    if (isNavigate) {
      router.push(
        `/exam/${currentExamType}/subtest${currentSubtest}/tutorial-intro`
      );
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
        currentExamType,
        currentSubtest,
        questionData: getCurrentQuestionData(),
        subtestInfo: getCurrentSubtestInfo(),
        totalSubtests: getTotalSubtests(),
        currentQuestionData: getCurrentQuestion(),
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
      <Modal
        title="Konfirmasi Submit"
        open={isModalOpen}
        centered
        onOk={confirmSubmit}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Apakah Anda yakin ingin mengirim jawaban?</p>
      </Modal>
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
