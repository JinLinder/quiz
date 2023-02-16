import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeStyle } from "./style/HomeStyle";
import { Title } from "./style/GlobleStyle";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    console.log("Start");
    navigate("/quiz");
  };
  return (
    <HomeStyle>
      <Title>Welcome to the quize world!</Title>
      <button onClick={handleStart}> Start the quiz</button>
    </HomeStyle>
  );
}
