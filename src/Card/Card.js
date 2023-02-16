import React, { useState } from "react";
import { CardWrapper } from "../style/CardStyle";
import { useNavigate } from "react-router-dom";
import { Title, NormalText, Button } from "../style/GlobleStyle";
import { scoreAction } from "../Actions";
import { useSelector, useDispatch } from "react-redux";

export default function Card({
  flashcards,
  flashcard,
  playNext,
  numOfQues,
  num,
  handleScore,
}) {
  const [flip, setFlip] = useState(false);
  const [msg, setMsg] = useState("");
  const [chosenAns, setChosenAns] = useState("");
  const [selected, setSelected] = useState({ checked: false, item: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // e.preventdefault();
    setFlip(!flip);
    setSelected({ checked: false, item: null });
    if (chosenAns && chosenAns === flashcard.answer) {
      setMsg("congrate! You get a point");
     // handleScore();
     dispatch(scoreAction())
    } else {
      setMsg(`Sorry, the correct answer is ${flashcard.answer}`);
    }
    console.log(msg);
  };

  const message = () => {
    return <NormalText>{msg}</NormalText>;
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

  const handleFinishBtn = () => {
    navigate("/");
    console.log("finished");
  };
  return (
    <CardWrapper className={`card ${flip ? "flip" : ""}`} flip={flip}>
      {!flip ? (
        <div className="front">
          <Title className="question">{flashcard.question}</Title>
          <form className="answers">
            {flashcard.options.map((option, index) => {
              return (
                <NormalText key={index}>
                  <input
                    type="checkbox"
                    name={index}
                    value={option}
                    onChange={handleCheckBox}
                    checked={
                      selected.checked && index.toString() === selected.item
                    }
                    disabled={
                      selected.checked && index.toString() !== selected.item
                    }
                  ></input>
                  <label htmlFor={index}>{option}</label> <br />
                </NormalText>
              );
            })}
          </form>
          <div className="button">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      ) : (
        <div className="back">
          {message()}
          {numOfQues !== num ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <>
              <Button>Start a new Challenge</Button>
              <Button onClick={handleFinishBtn}>Finished</Button>
            </>
          )}
        </div>
      )}
    </CardWrapper>
  );
}
