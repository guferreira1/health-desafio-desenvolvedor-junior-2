import { Link } from "react-router-dom";
import { HeaderStyles, TitleText } from "./headerStyles";

export const HeaderComponent = () => {
  return (
    <HeaderStyles>
      <TitleText>PetShop</TitleText>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/pets"}>Pets</Link>
      </nav>
    </HeaderStyles>
  );
};
