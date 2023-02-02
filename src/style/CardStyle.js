import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  transition: 150ms;
  transform: rotateY(var(--rotate-y, 0));
  &.flip {
    color: blue;
    --rotate-y: 180deg;
  }

  .front,
  .back {
    postion: absolute;
    padding: 1rem;
    backface-visibility: hidden;
  }

  .back {
    color: red;
    transform: rotateY(180deg);
    text-align: center
  }
`;
