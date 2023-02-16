import styled from "styled-components";
import { theme } from "./Theme";

export const Title = styled.h1`
  margin: 3rem;
  font-weight: 500;
  font-size: 2rem;

  @media ${theme.devices.tablet} {
    margin: 1.5rem;
    font-weight: 400;
    font-size: 1.5rem;
  }

  @media ${theme.devices.mobileM} {
    margin: 1rem;
    font-weight: 300;
    font-size: 1rem;
  }

  @media ${theme.devices.mobileS} {
    margin: 0.5rem;
    font-weight: 200;
    font-size: 0.6rem;
  }
`;

export const NormalText = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin: 1rem 3rem;

  @media ${theme.devices.tablet} {
    font-weight: 400;
    font-size: 0.8rem;
    margin: 1rem 1.5rem;
  }

  @media ${theme.devices.mobileM} {
    font-weight: 300;
    font-size: 0.6rem;
    margin: 0.8rem 1rem;
  }

  @media ${theme.devices.mobileS} {
    font-weight: 200;
    font-size: 0.4rem;
    margin: 0.5rem;
  }
`;

export const Button = styled.button`
  text-align: center;
  background-color: ${theme.colors.mediumBrown};
  color: white;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  height: 2rem;
  min-width: 5rem;
  padding: 0 0.75rem;
  margin: 0.5rem 2rem;
  font-weight: 400;
  font-size: 1.2rem;
  :hover {
    transform: scale(1.05);
    background-color: ${theme.colors.darkBrown};
    font-weight: 500;
  }

  @media ${theme.devices.mobileS} {
    font-weight: 200;
    font-size: 0.4rem;
    height: 1rem;
    min-width: 3rem;
  }

  @media ${theme.devices.mobileM} {
    font-weight: 300;
    font-size: 0.6rem;
    height: 1.5rem;
    min-width: 4rem;
  }
`;
