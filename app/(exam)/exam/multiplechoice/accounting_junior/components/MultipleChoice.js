"use client";
import React from "react";
import { useState } from "react";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const MultipleChoice = ({ options, questionId }) => {
  const { setAnswer, answers } = useExamStore();
  const selectedOption = answers[questionId];

  const handleOptionClick = (optionIndex) => {
    setAnswer(questionId, optionIndex);
  };

  return (
    <>
      <div style={{ maxWidth: "700px" }}>
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
                className={`option-item ${
                  selectedOption === index ? "selected" : ""
                }`}
              >
                <div className="option-circle">
                  <p>{choice}</p>
                </div>
                <p className="option-text">{option}</p>

                <style jsx>{`
                  .option-item {
                    color: ${selectedOption === index ? "#fff" : "#000"};
                    background-color: ${selectedOption === index
                      ? "#2D7CC1"
                      : "#E9F0FC"};
                    padding: 8px 16px;
                    border-radius: 12px;
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    cursor: pointer;
                    border: 1px solid #fff;
                    transition: background-color 0.3s, border-color 0.3s;
                  }

                  .option-item:hover {
                    background-color: #96bde0;
                    border-color: cornflowerblue;
                  }

                  .option-circle {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    font-weight: bold;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                    background-color: white;
                    color: #0a01ff;
                    border: 1px solid white;
                    flex-shrink: 0;
                  }

                  .option-text {
                    margin: 0;
                    font-weight: semibold;
                  }
                `}</style>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default MultipleChoice;
