import { useState } from "react";
import "../App.css";
import { PokemonBox } from "../Components/Box/PokemonBox";
import { pokemonList } from "../Database/Pokemon";

export const Home = () => {
  const [order, setOrder] = useState(true);
  const [search, setSearch] = useState("");

  const handleOrder = () => {
    setOrder(!order);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
    matchSearch();
  };

  const regef = `/${search}/i`;

  const matchSearch = () => {
    const found = pokemonList.match(regef);
    console.log(found);
  };

  return (
    <div className="container">
      <header>
        <img src="./Imagenes/Recursos/Pokeball.png" />
        <h1>Pokédex</h1>
        <section className="order arrow" onClick={handleOrder}>
          {order ? <p>#</p> : <p>Aa</p>}
          <img src="./Imagenes/Recursos/Arrow.svg" />
        </section>
      </header>
      <input type="search" placeholder="Buscar" onChange={handleSearch} />
      <div className="App">
        {pokemonList.map((poke) => (
          <PokemonBox
            name={poke.name}
            id={poke.id}
            img={poke.img}
            primary_color={poke.primary_color}
          />
        ))}
      </div>
    </div>
  );
};
