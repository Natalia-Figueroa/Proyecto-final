import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Card.css";

export const Card = ({ pokemonList }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  // Después probar con UseState

  let index;

  let newPokemon;

  let progressColor;

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
            src="/Imagenes/Recursos/arrow_back.png"
          />
          <h1>{newPokemon.name}</h1>
        </div>
        <h1>#{newPokemon.id}</h1>
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
          <img className="leftArrow" src="/Imagenes/Recursos/back.png" alt="" />
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
          <img className="nextArrow" src="/Imagenes/Recursos/next.png" alt="" />
        </Link>
      </div>
      {/* EL WHITE BOX */}
      <div className="whiteBox">
        {/* POKEMON TYPE*/}
        <div className="types">
          {newPokemon.type[0] && newPokemon.type[1] ? (
            <>
              <p style={{ backgroundColor: `${newPokemon.primary_color}` }}>
                {newPokemon.type[0]}
              </p>
              <p style={{ backgroundColor: `${newPokemon.secondary_color}` }}>
                {newPokemon.type[1]}
              </p>
            </>
          ) : (
            <>
              <p style={{ backgroundColor: `${newPokemon.primary_color}` }}>
                {newPokemon.type[0]}
              </p>
            </>
          )}
        </div>
        {/* ABOUT SECTION */}
        <h2
          className="aboutTitle"
          style={{ color: `${newPokemon.primary_color}` }}
        >
          About
        </h2>
        <section className="about">
          <div className="weight">
            <div>
              <img src="/Imagenes/Recursos/Weight.svg" />
              <p>{newPokemon.weight} kg</p>
            </div>
            <span>Weight</span>
          </div>
          <div className="height">
            <div>
              <img src="/Imagenes/Recursos/Height.svg" />
              <p>{newPokemon.heigth} m</p>
            </div>
            <span>Height</span>
          </div>
          <div className="moves">
            <div>
              <p className="movesTitle">{newPokemon.moves[0]}</p>
              <p className="movesTitle">{newPokemon.moves[1]}</p>
            </div>
            <span>Moves</span>
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
                className={`statProgress ${pokemonList[index].name} `}
                value={newPokemon.hp}
                max="100"
              ></progress>
            </span>

            <span>
              <div>{newPokemon.atk}</div>
              <progress
                className={`statProgress ${pokemonList[index].name} `}
                value={newPokemon.atk}
                max="100"
              ></progress>
            </span>
            <span>
              <div>{newPokemon.def}</div>
              <progress
                className={`statProgress ${pokemonList[index].name} `}
                value={newPokemon.def}
                max="100"
              ></progress>
            </span>
            <span>
              <div>{newPokemon.satk}</div>
              <progress
                className={`statProgress ${pokemonList[index].name} `}
                value={newPokemon.satk}
                max="100"
              ></progress>
            </span>
            <span>
              <div>{newPokemon.sdef}</div>
              <progress
                className={`statProgress ${pokemonList[index].name} `}
                value={newPokemon.sdef}
                max="100"
              ></progress>
            </span>
            <span>
              <div>{newPokemon.spd}</div>
              <progress
                className={`statProgress ${pokemonList[index].name} `}
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
