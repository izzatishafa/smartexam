import { Tag } from "antd";
import { useState } from "react";

const MultipleChoice = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
          {["A", "B", "C", "D"].map((choice, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(choice)}
              style={{
                color: "#1B3042",
                backgroundColor:
                  selectedOption === choice ? "aliceblue" : "transparent",
                padding: "8px 16px",
                borderRadius: "12px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                border:
                  selectedOption === choice
                    ? "1px solid cornflowerblue"
                    : "1px solid lightgray",
              }}
            >
              <Tag
                style={{
                  fontWeight: "bold",
                  color: selectedOption === choice ? "white" : "gray",
                }}
                color={selectedOption === choice ? "cornflowerblue" : "default"}
              >
                {choice}
              </Tag>

              <p
                style={{
                  margin: 0,
                  fontFamily: ["ABeeZee", "sans-serif"],
                  fontWeight: "semibold",
                }}
              >
                Ini adalah contoh pilihan ganda dari quiz
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default MultipleChoice;
