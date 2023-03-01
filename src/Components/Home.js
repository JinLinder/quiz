import React from "react";
import { HomeStyle } from "../style/HomeStyle";
import { Title } from "../style/Global/GlobleStyle";
import Select from "../Components/QuizPage/Select";

export default function Home() {
  return (
    <HomeStyle>
      <Title>Welcome to the quize world!</Title>
      <Select />
      {/* <Button onClick={handleStart}> Start the quiz</Button> */}
    </HomeStyle>
  );
}
