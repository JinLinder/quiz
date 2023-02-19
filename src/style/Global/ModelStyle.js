import styled from "styled-components";
import { theme } from "./Theme";

export const ModalWrapper = styled.div`
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 3rem;
    z-index: 1000;
  }

  .overLay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }
`;
