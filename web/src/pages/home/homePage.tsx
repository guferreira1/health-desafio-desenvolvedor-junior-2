import { HeaderComponent } from "../../components/headerComponent/headerComponent";
import { SearchComponent } from "../../components/searchComponent/searchComponent";
import { HomeStyles } from "./homeStyles";

export const HomePage = () => {
  return (
    <HomeStyles>
      <HeaderComponent />
      <div className="description">
        <h1>Conheça os Pets cadastrados na nossa rede!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit,
          sed neque libero voluptatem quam perferendis aliquid fuga enim
          doloribus voluptates, nulla quibusdam sequi obcaecati repellendus.
          Voluptate, quia perspiciatis. In.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non
          accusantium sunt praesentium, error quae quis repudiandae fugit sint
          laudantium ut magnam, saepe dolor animi temporibus rerum corporis
          harum amet.
        </p>
      </div>
      <SearchComponent />
    </HomeStyles>
  );
};
