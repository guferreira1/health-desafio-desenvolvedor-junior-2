import styled from "styled-components";
import { Colors } from "../../themes/themeColors";

export const HomeStyles = styled.main`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  background-color: ${Colors.primary};
  gap: 20px;
  width: 100vw;
  height: 100vh;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 20px;
    width: 80%;

    h1 {
      font-size: 1.5625rem;
      line-height: 1.875rem;
      font-weight: 700;
      color: ${Colors.secundary};
    }

    p {
      font-size: 1.125rem;
      line-height: 1.5625rem;
      color: ${Colors.white};
    }
  }
`;
