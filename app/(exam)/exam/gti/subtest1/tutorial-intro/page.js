"use client";
import React, { useState } from "react";

import { Layout } from "antd";
const { Content } = Layout;
import GtiTutorialIntro1 from "@/app/(exam)/exam/gti/subtest1/tutorial-intro/components/GtiTutorialIntro1";
import { ExamProvider } from "@/app/(exam)/contexts/ExamContext";

const GtiTutorialIntroPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (value) => setSelectedOption(value);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOptionQuestionsClick = (value) => {
    setSelectedOption(value);
    setIsAnswerCorrect(value === correctAnswer);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    // Logic to fetch the next question will go here
  };

  const answers = [0, 1, 2, 3, 4];
  const correctAnswer = 1;

  return (
    <ExamProvider hideSidebar={true}>
      <div style={{ width: "100%" }}>
        <GtiTutorialIntro1
          upperRowLetters={["A", "J", "K", "M"]}
          lowerRowLetters={["b", "d", "j", "m"]}
          answers={[0, 1, 2, 3, 4]}
          selectedOption={selectedOption}
          onOptionClick={handleOptionQuestionsClick}
          isAnswerCorrect={isAnswerCorrect}
          onNextQuestion={handleNextQuestion}
        />
      </div>
    </ExamProvider>
  );
};

export default GtiTutorialIntroPage;
