import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashCardList from "./FlashCardList";
import Card from "./Card.js/Card";
function App() {
  // const [flashcards, setFlashcards] = useState([]);
  const [flashcards, setFlashcards] = useState(Sample_flashcoards);
  const [num, setNum] = useState(0)

  const fetch = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=10");
      const result = response.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer);
        const options = [
          ...questionItem.incorrect_answers.map((a) => decodeString(a)),
          answer,
        ];
         //console.log(options);
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - 0.5),
        };
      });
      setFlashcards(result);
 
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const decodeString = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  const playNext = () => {setNum(num+1)};
  console.log(flashcards)
  // console.log(flashcards[0].question)
  return (
    <div className="App">
      <Card flashcards = {flashcards} flashcard={flashcards[num]} playNext={playNext} numOfQues={flashcards.length-1} num={num}/>
    </div>
  );
}

const Sample_flashcoards = [
  {
    id: 1,
    question: "what is 2+2?",
    answer: "4",
    options: ["2", "3", "4", "5"].sort(() => Math.random() - 0.5),
  },
  {
    id: 2,
    question: "what is 2*2?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
];

export default App;
