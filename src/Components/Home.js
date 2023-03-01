import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeStyle } from "../style/HomeStyle";
import { Title } from "../style/Global/GlobleStyle";
import Select from "../Components/QuizPage/Select";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    console.log("Start");
    navigate("/quiz");
  };


  return (
    <HomeStyle>
      <Title>Welcome to the quize world!</Title>
      <Select />
      {/* <Button onClick={handleStart}> Start the quiz</Button> */}
    </HomeStyle>
  );
}