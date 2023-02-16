import styled from "styled-components";
import Pencil from "./Pencil.jpg";
export const HomeStyle = styled.div`
  margin: 0;
  height: 100vh;
  background-image: url(${Pencil});
  background-position: center;
  background-size: cover;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
