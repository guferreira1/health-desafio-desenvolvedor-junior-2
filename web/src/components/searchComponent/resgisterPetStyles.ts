import styled from "styled-components";
import { Colors } from "../../themes/themeColors";

export const ResearchContainer = styled.div`
  background-color: ${Colors.secundary};
  width: 80%;
  height: 140px;
  margin: 0 auto;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      margin-bottom: 10px;
      color: ${Colors.white};
      font-size: 0.8rem;
    }

    .flexContainer {
      display: flex;
      flex-direction: column;

      select {
        height: 30px;
        border: none;
        border-radius: 5px;
      }

      button {
        background-color: ${Colors.yellow};
        color: ${Colors.primary};
        font-weight: 700;
        height: 30px;
        margin-top: 10px;
        border: none;
        border-radius: 5px;
      }

      @media (min-width: 700px) {
        color: red;
        flex-direction: row;
        gap: 5%;

        select {
          width: 60%;
        }

        button {
          width: 35%;
          margin-top: 0;
          cursor: pointer;
        }

        button:hover {
          opacity: 80%;
        }
      }
    }
    p {
      font-size: 12px;
      margin-top: 5px;
      color: ${Colors.feedback.negative};
    }
  }
  @media (min-width: 700px) {
    width: 60%;
    height: 90px;
  }
`;
