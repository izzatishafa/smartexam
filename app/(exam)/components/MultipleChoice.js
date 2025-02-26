"use client";
import React, { useState } from "react";
import useExamStore from "@/app/(exam)/stores/useExamStore";

const MultipleChoice = ({ choices, questionId }) => {
  console.log("ini adalah pilihan :", choices);

  const { setAnswer, answers } = useExamStore();
  const [hoveredOption, setHoveredOption] = useState(null);

  const selectedOption = answers[questionId];

  const handleOptionClick = (optionIndex) => {
    setAnswer(questionId, optionIndex);
  };

  return (
    <div style={{ maxWidth: "700px" }}>
      <ol
        style={{
          color: "#000",
          listStyleType: "none",
          paddingLeft: "0px",
          fontSize: "15px",
        }}
      >
        {choices.map((choice, index) => {
          const isSelected = selectedOption === index;
          const isHovered = hoveredOption === index;

          return (
            <li
              key={index}
              onClick={() => handleOptionClick(index)}
              onMouseEnter={() => setHoveredOption(index)}
              onMouseLeave={() => setHoveredOption(null)}
              style={{
                color: isSelected ? "#fff" : "#000",
                backgroundColor: isSelected
                  ? "#2D7CC1"
                  : isHovered
                  ? "#96BDE0"
                  : "#E9F0FC",
                padding: "8px 16px",
                borderRadius: "12px",
                marginBottom: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer",
                border: "1px solid #FFF",
                transition: "background-color 0.3s, border-color 0.3s",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  backgroundColor: "white",
                  color: "#0a01ff",
                  border: "1px solid white",
                  flexShrink: 0,
                }}
              >
                <p style={{ margin: 0 }}>{choice.choice}</p>
              </div>
              <p style={{ margin: 0, fontWeight: "600" }}>{choice.label}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default MultipleChoice;
