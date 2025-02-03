"use client"

import React, { createContext, useContext, useState } from "react";
import { questionData } from "../dummy/questionData";

const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [confusedQuestions, setConfusedQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const markConfused = () => {
    setConfusedQuestions(prev => {
      const isConfused = prev.includes(currentQuestion);
      if (isConfused) {
        return prev.filter(q => q !== currentQuestion);
      } else {
        return [...prev, currentQuestion];
      }
    });
  };

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
        confusedQuestions,
        answers,
        questionData,
        markConfused,
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