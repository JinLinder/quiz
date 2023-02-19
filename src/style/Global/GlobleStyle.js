import styled from "styled-components";
import { theme } from "./Theme";
import { XCircleFill } from 'react-bootstrap-icons';

export const Title = styled.h1`
  color: ${theme.colors.darkBrown};
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
  color: ${theme.colors.darkBrown};
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

export const ButtonUnable = styled.button`
  text-align: center;
  background-color: grey;
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

export const RowC = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
`

export const Input = styled.input`
  color: ${theme.colors.mediumBrown};
  margin: auto;
  display: block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 400;
  font-size: 1rem;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  :focus {
    outline: none !important;
    border: 1px solid ${theme.colors.mediumBrown};
  }

  @media ${theme.devices.tablet} {
    font-weight: 400;
    font-size: 0.8rem;
  }

  @media ${theme.devices.mobileM} {
    font-weight: 300;
    font-size: 0.6rem;
  }

  @media ${theme.devices.mobileS} {
    font-weight: 200;
    font-size: 0.4rem;
  }
`;

export const SelectBox = styled.select`
  color: ${theme.colors.mediumBrown};
  margin: auto;
  display: block;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 400;
  font-size: 1rem;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  :focus {
    outline: none !important;
    border: 1px solid ${theme.colors.mediumBrown};
  }
  @media ${theme.devices.tablet} {
    font-weight: 400;
    font-size: 0.8rem;
  }

  @media ${theme.devices.mobileM} {
    font-weight: 300;
    font-size: 0.6rem;
  }

  @media ${theme.devices.mobileS} {
    font-weight: 200;
    font-size: 0.4rem;
  }
`;

export const CloseIcon = styled(XCircleFill)`
  color: #000000;
  opacity: 50%;
  height: 2rem;
  width: 2rem;
  padding: 1rem;
  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;