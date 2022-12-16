import styled from "styled-components";
import { Colors } from "../../themes/themeColors";

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 80px;
  padding: 10px;
  background-color: ${Colors.primary};
  border-bottom: 1px solid ${Colors.yellow};

  nav {
    display: flex;
    gap: 10px;

    a:nth-child(1) {
      color: ${Colors.yellow};
    }

    a {
      font-size: 1rem;
      color: ${Colors.white};
    }
  }
`;

export const TitleText = styled.h1`
  color: ${Colors.yellow};
  font-size: 1.25rem;
`;
