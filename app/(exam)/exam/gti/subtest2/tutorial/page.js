"use client";

import React, { useState } from "react";
import { Typography, Row, Col, Space, Modal, Button, Flex } from "antd";
const { Title, Text } = Typography;
import Countdown from "@/components/ui/Countdown";
import QuizHeader from "@/components/ui/QuizHeader";
import { Layout } from "antd";
import ModalTutorial from "../components/GtiModalTutorial";
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
        <GtiTutorial2 selectedOption={selectedOption} setSelectedOption={setSelectedOption} onNextQuestion={handleNextQuestion} />
    </>
  );
};

export default GtiTutorial2Page;
