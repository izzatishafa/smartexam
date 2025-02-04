"use client";
import React, { useState } from "react";
import { Typography, Row, Col, Space, Modal, Button } from "antd";
const { Title, Text } = Typography;
const { Content } = Layout;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import GtiTutorial1 from "@/app/(exam)/exam/gti/subtest1/tutorial/components/GtiTutorial1";

const GtiTutorialPage = () => {
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
    <>
        <GtiTutorial1
          upperRowLetters={["A", "J", "K", "M"]}
          lowerRowLetters={["b", "d", "j", "m"]}
          answers={[0, 1, 2, 3, 4]}
          selectedOption={selectedOption}
          onOptionClick={handleOptionQuestionsClick}
          isAnswerCorrect={isAnswerCorrect}
          onNextQuestion={handleNextQuestion}
        />
    </>
  );
};

export default GtiTutorialPage;