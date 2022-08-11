import { useState } from "react";
import "../App.css";
import { PokemonBox } from "../Components/Box/PokemonBox";
import { pokemonList } from "../Database/Pokemon";

export const Home = () => {
  const [order, setOrder] = useState(true);
  const [chosenList, setChosenList] = useState(pokemonList);

  const handleOrder = () => {
    setOrder(!order);
  };

  let search;
  let filteredList;

  const handleSearch = (e) => {
    search = e.target.value;
    filteredList = pokemonList.filter((poke) => {
      return poke.name.match(search);
    });
    if ((search = 0)) {
      setChosenList(pokemonList);
    } else {
      setChosenList(filteredList);
    }
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
        {chosenList.map((poke) => (
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

// if search.length === 0 dibuja pokemonlist : dibuja filteredList
