import React from "react";
// import "@/components/ui/styles/multiple-choice.module.css"; // Import file CSS

const MultipleChoice = ({ data, currentAnswer, onAnswer }) => {
  return (
    <>
      <div style={{ maxWidth: "500px" }}>
        <ol className="multiple-choice-list">
          {data.map((item, index) => (
            <li
              key={index}
              onClick={() => onAnswer(item.choice, item.label)}
              className={`multiple-choice-item ${
                currentAnswer === item.choice ? "selected" : ""
              }`}
            >
              <div className="choice-box">{item.choice}</div>
              <p className="choice-label">{item.label}</p>
            </li>
          ))}
        </ol>
      </div>
      <style jsx>
        {`.multiple-choice-list {
            color: #000;
            list-style-type: none;
            padding-left: 0px;
            font-size: 15px;
          }
    
        .multiple-choice-item {
            color: #1b3042;
            background-color: #e9f0fc;
            padding: 8px 16px;
            border-radius: 12px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
            border: 1px solid lightgray;
            transition: background-color 0.2s ease-in-out;
        }
    
        .multiple-choice-item:hover {
            background-color: #b0d7ff;
            /* Warna saat hover */
        }
    
        .multiple-choice-item.selected {
            background-color: #2d7cc1;
            color: white;
            border: 1px solid cornflowerblue;
        }
    
        .choice-box {
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
        }
        
        .choice-label {
            margin: 0;
            font-family: "ABeeZee", sans-serif;
            font-weight: semibold;`}
      </style>
    </>
  );
};

export default MultipleChoice;
