import styled from "styled-components";
import { theme } from "../Global/Theme";

export const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1.5rem;


  label {
    color: ${theme.colors.darkBrown};
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: .5rem;

    @media ${theme.devices.tablet} {
      font-weight: 500;
      font-size: 0.8rem;
      margin-bottom: .5rem;
    }

    @media ${theme.devices.mobileM} {
      font-weight: 400;
      font-size: 0.6rem;
      margin-bottom: .5rem;
    }

    @media ${theme.devices.mobileS} {
      font-weight: 400;
      font-size: 0.4rem;
      margin-bottom: .5rem;
    }
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
  }

  .form-group.btn {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .btn {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
