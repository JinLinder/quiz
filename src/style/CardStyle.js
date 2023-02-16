import styled from "styled-components";
import { theme } from "./Theme";

export const CardWrapper = styled.div`
  background-color: ${theme.colors.ligthYellow};
  color: ${theme.colors.darkBrown};
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-content: center;
  // text-align: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.3);
  min-width: 50%;
  transform-style: preserve-3d;
  transition: 150ms;
  transform: rotateY(var(--rotate-y, 0));

  &.flip {
    --rotate-y: 180deg;
  }

  .front,
  .back {
    postion: absolute;
    padding: 1rem;
    backface-visibility: hidden;
  }


  .back {
    transform: rotateY(180deg);
    text-align: center;
  }

  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
`;
