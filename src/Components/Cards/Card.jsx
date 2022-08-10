import React from "react";
import { useParams } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const { nombre } = useParams();
  // encontrar en la lista de pokemon que este componente recibe como parametro
  // todos los datos del pokemon con el nombre = nombre params
  return (
    <div className="card">
      <div className="pokeHeader">
        <h1>{pokemon.name}</h1>
        <p>#{pokemon.id}</p>
      </div>
      {/* <div className="pokeImg">
        <img src={props.img} alt="" />
        <img src="" alt="" />
      </div>
      <div className="types">
        <p>{props.type}</p>
        <p>{props.type}</p>
      </div>
      <h2>About</h2>
      <section className="about">
        <div className="weight">
          <div>
            <img src="./Imagenes/Recursos/Weight.svg" />
            <p>{props.weight}</p>
          </div>
          <p>Weight</p>
        </div>
        <div className="height">
          <div>
            <img src="./Imagenes/Recursos/Height.svg" />
            <p>{props.heigth}</p>
          </div>
          <p>Height</p>
        </div>
        <div className="moves">
          <div>
            <p>{props.moves}</p>
            <p>{props.moves}</p>
          </div>
          <p>Moves</p>
        </div>
      </section>
      <p>{props.description}</p>
      <h2>Base Stats</h2> */}
    </div>
  );
};
