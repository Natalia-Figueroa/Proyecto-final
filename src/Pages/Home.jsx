import "../App.css";
import { PokemonBox } from "../Components/Box/PokemonBox";
import { pokemon } from "../Database/Pokemon";

export const Home = () => {
  return (
    <div className="App">
      {pokemon.map((poke) => (
        <PokemonBox
          name={poke.name}
          id={poke.id}
          img={poke.img}
          primary_color={poke.primary_color}
        />
      ))}
    </div>
  );
};
