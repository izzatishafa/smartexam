"use client";

import React, { useState } from "react";
import { Typography, Row, Col, Space, Modal, Button, Flex } from "antd";
const { Title, Text } = Typography;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import ModalTutorial from "../components/ModalTutorial";
import GtiTutorial2 from "../components/GtiTutorial2";
const { Content } = Layout;

const GtiTutorial2Page = () => {
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

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    // Logic to fetch the next question will go here
  };

  const tutorialAnswers = ["Galang", "Helma"];

  return (
    <>
      <QuizHeader title="Tutorial Subtest 2" onGuideClick={showModal}>
        <Countdown />
      </QuizHeader>
      <Content style={{ margin: "20px" }}>
        <Space>
          <ModalTutorial open={isModalOpen} onCancel={handleClose} />
        </Space>
        <GtiTutorial2 selectedOption={selectedOption} setSelectedOption={setSelectedOption} onNextQuestion={handleNextQuestion} />
      </Content>
    </>
  );
};

export default GtiTutorial2Page;
