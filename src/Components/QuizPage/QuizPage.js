import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";
import Score from "./Score";
import Spinner from "../Globle/Spinner.js";
import { QuizPageStyle, CardWrapper } from "../../style/QuizPage/QuizPageStyle";
import { useSelector } from "react-redux";

export default function QuizPage() {
  const [flashcards, setFlashcards] = useState();
  const [num, setNum] = useState(0);
  const select = useSelector((state) => state.select);

  const fetch = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php",{
        params: {
          amount:select.amount,
          category: select.category
        }
      });
      console.log(response.data.results);
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
      console.log(result);
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

  const playNext = () => {
    setNum(num + 1);
  };

  return (
    <QuizPageStyle>
      <Score />
      <CardWrapper>
        {flashcards ? (
          <Card
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
