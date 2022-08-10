import React from "react";
import "./box.css";

export const PokemonBox = ({ name, id, img, primary_color }) => {
  return (
    <div className="box" style={{ backgroundColor: `${primary_color}` }}>
      <div className="header-box">
        <p style={{ color: `${primary_color}` }}>#{id}</p>
        <img src={img} />
      </div>
      <div className="box-title">
        <h3>{name}</h3>
      </div>
    </div>
  );
};
