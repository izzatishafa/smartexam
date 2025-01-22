"use client";

import React, { useState } from "react";
import { Typography, Row, Col, Space, Modal, Button, Flex } from "antd";
const { Title, Text } = Typography;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import ModalTutorial from "../components/ModalTutorial";
import GtiQuestion2 from "../components/GtiQuestion2";
const { Content } = Layout;

const GtiSubtest2Page = () => {
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

  const tutorialAnswers = ["Galang", "Helma"];

  return (
    <>
      <QuizHeader title="Subtest 2" onGuideClick={showModal}>
        <Countdown />
      </QuizHeader>
      <Content style={{ margin: "20px" }}>
        <Space>
          <ModalTutorial open={isModalOpen} onCancel={handleClose} />
        </Space>
        <GtiQuestion2 selectedOption={selectedOption} setSelectedOption={setSelectedOption} onNextQuestion={handleNextQuestion} />
      </Content>
    </>
  );
};

export default GtiSubtest2Page;
