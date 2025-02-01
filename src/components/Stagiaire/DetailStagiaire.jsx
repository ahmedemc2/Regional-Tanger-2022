import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailStagiaire = () => {
  const { nom } = useParams();
  const stagiaires = useSelector((state) => state.stagiaires);
  const stagiaire = stagiaires.find((stagiaire) => stagiaire.nom === nom);

  return (
    <>
      <div className="card w-25 m-auto mt-5">
        <img
          src={stagiaire.image}
          alt={stagiaire.nom}
          className="card-img-top"
        />
        <div className="card-body text-center">
          <h4 className="card-title">
            {stagiaire.nom + " " + stagiaire.prenom}
          </h4>
          <p className="card-text">{stagiaire.fillière}</p>
        </div>
      </div>
    </>
  );
};

export default DetailStagiaire;
