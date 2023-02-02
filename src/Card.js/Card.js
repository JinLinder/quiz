import React, { useState } from "react";
import { CardWrapper } from "../style/CardStyle";

export default function Card({ flashcards, flashcard, playNext, numOfQues, num }) {
  const [flip, setFlip] = useState(false);
  const [msg, setMsg] = useState("");
  const [chosenAns, setChosenAns] = useState("");
  const [selected, setSelected] = useState({ checked: false, item: null });
  // const [num, setNum] = useState(0)
  //  const flashcard = flashcards[0]

  const handleSubmit = (e) => {
    // e.preventdefault();

    setFlip(!flip);
    setSelected({ checked: false, item: null });
    if (chosenAns && chosenAns === flashcard.answer) {
      setMsg("congrate! You get a point");
    } else {
      setMsg(`Sorry, the correct answer is ${flashcard.answer}`);
    }
    console.log(msg);
  };

  const message = () => {
    return <p>{msg}</p>;
  };
  const handleCheckBox = (e) => {
    setChosenAns(e.target.value);
    setSelected({ checked: e.target.checked, item: e.target.name });
  };
  const handleNext = () => {
    console.log(selected.checked, selected.item);
    setFlip(!flip);
    playNext();
  };
console.log(flashcard)
  return (
    <CardWrapper className={`card ${flip ? "flip" : ""}`}>
    <div className="front">
        <h1 className="question">{flashcard.question}</h1>
        <form className="answers">
          {flashcard.options.map((option, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name={index}
                  value={option}
                  onChange={handleCheckBox}
                  checked={selected.checked && index.toString() === selected.item}                               
                  disabled={selected.checked && index.toString() !== selected.item}    
                ></input>
                <label htmlFor={index}>{option}</label> <br />
              </div>
            );
          })}
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="back">
        {message()}{" "}
        {numOfQues !== num ? <button onClick={handleNext}>Next</button> : null}{" "}
      </div> 
    </CardWrapper>
  );
}
