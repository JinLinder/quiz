import React, { useState } from "react";
import { CardWrapper } from "../style/QuizPage/CardStyle";
import { useNavigate } from "react-router-dom";
import {
  Title,
  NormalText,
  Button,
  CloseIcon,
  RowC,
} from "../style/Global/GlobleStyle";
import { scoreAction } from "../Actions/ScoreAction";
import { useDispatch, useSelector } from "react-redux";
import { resetAction } from "../Actions/SelectAction";
import Modal from "../Globle/Modal";

export default function Card({ flashcard, playNext, numOfQues, num }) {
  const [flip, setFlip] = useState(false);
  const [msg, setMsg] = useState("");
  const [chosenAns, setChosenAns] = useState("");
  const [selected, setSelected] = useState({ checked: false, item: null });
  const [finishModal, setFinishModal] = useState(false);
  const [quitModal, setQuitModal] = useState(false);

  const score = useSelector((state) => state.score);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setFlip(!flip);
    setSelected({ checked: false, item: null });
    if (chosenAns && chosenAns === flashcard.answer) {
      setMsg("Good job!");
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

  const handleFinishBtn = async () => {
    setFinishModal(true);
    dispatch(resetAction());
    setTimeout(() => {
      setFinishModal(false);
      navigate("/");
    }, 3000);
  };

  const handleStartNew = () => {
    navigate("/");

  };

  const handleCancle = () => {
    setQuitModal(true);
  };

  const closeModal = () => {
    setQuitModal(false);
  };

  const handleQuit = () => {
    navigate("/");
  };

  return (
    <>
      {quitModal ? (
        <Modal open={quitModal}>
          <Title>Are you sure you want to quit?</Title>
          <RowC>
            <Button onClick={closeModal}>No</Button>
            <Button onClick={handleQuit}>Yes</Button>
          </RowC>
        </Modal>
      ) : finishModal ? (
        <Modal open={finishModal}>
          <Title>Hope you hade fun! Your score is {score}</Title>
        </Modal>
      ) : null}

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
                <Button onClick={handleStartNew}>Start a new Challenge</Button>
                <Button onClick={handleFinishBtn}>Finish</Button>
              </>
            )}
          </div>
        )}
      </CardWrapper>
    </>
  );
}
