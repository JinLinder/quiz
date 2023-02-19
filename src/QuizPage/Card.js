import React, { useState } from "react";
import { CardWrapper } from "../style/QuizPage/CardStyle";
import { useNavigate } from "react-router-dom";
import {
  Title,
  NormalText,
  Button,
  CloseIcon,
} from "../style/Global/GlobleStyle";
import { scoreAction } from "../Actions/ScoreAction";
import { useDispatch } from "react-redux";
import { resetAction } from "../Actions/SelectAction";
import Modal from "../Globle/Modal";

export default function Card({ flashcard, playNext, numOfQues, num }) {
  const [flip, setFlip] = useState(false);
  const [msg, setMsg] = useState("");
  const [chosenAns, setChosenAns] = useState("");
  const [selected, setSelected] = useState({ checked: false, item: null });
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // e.preventdefault();
    setFlip(!flip);
    setSelected({ checked: false, item: null });
    if (chosenAns && chosenAns === flashcard.answer) {
      setMsg("Good job!");
      // handleScore();
      dispatch(scoreAction());
    } else {
      setMsg(`Opps! The correct answer is ${flashcard.answer}.`);
    }
    console.log(msg);
  };

  const message = () => {
    return <Title>{msg}</Title>;
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
    dispatch(resetAction({ category: 10, amount: 2 }));
  };

  const handleCancle = () => {
    // navigate("/");
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleQuit = () => {};

  return (
    <>
      <Modal open={openModal} closeModal={closeModal}>
        This is the a Modal
        <button onClick={closeModal}>Cancle</button>
        <button onClick={handleQuit}>Quit</button>
      </Modal>
      <CardWrapper className={`card ${flip ? "flip" : ""}`} flip={flip}>
        {!flip ? (
          <div className="front">
            <div className="title">
              <Title className="question">{flashcard.question}</Title>
              <CloseIcon onClick={handleCancle} />
            </div>

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
    </>
  );
}
