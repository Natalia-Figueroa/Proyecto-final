import React from "react";
import { useParams } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const { name } = useParams();
  // encontrar en la lista de pokemon, que este componente recibe como parametro)
  // todos los datos del pokemon con el nombre = nombre params

  let selectedPokemon = [];

  pokemon.map((poke) => {
    if (poke.name === name) {
      selectedPokemon.push(poke);
      return selectedPokemon;
    }
  });

  const newPokemon = selectedPokemon[0];

  return (
    <div className="card">
      <div className="pokeHeader">
        <h1>{newPokemon.name}</h1>
        <p>#{newPokemon.id}</p>
      </div>
      <div className="pokeImg">
        <img src={newPokemon.img} alt="" />
        <img src="" alt="" />
      </div>
      <div className="types">
        <p>{newPokemon.type[0]}</p>
        <p>{newPokemon.type[1]}</p>
      </div>
      <h2>About</h2>
      <section className="about">
        <div className="weight">
          <div>
            <img src="./Imagenes/Recursos/Weight.svg" />
            <p>{newPokemon.weight}</p>
          </div>
          <p>Weight</p>
        </div>
        <div className="height">
          <div>
            <img src="./Imagenes/Recursos/Height.svg" />
            <p>{newPokemon.heigth}</p>
          </div>
          <p>Height</p>
        </div>
        <div className="moves">
          <div>
            <p>{newPokemon.moves[0]}</p>
            <p>{newPokemon.moves[1]}</p>
          </div>
          <p>Moves</p>
        </div>
      </section>
      <p>{newPokemon.description}</p>
      <h2>Base Stats</h2>
    </div>
  );
};
