import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.3);
  background-color: white;
  transform-style: preserve-3d;
//   heigt: 150px;
//   width: 150px;
  transition: 150ms;
  cursor:pointer;
  transform: perspective(1000px) rotateY(var(--rotate-y, 0));

    :hover{
    //    background: blue
    };
  &.flip {
    color: red;
    --rotate-y: 180deg;
  }

  .front,
  .back {
    postion: absolute;
    padding: 1rem;
    backface-visibility: hidden;
  }
  .front{
    left:0;
  }
  .back {
    color: red;
    transform: rotateY(180deg);
    text-align: center
  }

`;
