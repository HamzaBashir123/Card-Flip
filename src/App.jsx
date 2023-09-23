import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./App.css";

function App() {
  const question = [
    "What language is React based on",
    "Which of the following is used in React.js to increase performance",
    "What is ReactJS",
    "Who created React.js",
    "In which language is React.js written",
    "Which of the following acts as the input of a class-based component",
  ];
  const answer = [
    "Javascript",
    "Virtual Dom",
    "user interface framework",
    "Jordan Walke",
    "Javascript",
    "Props",
  ];

  const [flips, setFlips] = useState(Array(question.length).fill(false));

  function handleClick(index) {
    const newFlips = Array(question.length).fill(false);
    newFlips[index] = !flips[index];
    setFlips(newFlips);
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "100px",
      }}
    >
      {question.map((e, index) => {
        return (
          <ReactCardFlip
            isFlipped={flips[index]}
            flipDirection="vertical"
            key={index}
          >
            <div
              onClick={() => handleClick(index)}
              style={{
                cursor: "pointer",
                width: "400px",
                height: "300px",
                background: "#d7fbda",
                fontSize: "40px",
                color: "green",
                margin: "20px",
                borderRadius: "4px",
                textAlign: "center",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {e}
            </div>
            <div
              onClick={() => handleClick(index)}
              style={{
                cursor: "pointer",
                width: "400px",
                height: "300px",
                background: "#fbd7f8",
                fontSize: "40px",
                color: "#AA336A",
                margin: "20px",
                borderRadius: "4px",
                padding: "20px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {answer[index]}
            </div>
          </ReactCardFlip>
        );
      })}
    </div>
  );
}

export default App;
