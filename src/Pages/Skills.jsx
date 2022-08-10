import React from "react";
import { Card } from "../Components/Cards/Card";
import { pokemon } from "../Database/Pokemon";

export const Skills = () => {
  return (
    <div>
      {pokemon.slice(2, 3).map((pok, index) => (
        <Card
          key={index}
          name={pok.name}
          id={pok.id}
          img={pok.img}
          type={pok.type}
          weight={pok.weight}
          heigth={pok.heigth}
          moves={pok.moves}
          description={pok.description}
        />
      ))}
    </div>
  );
};
