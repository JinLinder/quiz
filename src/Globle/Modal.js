import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalWrapper } from "../style/Global/ModelStyle";
import ReactDOM from "react-dom";
// export default function Modal({open, onClose}) {

//   console.log(open)
//   const navigate = useNavigate();

//   const handleQuit= () => {
//     navigate("/");

//   };
//     if(!open) return null
//   return (
//     <ModalWrapper>
//       <h1>Are you sure you want to quit?</h1>
//       <button onClick={onClose}>Cancle</button>
//       <button onClick = {handleQuit}>Quit</button>
//     </ModalWrapper>
//   );
// }

export default function Modal({ children, open, closeModal }) {
  // console.log(open)
  // const navigate = useNavigate();

  // const handleQuit= () => {
  //   navigate("/");

  // };
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
