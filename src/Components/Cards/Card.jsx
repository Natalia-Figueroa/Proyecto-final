import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/card")} className="card">
      <div className="pokeHeader">
        <h1>{props.name}</h1>
        <p>#{props.id}</p>
      </div>
      <div className="pokeImg">
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
      <h2>Base Stats</h2>
    </div>
  );
};
