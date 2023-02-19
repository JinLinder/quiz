import React from "react";
import QuizPage from "./QuizPage/QuizPage";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/Global/Theme";
import Select from "./QuizPage/Select";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

// const Sample_flashcoards = [
//   {
//     id: 1,
//     question: "what is 2+2?",
//     answer: "4",
//     options: ["2", "3", "4", "5"].sort(() => Math.random() - 0.5),
//   },
//   {
//     id: 2,
//     question: "what is 2*2?",
//     answer: "4",
//     options: ["2", "3", "4", "5"],
//   },
// ];

export default App;
