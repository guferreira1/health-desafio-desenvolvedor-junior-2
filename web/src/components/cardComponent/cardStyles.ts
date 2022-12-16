import styled from "styled-components";
import { Colors } from "../../themes/themeColors";

export const Card = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  margin: 0 auto;
  padding: 10px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    height: 180px;
    margin: 0 auto;
    padding: 10px;
    background-color: ${Colors.secundary};
    border-radius: 5px;

    p {
      font-size: 1rem;
      color: ${Colors.white};
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 25px;
      border-radius: 5px;
      border: none;
      background-color: ${Colors.yellowMustard};
      color: ${Colors.secundary};
      font-size: 0.875rem;
      transition: 0.5s ease;
      cursor: pointer;

      :hover {
        background-color: ${Colors.yellow};
      }
    }
  }
`;
