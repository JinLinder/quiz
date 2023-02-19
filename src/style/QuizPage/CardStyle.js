import styled from "styled-components";
import { theme } from "../Global/Theme";

export const CardWrapper = styled.div`
  background-color: ${theme.colors.ligthYellow};
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.3);
  min-width: 50%;
  transform-style: preserve-3d;
  transition: 150ms;
  transform: rotateY(var(--rotate-y, 0));
  z-index: 1;
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
  .title {
    display:flex;
    flex-direction:row;
  }
`;
