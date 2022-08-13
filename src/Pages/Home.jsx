import { useState } from "react";
import "../App.css";
import { PokemonBox } from "../Components/Box/PokemonBox";
import { pokemonList } from "../Database/Pokemon";

export const Home = () => {
  const [order, setOrder] = useState(false);
  const [chosenList, setChosenList] = useState(pokemonList);
  const [filter, setFilter] = useState(pokemonList);

  const handleSearch = (e) => {
    search = e.target.value;
    filteredList = chosenList.filter((poke) => {
      return poke.name.match(search);
    });
    if (search.length === 0) {
      setChosenList(filter);
    } else {
      setChosenList([...filteredList]);
    }
  };

  const handleOrder = () => {
    setOrder(!order);
    if (order) {
      const sortingAlphaList = (a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      };

      setChosenList([...chosenList].sort(sortingAlphaList));
      setFilter([...filter].sort(sortingAlphaList));
    }
    if (!order) {
      const sortingNumList = (a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
      };

      setChosenList([...chosenList].sort(sortingNumList));
      setFilter([...filter].sort(sortingNumList));
    }
  };

  let search;
  let filteredList;

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
