"use client"
import React from 'react'
import { useState } from "react";
import useExamStore from '@/app/(exam)/stores/useExamStore';

const MultipleChoice = ({ options, questionId }) => {
  const { setAnswer, answers } = useExamStore();
  const selectedOption = answers[questionId];

  const handleOptionClick = (optionIndex) => {
    setAnswer(questionId, optionIndex);
  };

  return (
    <>
      <div style={{ maxWidth: "500px" }}>
        <ol
          style={{
            color: "#000",
            listStyleType: "none",
            paddingLeft: "0px",
            fontSize: "15px",
          }}
        >
          {options.map((option, index) => {
            const choice = String.fromCharCode(65 + index); // Converts 0 -> 'A', 1 -> 'B', etc.

            return (
              <li
                key={index}
                onClick={() => handleOptionClick(index)}
                style={{
                  color: "#1B3042",
                  backgroundColor: selectedOption === index ? "aliceblue" : "transparent",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  border: selectedOption === index ? "1px solid cornflowerblue" : "1px solid lightgray",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    fontWeight: "bold",
                    border: "1px solid",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                    backgroundColor: selectedOption === index ? "cornflowerblue" : "",
                    color: selectedOption === index ? "white" : "gray",
                  }}
                >
                  {choice}
                </div>

                <p
                  style={{
                    margin: 0,
                    fontFamily: "ABeeZee, sans-serif",
                    fontWeight: "semibold",
                  }}
                >
                  {option}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default MultipleChoice;
