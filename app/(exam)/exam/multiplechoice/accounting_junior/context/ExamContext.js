"use client";

import React, { createContext, useContext, useState } from "react";
import { questionData } from "../dummy/questionData";

const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});

  const setAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
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
        answers,
        questionData,
        setAnswer,
        goToNext,
        goToPrevious,
        goToQuestion,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
