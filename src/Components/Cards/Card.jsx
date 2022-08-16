import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Card.css";

export const Card = ({ pokemonList }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  // Después probar con UseState

  let index;

  let newPokemon;

  pokemonList.map((poke, i) => {
    if (poke.name === name) {
      newPokemon = poke;
      index = i;
    }
  });

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
        {/* LEFT ARROW */}
        <Link
          to={`/card/${
            pokemonList[index - 1]
              ? pokemonList[index - 1].name
              : pokemonList[pokemonList.length - 1].name
          } `}
        >
          <img
            className="leftArrow"
            src="/Imagenes/Recursos/Frame.svg"
            alt=""
          />
        </Link>

        <img className="pokemonImg" src={newPokemon.img} alt="" />
        {/* RIGTH ARROW */}
        <Link
          to={`/card/${
            pokemonList[index + 1]
              ? pokemonList[index + 1].name
              : pokemonList[0].name
          } `}
        >
          <img src="/Imagenes/Recursos/Frame.svg" alt="" />
        </Link>
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
        {/* ABOUT SECTION */}
        <h2 style={{ color: `${newPokemon.primary_color}` }}>About</h2>
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
        {/* STATS SECTION */}
        <h2 style={{ color: `${newPokemon.primary_color}` }}>Base Stats</h2>
        <section className="baseStats">
          <div className="statName">
            <span style={{ color: `${newPokemon.primary_color}` }}>HP</span>
            <span style={{ color: `${newPokemon.primary_color}` }}>ATK</span>
            <span style={{ color: `${newPokemon.primary_color}` }}>DEF</span>
            <span style={{ color: `${newPokemon.primary_color}` }}>SATK</span>
            <span style={{ color: `${newPokemon.primary_color}` }}>SDEF</span>
            <span style={{ color: `${newPokemon.primary_color}` }}>SPD</span>
          </div>
          <div className="statValue">
            <span>
              <div>{newPokemon.hp}</div>
              <progress
                className="statProgress"
                value={newPokemon.hp}
                max="100"
              ></progress>
            </span>

            <span>
              <div>{newPokemon.atk}</div>
              <progress
                className="statProgress"
                value={newPokemon.atk}
                max="100"
              ></progress>
            </span>
            <span>
              <div>{newPokemon.def}</div>
              <progress
                className="statProgress"
                value={newPokemon.def}
                max="100"
              ></progress>
            </span>
            <span>
              <div>{newPokemon.satk}</div>
              <progress
                className="statProgress"
                value={newPokemon.satk}
                max="100"
              ></progress>
            </span>
            <span>
              <div>{newPokemon.sdef}</div>
              <progress
                className="statProgress"
                value={newPokemon.sdef}
                max="100"
              ></progress>
            </span>
            <span>
              <div>{newPokemon.spd}</div>
              <progress
                className="statProgress"
                value={newPokemon.spd}
                max="100"
              ></progress>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
