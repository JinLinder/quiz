import React from "react";
import { SpinnerStyle } from "./style/SpinnerStyle";
export default function Spinner() {
  return (
    <SpinnerStyle class="lds-spinner">
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
