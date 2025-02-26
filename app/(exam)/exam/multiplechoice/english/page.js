"use client";
import React, { useEffect } from "react";
const { Content } = Layout;
import { Layout } from "antd";
import EnglishCard from "./components/EnglishCard";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const EnglishUniversity = () => {
  const { getCurrentQuestionAPI, currentQuestion, setAnswer, answers } =
    useExamStore();

  const currentQuestionData = getCurrentQuestionAPI();

  console.log("ini adalah data pertanyaan :", currentQuestionData);

  if (!currentQuestionData) return <div>Loading...</div>;

  return (
    <>
      <Content style={{ margin: "20px" }}>
        <EnglishCard
          question={currentQuestionData.question}
          choices={currentQuestionData.choices}
          questionNumber={currentQuestion}
          selectedOption={answers[currentQuestionData.id]}
          onSelectOption={(option) => setAnswer(currentQuestionData.id, option)}
        />
      </Content>
    </>
  );
};

export default EnglishUniversity;
