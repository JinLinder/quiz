import React, { useState } from "react";
import { CardWrapper } from "../style/StyleCard";
export default function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  return (
    <CardWrapper
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >

        <div className="front">
          {flashcard.question}
          <div className="flashcard-options">
            {flashcard.options.map((option, index) => {
              return <div key={index}>{option}</div>;
            })}
          </div>
        </div>

        <div className="back">Answer{flashcard.answer}</div>

    </CardWrapper>
  );
}
