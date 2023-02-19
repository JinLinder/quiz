import React from "react";
import { SpinnerStyle } from "../style/Global/SpinnerStyle";
export default function Spinner() {
  return (
    <SpinnerStyle className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerStyle>
  );
}
