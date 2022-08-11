import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Card.css";

export const Card = ({ pokemonList }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  // Después probar con UseState

  let selectedPokemon = [];

  pokemonList.map((poke) => {
    if (poke.name === name) {
      selectedPokemon.push(poke);
      return selectedPokemon;
    }
  });

  const newPokemon = selectedPokemon[0];

  return (
    <div
      style={{ backgroundColor: `${newPokemon.primary_color}` }}
      className="card"
    >
      {/* PROFILE HEADER */}
      <div className="pokeHeader">
        <div className="name_arrow">
          <img
            onClick={() => navigate("/")}
            src="/Imagenes/Recursos/arrow-left.svg"
          />
          <h1>{newPokemon.name}</h1>
        </div>
        <p>#{newPokemon.id}</p>
      </div>
      {/* POKEMON IMAGE AND ARROW */}
      <img className="pokeballImg" src="/Imagenes/Recursos/Pokeball.png" />
      <div className="pokeImgSection">
        <img className="leftArrow" src="/Imagenes/Recursos/Frame.svg" alt="" />
        <img className="pokemonImg" src={newPokemon.img} alt="" />
        <img src="/Imagenes/Recursos/Frame.svg" alt="" />
      </div>
      {/* EL WHITE BOX */}
      <div className="whiteBox">
        {/* POKEMON TYPE*/}
        <div className="types">
          <p style={{ backgroundColor: `${newPokemon.primary_color}` }}>
            {newPokemon.type[0]}
          </p>
          <p style={{ backgroundColor: `${newPokemon.secondary_color}` }}>
            {newPokemon.type[1]}
          </p>
        </div>
        <h2>About</h2>
        <section className="about">
          <div className="weight">
            <div>
              <img src="/Imagenes/Recursos/Weight.svg" />
              <p>{newPokemon.weight}</p>
            </div>
            <p>Weight</p>
          </div>
          <div className="height">
            <div>
              <img src="/Imagenes/Recursos/Height.svg" />
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
    </div>
  );
};
