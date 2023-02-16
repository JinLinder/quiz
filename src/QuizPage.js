import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card/Card.js";
import Score from "./Score";
import Spinner from "./Spinner.js";
import { QuizPageStyle, CardWrapper } from "./style/QuizPageStyle";


export default function QuizPage() {
  const [flashcards, setFlashcards] = useState();
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const fetch = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=10");
      const result = response.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer);
        const options = [
          ...questionItem.incorrect_answers.map((a) => decodeString(a)),
          answer,
        ];

        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - 0.5),
        };
      });
      //console.log(result);
      setFlashcards(result);
    } catch (err) {
      console.log(err);
    }
  };
  const handleScore = () => {
    setScore(score + 1);
  };
  useEffect(() => {
    fetch();
  }, []);

  const decodeString = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  const playNext = () => {
    setNum(num + 1);
  };
  console.log(flashcards);
  return (
    <QuizPageStyle>
      <Score score={score} />
      <CardWrapper>
        {flashcards ? (
          <Card
            handleScore={handleScore}
            flashcards={flashcards}
            flashcard={flashcards[num]}
            playNext={playNext}
            numOfQues={flashcards.length - 1}
            num={num}
          />
        ) : (
          <Spinner />
        )}
      </CardWrapper>
    </QuizPageStyle>
  );
}
