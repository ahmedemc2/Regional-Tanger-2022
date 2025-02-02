import React from "react";
import { useSelector } from "react-redux";
import Stagiaire from "./Stagiaire";
import "./ListStagiaire.css";

const ListStagiaire = () => {
  const stagiaires = useSelector((state) => state.stagiaires.stagiaires);

  return (
    <>
      <div className="liste">
        {stagiaires.map((stagiaire) => (
          <Stagiaire key={stagiaire.id} stagiaire={stagiaire} />
        ))}
      </div>
    </>
  );
};

export default ListStagiaire;
