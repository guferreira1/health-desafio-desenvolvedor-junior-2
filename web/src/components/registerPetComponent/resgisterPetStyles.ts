import styled from "styled-components";
import { Colors } from "../../themes/themeColors";

export const CreatePet = styled.div`
  background-color: ${Colors.secundary};
  width: 80%;
  height: max-content;
  margin: 5% auto;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.5rem;
      color: ${Colors.white};
      text-align: center;
    }

    label {
      display: flex;
      margin-top: 10px;
      color: ${Colors.white};
      font-size: 0.8rem;
    }

    input {
      font-size: 12px;
      color: ${Colors.white};
      height: 30px;
      border: none;
      border-radius: 5px;
      padding-left: 10px;
      background-color: ${Colors.secundary};
      border: 2px solid ${Colors.yellowMustard};
    }

    select {
      font-size: 12px;
      color: ${Colors.white};
      height: 30px;
      border: none;
      border-radius: 5px;
      padding-left: 10px;
      background-color: ${Colors.secundary};
      border: 1px solid ${Colors.yellowMustard};
    }

    button {
      background-color: ${Colors.yellowMustard};
      color: ${Colors.primary};
      font-weight: 700;
      height: 30px;
      margin-top: 10px;
      border: none;
      border-radius: 5px;
    }

    p {
      font-size: 10px;
      margin-top: 2px;
      color: ${Colors.feedback.negative};
    }
  }
  @media (min-width: 700px) {
    width: 50%;
    height: max-content;
  }
`;
