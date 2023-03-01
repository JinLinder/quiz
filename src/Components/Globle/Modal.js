import React from "react";
import { ModalWrapper } from "../../style/Global/ModelStyle";
import ReactDOM from "react-dom";

export default function Modal({ children, open }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <ModalWrapper>
        <div className="overLay"></div>
        <div className="modal">{children}</div>
      </ModalWrapper>
    </>,
    document.getElementById("portal")
  );
}
