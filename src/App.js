import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashCardList from "./FlashCardList";

function App() {
  const [flashcards, setFlashcard] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=10");
      console.log(response.data);
      const result = response.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [...questionItem.incorrect_answers.map(a=>decodeString(a)), answer]
        // console.log(options);
        return {
          id: `${index}-${Date.now()}`,
          question:decodeString(questionItem.question),
          answer: answer,
          options: options.sort(()=>Math.random() - 0.5)
        }
      });
      console.log(result)
      setFlashcard(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  const decodeString = (str)=>{
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }
  return (
    <div className="App">
      <FlashCardList flashcards={flashcards} />
      <h1>Quiz</h1>
    </div>
  );
}

const Sample_flashcoards = [
  {
    id: 1,
    question: "what is 2+2?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "what is 2*2?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
];

export default App;
